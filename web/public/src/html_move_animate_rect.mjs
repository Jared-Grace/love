import { log } from "../../../love/public/src/log.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_move_animate_rect(component, from, to, duration) {
  let e = html_component_element_get(component);
  log({
    from,
    to,
  });
  e.style.transition = `transform ${duration}ms`;
  const offsetX = from.left - to.left;
  const offsetY = from.top - to.top;
  const u = `translate(${offsetX}px, ${offsetY}px)`;
  e.style.transform = u;
  await sleep(duration);
}
