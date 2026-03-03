// 하단 'Design and place' 영역의 자동 이미지 슬라이더 기능
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-image");

  // 이미지가 존재하지 않으면 실행 중단 (에러 방지)
  if (slides.length === 0) return;

  let currentSlide = 0;

  function nextSlide() {
    // 현재 슬라이드 투명화
    slides[currentSlide].classList.remove("active");

    // 다음 슬라이드 인덱스 계산
    currentSlide = (currentSlide + 1) % slides.length;

    // 다음 슬라이드 표시
    slides[currentSlide].classList.add("active");
  }

  // 3초(3000ms)마다 이미지 전환
  setInterval(nextSlide, 3000);
});
