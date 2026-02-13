document.querySelector("#fetch").addEventListener("click", () => {
  const result = document.querySelector("#fetchResult");

  const fetchApi = async () => {
    const response = await fetch("https://api.upbit.com/v1/market/all");
    
    const data = await response.json();
    console.log(data);
    result.innerHTML = `<img src="${data.image.medium}"/>
      <h3>${data.name}</h3>
      <p>${data.summary}</p>
    `;
  }
});