import { html_component_element_get } from "./html_component_element_get.mjs";
export async function html_scroll_generic_wait(player_img_c) {
  "wait until layout is ready to measure for centering — two animation frames flush style/layout. does NOT wait for the target image to LOAD: centering uses CSS geometry (getBoundingClientRect), not the image's pixels, so blocking on load needlessly stalls — and on a cold cache the image can be queued behind hundreds of others (HTTP/1.1 6-conn cap), which stalled scroll-center for the full 3s image-wait timeout. the rAF chain is RACED against a short timeout because requestAnimationFrame is PAUSED while the tab is hidden/backgrounded — without it, a background load hangs forever (stuck 'One moment' overlay, no map); off-screen layout is already valid, so resolving on the timeout is safe";
  let el = html_component_element_get(player_img_c);
  await new Promise(function lambda4(r) {
    function lambda3() {
      function lambda2() {
        requestAnimationFrame(r);
      }
      requestAnimationFrame(lambda2);
    }
    requestAnimationFrame(lambda3);
    setTimeout(r, 100);
  });
  return el;
}
