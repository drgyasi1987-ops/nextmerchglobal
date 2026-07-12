// auth.js
// Sign in / Sign up toggle widget logic for the site header.

function setAuthMode(mode){
  const toggle = document.getElementById('authToggle');
  const panel = document.getElementById('authPanel');
  const title = document.getElementById('panelTitle');
  const sub = document.getElementById('panelSub');
  const submit = document.getElementById('submitBtn');
  const switchLine = document.getElementById('switchLine');

  if(mode === 'signup'){
    toggle.classList.remove('mode-signin');
    toggle.classList.add('mode-signup');
    panel.classList.add('signup-mode');
    title.textContent = 'Create your account';
    sub.textContent = 'Set up a sourcing account in minutes.';
    submit.textContent = 'Create account';
    switchLine.innerHTML = 'Already have an account? <span onclick="setAuthMode(\'signin\')">Sign in</span>';
  } else {
    toggle.classList.remove('mode-signup');
    toggle.classList.add('mode-signin');
    panel.classList.remove('signup-mode');
    title.textContent = 'Welcome back';
    sub.textContent = 'Sign in to manage your account.';
    submit.textContent = 'Sign in';
    switchLine.innerHTML = 'New here? <span onclick="setAuthMode(\'signup\')">Create an account</span>';
  }
  panel.classList.add('open');
}

document.getElementById('authToggle').addEventListener('click', function(e){
  if(e.target.tagName === 'BUTTON') return;
  document.getElementById('authPanel').classList.toggle('open');
});

document.querySelectorAll('.auth-toggle button').forEach(btn => {
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('authPanel').classList.add('open');
  });
});

document.addEventListener('click', function(e){
  if(!e.target.closest('.auth-widget')){
    document.getElementById('authPanel').classList.remove('open');
  }
});
