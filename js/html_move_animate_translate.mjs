import { html_style_set } from "./html_style_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { sleep } from "./sleep.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function html_move_animate_translate(
  component,
  offsetX,
  offsetY,
  duration,
) {
  html_style_set(
    component,
    "transition",
    text_combine_multiple(["transform ", duration, "ms"]),
  );
  let e = html_component_element_get(component);
  let u = text_combine_multiple([
    "translate(",
    offsetX,
    "px, ",
    offsetY,
    "px)",
  ]);
  e.style.transform = u;
  await sleep(duration);
}
