const form = document.querySelector('form');
console.log('farm', form);

function handleChangeForm(e) {
  e.preventDefault();
  console.log(e);

  const {} = e.elements;
}

form.addEventListener('input', handleChangeForm);
