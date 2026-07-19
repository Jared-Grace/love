import { html_component_element_get } from "./html_component_element_get.mjs";
// Sets text as textContent (not innerHTML), so characters like < are shown
// literally instead of being parsed as markup.
export function html_text_content_set(component, text) {
  let element = html_component_element_get(component);
  element.textContent = text;
}
