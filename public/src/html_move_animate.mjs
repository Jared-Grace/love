export function html_move_animate(movingBtn, targetBtn, duration = 500) {
  const movingRect = movingBtn.getBoundingClientRect();
  const targetRect = targetBtn.getBoundingClientRect();
  const offsetX = targetRect.left - movingRect.left;
  const offsetY = targetRect.top - movingRect.top;
  movingBtn.style.transition = `transform ${duration}ms`;
  movingBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  function lambda() {
    movingBtn.style.transition = "";
    movingBtn.style.transform = "";
    targetBtn.parentNode.insertBefore(movingBtn, targetBtn);
  }
  setTimeout(lambda, duration);
}
