export function html_scroll_animate(element, target_left, target_top) {
  let duration = 350;
  let from_left = element.scrollLeft;
  let from_top = element.scrollTop;
  let token = (element.scroll_animation_token || 0) + 1;
  element.scroll_animation_token = token;
  let start = null;
  function step(now) {
    let cancelled = element.scroll_animation_token !== token;
    if (cancelled) {
      return;
    }
    if (start === null) {
      start = now;
    }
    let fraction = (now - start) / duration;
    if (fraction > 1) {
      fraction = 1;
    }
    let ease = fraction * fraction * (3 - 2 * fraction);
    element.scrollLeft = from_left + (target_left - from_left) * ease;
    element.scrollTop = from_top + (target_top - from_top) * ease;
    if (fraction < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}
