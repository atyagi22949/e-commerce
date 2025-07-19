 const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    loginBtn.addEventListener("click", () => {
      loginBtn.classList.add("active");
      registerBtn.classList.remove("active");
      loginForm.classList.add("active-form");
      registerForm.classList.remove("active-form");
    });

    registerBtn.addEventListener("click", () => {
      registerBtn.classList.add("active");
      loginBtn.classList.remove("active");
      registerForm.classList.add("active-form");
      loginForm.classList.remove("active-form");
    });


    document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.querySelector('input[placeholder="Username"]').value;
  const email = this.querySelector('input[placeholder="Email"]').value;
  const mobileno = this.querySelector('input[placeholder="mobileno"]').value;
  const password = this.querySelector('input[placeholder="Password"]').value;
  const address = this.querySelector('input[placeholder="address"]').value;

  const userDetails = {
    username,
    email,
    mobileno,
    password,
    address
  };

  localStorage.setItem('userDetails', JSON.stringify(userDetails));
  alert('Registration successful! Your details have been saved.');
  this.reset();
});