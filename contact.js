const $form = document.getElementById('form');
const $mail = document.getElementById('mail');

const handleSubmit = (e) => {
   e.preventDefault();
   const form = new FormData($form);
   $mail.setAttribute('href',`mailto:jennyjj1001@gmail.com?subject=${form.get('name').trim()}
   ${form.get('email').trim()}&body=${form.get('message').trim()}`)
   $mail.click();

}

$form.addEventListener('submit', handleSubmit);

