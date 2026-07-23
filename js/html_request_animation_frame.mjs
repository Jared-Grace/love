export async function html_request_animation_frame() {
  "resolve on the next animation frame — but ALSO fall back to a short timeout, because requestAnimationFrame is PAUSED while the tab is hidden/backgrounded; without the fallback any awaiting load step hangs forever (stuck 'One moment' overlay, no map) until the tab is focused. Promise resolve is idempotent, so whichever fires first wins and the later one is a no-op";
  await new Promise(function lambda(r) {
    requestAnimationFrame(r);
    setTimeout(r, 100);
  });
}
