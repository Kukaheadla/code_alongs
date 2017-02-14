console.log('torch')
// document.body.style.backgroundColor = 'black';

var changeColor = function(){
  if(document.body.style.backgroundColor === 'black'){
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'black';
  }
}

document.body.addEventListener('mousemove', changeColor);
