// 메뉴 클릭 시 네비게이션 활성화
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('header button');
  const nav = document.querySelector('nav');

  menuButton.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});

// 로그웃 클릭 시 로그인 페이지 이동
document.getElementById('logoutBtn').addEventListener('click', function () {
  // 여기에 로그아웃 로직을 추가할 수 있음 (예: 세션 종료 등)
  window.location.href = '../login/1_login.html'; // 로그인 페이지로 이동
});
