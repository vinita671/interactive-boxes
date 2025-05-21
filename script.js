document.querySelectorAll('.box').forEach(box => {
  // Mouseover: expand the box
  box.addEventListener('mouseover', function () {
    this.classList.add('expanded');
  });

  // Mouseout: collapse the box
  box.addEventListener('mouseout', function () {
    this.classList.remove('expanded');
  });

  // Color change logic
//   const colorSelect = box.querySelector('.color-select');
//   colorSelect.addEventListener('change', function () {
//     box.style.backgroundColor = this.value;
//   });

  // Size change logic
  const sizeSelect = box.querySelector('.size-select');
  sizeSelect.addEventListener('change', function () {
    switch (this.value) {
      case 'small':
        box.style.fontSize = '14px';
        break;
      case 'medium':
        box.style.fontSize = '18px';
        break;
      case 'large':
        box.style.fontSize = '24px';

        break;
    }
  });
});
