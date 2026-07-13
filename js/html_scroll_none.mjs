import { uuid_browser } from "./uuid_browser.mjs";
import { html_data_set } from "./html_data_set.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_scroll_none(component) {
  html_style_assign(component, {
    "scrollbar-width": "none",
    "-ms-overflow-style": "none",
  });
  let u = uuid_browser();
  html_data_set(component, html_scroll_none.name, u);
  html_style_head(
    text_combine_multiple([
      "\n  [data-",
      html_scroll_none.name,
      '="',
      u,
      '"]::-webkit-scrollbar {\n    display: none;\n  }\n',
    ]),
  );
}
