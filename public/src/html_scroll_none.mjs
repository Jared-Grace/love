import { uuid_browser } from "../../../love/public/src/uuid_browser.mjs";
import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
import { html_style_head } from "../../../love/public/src/html_style_head.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_scroll_none(component) {
  html_style_assign(component, {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  });
  let u = uuid_browser();
  html_data_set(component, html_scroll_none.name, u);
  html_style_head(`
  [data-${html_scroll_none.name}="${u}"]::-webkit-scrollbar {
    display: none;
  }
`);
}
