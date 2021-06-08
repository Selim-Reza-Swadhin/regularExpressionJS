// Form Blun event Listener
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^\w{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const re = /^\w+@\w+\.[a-zA-z0-9]{2,5}$/;
  const email = document.getElementById('email');
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validateZip() {
  const re = /^\d{4}$/;
  const zip = document.getElementById('zip');
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validatePhone() {
  //+880-2-9561145
  //+8801710392318
  //01724063642
  const re = /^(\+)?(88)?0-?\d{1}-?\d{7}$/;
  const validateNum = /^(\+)?(88)?0-?\d{1}-?\d{9}$/;
  const phone = document.getElementById('phone');
  if (!(re.test(phone.value) || validateNum.test(phone.value))) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
