import { html_request_animation_frame } from "../../../love/public/src/html_request_animation_frame.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_select(input) {
  html_focus(input);
  let element = html_component_element_get(input);
  await html_request_animation_frame();
  element.select();
}
