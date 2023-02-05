const form = document.querySelector('.login-form');
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value
const formData = {
  email,
  password,
};
  if (email.value === "" || password.value === "") {
    return alert('Всі поля повинні бути заповнені');
  }

  console.log(formData);
  event.currentTarget.reset();
}
