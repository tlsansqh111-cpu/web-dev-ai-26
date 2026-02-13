document.querySelector("#fetchCoins").addEventListener("click", () => {
  const result = document.querySelector("#coinResult");

  const fetchUpbitData = async () => {
    // 1. 데이터 가져오기 
    const marketRes = await fetch("https://api.upbit.com/v1/market/all");
    const marketNames = await marketRes.json();

    const krwMarkets = marketNames
      .filter(m => m.market.startsWith("KRW"))

    const marketCodes = krwMarkets.map(m => m.market).join(",");


    // 가격 데이터 가져오기 
    const tickerRes = await fetch(`https://api.upbit.com/v1/ticker?markets=${marketCodes}`);
    const tickers = await tickerRes.json();

    const Data = []; 

    for (let i = 0; i < tickers.length; i++) {
      const ticker = tickers[i];
      let companyName = "";

      // krw 한글 가져오기 
      for (let krw = 0; krw < krwMarkets.length; krw++) {
        if (krwMarkets[krw].market === ticker.market) {
          companyName = krwMarkets[krw].korean_name;
          break; 
        }
      }

      const role = {
        market: ticker.market,
        trade_price: ticker.trade_price,
        change: ticker.change,
        change_price: ticker.change_price,
        signed_change_rate: ticker.signed_change_rate,
        korean_name: companyName 
      };

      // 데이터 불러오기 push
      Data.push(role);
    }
    Data.forEach(coin => {
      const changeType = coin.change; // RISE, FALL, EVEN
      const changeSign = changeType === "RISE" ? "상승" : (changeType === "FALL" ? "하락" : "보합");
      const rate = (coin.signed_change_rate * 100).toFixed(2);


      // ai도움 +=, ${coin.trade_price.toLocaleString()}원
      result.innerHTML += `
        <div class="coin-card">
          <div class="market-code">${coin.market}</div>
          <div class="korean-name">${coin.korean_name}</div>
          
          <div class="price ${changeType}">
            ${coin.trade_price.toLocaleString()}원
          </div>
          
          <div class="change ${changeType}">
            전일 대비 : ${changeSign} (${rate}%)
          </div>
        </div>
      `;
    });
  };

  fetchUpbitData();
});