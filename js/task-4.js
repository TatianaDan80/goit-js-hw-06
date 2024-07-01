document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
    }

   
    const formData = {
      email: email,
      password: password
    };

    
    console.log(formData);

    
    form.reset();
  });
});

