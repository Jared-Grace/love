import { log } from "../../../love/public/src/log.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_move_animate_rect(component, from, to, duration) {
  let e = html_component_element_get(component);
  log({
    from,
    to,
  });
  const offsetX = from.left - to.left;
  const offsetY = from.top - to.top;
  e.style.transition = `transform ${duration}ms`;
  const t = `translate(${offsetX}px, ${offsetY}px)`;
  e.style.transform = t;
  log({
    t,
  });
  await sleep(duration);
  e.style.transition = "";
  e.style.transform = "";
}
