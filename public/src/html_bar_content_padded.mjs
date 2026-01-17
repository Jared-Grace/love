import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_bar_content } from "../../../love/public/src/html_bar_content.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_bar_content_padding } from "../../../love/public/src/html_bar_content_padding.mjs";
export function html_bar_content_padded(root) {
  marker("1");
  let v = html_bar_content(root);
  let content = object_property_get(v, "content");
  let bar = object_property_get(v, "bar");
  let bc = {
    bar,
    content,
  };
  html_bar_content_padding(content);
  return bc;
}
