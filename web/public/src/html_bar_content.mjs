import { html_bar_content_padding } from "../../../love/public/src/html_bar_content_padding.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function html_bar_content(root) {
  let shell = html_div(root);
  html_style_assign(shell, {
    display: "flex",
    "flex-direction": "column",
    height: "100dvh",
    "box-sizing": "border-box",
  });
  let bar = html_div(shell);
  html_style_assign(bar, {
    flex: "0 0 auto",
  });
  let content = html_div(shell);
  html_style_assign(content, {
    flex: "1 1 auto",
    "min-height": "0",
    position: "relative",
    "overflow-y": "scroll",
    "overflow-x": "auto",
  });
  html_bar_content_padding(content);
  let bc = {
    bar,
    content,
  };
  return bc;
}
