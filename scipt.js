// Elements
const loginBtn = document.querySelector('.btnlogin-popup');
const loginBox = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.icon-close');
const loginActionBtn = document.querySelector('#loginBtn');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Open Login Box with fade animation
loginBtn.addEventListener('click', () => {
  loginBox.style.display = 'block';
  loginBox.classList.add('fade-in');
  loginBox.classList.remove('fade-out');
});

// Close Login Box
closeBtn.addEventListener('click', () => {
  loginBox.classList.remove('fade-in');
  loginBox.classList.add('fade-out');
  setTimeout(() => {
    loginBox.style.display = 'none';
  }, 300);
});

// Ripple effect on button
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    this.appendChild(circle);
    const x = e.clientX - this.getBoundingClientRect().left;
    const y = e.clientY - this.getBoundingClientRect().top;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    setTimeout(() => circle.remove(), 600);
  });
});

// Login validation with feedback
if (loginActionBtn) {
  loginActionBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      loginBox.classList.add('shake');
      setTimeout(() => loginBox.classList.remove('shake'), 500);
      alert('❌ Please enter both username and password');
    } else {
      alert(`✅ Welcome, ${username}!`);
      closeBtn.click(); // Close smoothly
    }
  });
}
