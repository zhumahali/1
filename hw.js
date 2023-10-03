const smallSquares = document.querySelectorAll('.small-square');
const bigSquare = document.querySelector('big-square');

smallSquares.forEach(square => {
  square.addEventListener('click', function() {
    bigSquare.innerHTML = this.innerHTML;
  });
});
