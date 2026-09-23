import { html_attribute_data_prefix } from "./html_attribute_data_prefix.mjs";
export function app_shared_footer_row_attribute_name() {
  "the mark on the row inside the foot of an app's page that its buttons go in - the part that is held at the bottom of the screen, as against the box around it that keeps its place in the page.";
  let prefix = html_attribute_data_prefix();
  let name = prefix + "footer-row";
  return name;
}
