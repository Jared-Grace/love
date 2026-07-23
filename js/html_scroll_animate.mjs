export function html_scroll_animate(element, target_left, target_top) {
  let duration = 350;
  let from_left = element.scrollLeft;
  let from_top = element.scrollTop;
  let token = (element.scroll_animation_token || 0) + 1;
  element.scroll_animation_token = token;
  let start = null;
  function animate(settled) {
    let done = false;
    function finish() {
      if (done) {
        return;
      }
      done = true;
      let superseded = element.scroll_animation_token !== token;
      if (!superseded) {
        element.scrollLeft = target_left;
        element.scrollTop = target_top;
      }
      settled();
    }
    function step(now) {
      let cancelled = element.scroll_animation_token !== token;
      if (cancelled) {
        finish();
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
        return;
      }
      finish();
    }
    requestAnimationFrame(step);
    setTimeout(finish, duration + 120);
  }
  let promise = new Promise(animate);
  element.scroll_animation_settle = promise;
  return promise;
}
