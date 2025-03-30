function login() {
  // html에서 적은 정보 가져오는 코드
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsername = 'admin';
  const validPassword = '1234';

  // 로그인 정보 검증
  if (username === validUsername && password === validPassword) {
    // 로그인 성공
    // alert('easy하지 뭐'); < 옆에 내용은 알림창 뜨게 하는 명령어
    document.body.classList.add('fade-out');
    setTimeout(function () {
      // 애니메이션이 끝난 후 페이지 이동
      window.location.href = '../0_main/1_intranet_main.html';
    }, 1000); // 1000은 밀리초 단위라 1초 뒤 이동(애니메이션 시간과 맞춰 설정)
    // 위의 코드는 로그인 정보가 맞으면 위치 이동 (경로 지정)
  } else {
    // 로그인 실패 시
    document.getElementById('message').textContent =
      '아이디 또는 비밀번호가 일치하지 않습니다';
    document.getElementById('message').style.color = 'red';
  }
}
// 웹사이트가 완전히 열리면 실행될 코드를 적어요
document.addEventListener('DOMContentLoaded', function () {
  // 경로 지정
  const passwordInput = document.getElementById('password');
  // 엔터 클릭 확인
  passwordInput.addEventListener('keydown', function (event) {
    // 엔터를 눌렀을 때 로그인 동작과 동일하게 작동(키 다운은 키보드 - 펑션은 뭘 누를 지)
    if (event.key === 'Enter') {
      login();
    }
  });
});
// 127.0.0.1:5500 내용: 변경 안됨
