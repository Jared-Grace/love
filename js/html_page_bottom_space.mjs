import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
export function html_page_bottom_space(content) {
  ("a stretch of empty room after the last item, so scrolling to the end lifts it away from the screen edge instead of stopping flush against it, where it is cramped to read and easy to mistap");
  ("a real element rather than bottom padding, because a scrolling flex container drops its bottom padding in some browsers");
  let spacer = html_div(content);
  html_style_assign(spacer, {
    flex: "0 0 auto",
    height: "4em",
  });
}
