import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
import { html_style_head } from "../../../love/public/src/html_style_head.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export async function html_scroll_none(component) {
  html_style_assign(component, {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  });
  let u = await uuid();
  html_style_head(`
  #${u}::-webkit-scrollbar {
    display: none;
  }
`);
  html_data_set(component, u);
}
