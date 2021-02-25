const clickButton = document.querySelector('.btn');

clickButton.addEventListener('click',function (e){
e.preventDefault();
const input = document.querySelector('.input-value').value;
const sendMessage = document.querySelector('.sent-message');
sendMessage.innerHTML = input;
sendMessage.style.color = 'green';
})