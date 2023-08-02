// Hàm thêm hiệu ứng hoạt hình khi di chuột qua phần tử
function addAnimationOnHover(element, scale) {
    element.addEventListener('mouseover', function() {
      this.style.transition = 'transform 0.3s ease-in-out';
      this.style.transform = `scale(${scale})`;
    });
  
    element.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  }
  