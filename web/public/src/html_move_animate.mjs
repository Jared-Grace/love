import { html_request_animation_frame } from "../../../love/public/src/html_request_animation_frame.mjs";
export async function html_move_animate(movingBtn, targetBtn, duration = 500) {
  const movingRect = movingBtn.getBoundingClientRect();
  const targetRect = targetBtn.getBoundingClientRect();
  const offsetX = targetRect.left - movingRect.left;
  const offsetY = targetRect.top - movingRect.top;
  movingBtn.style.transition = `transform ${duration}ms`;
  movingBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  await html_request_animation_frame();
  function lambda() {
    movingBtn.style.transition = "";
    movingBtn.style.transform = "";
    targetBtn.parentNode.insertBefore(movingBtn, targetBtn);
  }
  setTimeout(lambda, duration);
}
