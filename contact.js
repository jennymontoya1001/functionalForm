const $form = document.getElementById('form');
const $mail = document.getElementById('mail');

const handleSubmit = (e) => {
   e.preventDefault();
   const form = new FormData($form);
   $mail.setAttribute('href',`mailto:jennyjj1001@gmail.com?subject=${form.get('name')}
   ${form.get('email')}&body=${form.get('message')}`)
   $mail.click();

}

$form.addEventListener('submit', handleSubmit);

