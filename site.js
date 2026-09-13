const clock=document.querySelector('#clock');
function tick(){const now=new Date();clock.textContent=[now.getHours(),now.getMinutes(),now.getSeconds()].map(v=>String(v).padStart(2,'0')).join(':');clock.dateTime=now.toISOString();}tick();setInterval(tick,1000);
const contact=document.querySelector('#contact');document.querySelector('#contact-link').addEventListener('click',e=>{e.preventDefault();contact.showModal();});contact.querySelector('.close').addEventListener('click',()=>contact.close());contact.addEventListener('click',e=>{if(e.target===contact){const r=contact.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)contact.close();}});

// Public form-ID endpoint only. Never put the recipient email address here.
const formEndpoint = 'https://formspree.io/f/mkjnlvbq';
const messageForm = document.querySelector('#contact-form');
const sendMessage = document.querySelector('#send-message');
const ready = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(formEndpoint);
if (ready) {
  messageForm.action = formEndpoint;
  sendMessage.disabled = false;
  document.querySelector('#form-status').textContent = '';
}
messageForm.addEventListener('submit', event => {
  if (!ready) { event.preventDefault(); return; }
  sendMessage.disabled = true;
  sendMessage.textContent = 'Sending…';
});
window.addEventListener('pageshow', () => {
  sendMessage.disabled = !ready;
  sendMessage.textContent = 'Send message';
});
