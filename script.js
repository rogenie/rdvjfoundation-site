document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const cfg=window.RDVJ_CONFIG||{};
const one=document.getElementById('donate-action'),monthly=document.getElementById('donate-monthly'),status=document.getElementById('donation-status');
function verifiedStripeUrl(raw){try{const u=new URL(raw);return u.protocol==='https:'&&['buy.stripe.com','donate.stripe.com'].includes(u.hostname)?u.href:null;}catch(e){return null;}}
const oneUrl=verifiedStripeUrl(cfg.stripeOneTimeUrl),monthUrl=verifiedStripeUrl(cfg.stripeMonthlyUrl);
if(oneUrl){one.href=oneUrl;one.textContent='Donate ↗';one.removeAttribute('aria-label');one.target='_blank';one.rel='noopener noreferrer';}
if(monthUrl){monthly.hidden=false;monthly.href=monthUrl;monthly.target='_blank';monthly.rel='noopener noreferrer';}
if(oneUrl){status.textContent='Choose your one-time donation amount in USD at Stripe checkout. Payments are processed through our sister company, 9nth Dimension.';}
if(!oneUrl&&cfg.contactEmail){one.href='mailto:'+encodeURIComponent(cfg.contactEmail)+'?subject=RDVJ%20Foundation';one.textContent='Get in touch ↗';}
