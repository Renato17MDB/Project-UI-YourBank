  const stack = document.querySelector('.stack');
  const button = document.getElementById('next');

  button.addEventListener('click', () => {
    const firstCard = stack.firstElementChild;
    stack.appendChild(firstCard);
  });