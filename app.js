'use strict';
const config = window.ALPHANEX_CONFIG || {};
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelectorAll('[data-package]').forEach(a => a.addEventListener('click', () => {document.querySelector('#package').value = a.dataset.package;}));
document.querySelector('#year').textContent = new Date().getFullYear();
const validEmail = typeof config.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email);
const links = document.querySelector('#contact-links');
if (/^\+\d{8,15}$/.test(config.phone || '')) {const a=document.createElement('a');a.href='tel:'+config.phone;a.textContent='Call '+(config.phoneDisplay || config.phone)+' ↗';links.append(a);document.querySelector('#contact-note').textContent='Call or message us to discuss your project. You can also download a quote request below and attach it in WhatsApp. The form does not send automatically.';}
if (validEmail) {const a=document.createElement('a');a.href='mailto:'+config.email;a.textContent=config.email+' ↗';links.append(a);document.querySelector('#contact-note').textContent='Download a copy of your request, then send it using your email app. Nothing is sent automatically.';}
if (/^\d{8,15}$/.test(config.whatsapp || '')) {const a=document.createElement('a');a.href='https://wa.me/'+config.whatsapp;a.textContent='WhatsApp '+(config.whatsappDisplay || config.whatsapp)+' ↗';a.target='_blank';a.rel='noopener noreferrer';links.append(a);}
document.querySelector('#quote-form').addEventListener('submit', e => {
 e.preventDefault(); const form=e.currentTarget; if(!form.reportValidity())return;
 const d=new FormData(form); const body=`AlphaNex Digital Studios — Quote request\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nBusiness: ${d.get('business') || 'Not provided'}\nPackage: ${d.get('package')}\n\nProject details:\n${d.get('message')}\n`;
 const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='AlphaNex-quote-request.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.querySelector('#form-status').textContent=validEmail?'Your request file is ready. Use the email link below to send it; it has not been sent yet.':config.whatsapp?'Your request file is ready. Open the WhatsApp link above and attach the downloaded file to share it. Nothing has been sent automatically.':'Your request file is ready. This is a download only; no request has been sent. Contact details still need to be configured.';
 if(validEmail){const email=document.querySelector('#email-request');email.href='mailto:'+config.email+'?subject='+encodeURIComponent('Website quote — '+d.get('package'))+'&body='+encodeURIComponent(body);email.hidden=false;}
});
const concepts={forma:{title:'Forma Living',description:'A warm editorial direction for an interior studio: sculptural forms, generous whitespace and an earthy palette. A potential build could include project stories, a service overview and an enquiry page.'},stride:{title:'Stride Studio',description:'An energetic landing page direction for a fitness brand: oversized type, high-contrast colour and bold visual rhythm. A potential build could introduce classes, the studio and membership enquiries.'}};
const dialog=document.querySelector('#concept-dialog');document.querySelectorAll('[data-concept]').forEach(button=>button.addEventListener('click',()=>{const c=concepts[button.dataset.concept];document.querySelector('#concept-title').textContent=c.title;document.querySelector('#concept-description').textContent=c.description;dialog.showModal();}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());document.querySelector('#concept-contact').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
