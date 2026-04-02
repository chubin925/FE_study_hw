// 좋아요 클릭 시, 숫자 + 1 및 취소 불가
// 스크랩 클릭 시, 숫자 + 1 및 글자 변경, 취소 가능

const likeBtn = document.querySelector(".like_gray"); // 좋아요 버튼

const ccBtn = document.querySelector(".scrap_gray"); // 스크랩 버튼
const star = document.querySelector(".scrap_img"); // 별 이미지
const cancel = document.getElementById("cancel"); // 취소 글씨

const likenum = document.getElementById("like-num"); //좋아요 수
const scrapnum = document.getElementById("scrap-num"); //스크랩 수

let count = 0;

likeBtn.addEventListener("click", function () {
  if (count === 0) {
    count++;
    likenum.textContent = Number(likenum.textContent) + 1;
  }
});
