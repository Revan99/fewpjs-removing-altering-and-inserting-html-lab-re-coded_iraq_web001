let main = document.querySelector('main#main');
main.remove();
let header = document.createElement('h1');
document.body.appendChild(header);
header.className = 'victory';
let newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = 'Revan is the champion';
console.log(header);