import { html_scroll_body_mark } from "./html_scroll_body_mark.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_viewport_height_visible } from "./html_viewport_height_visible.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
export function html_bar_content(root) {
  "a bar that stays put along the top and a body under it that scrolls, the pair of them filling the window.";
  "The window is filled by the PAGE rather than by this frame alone, and that is the whole of the difference between the two ways of writing it down. Given the whole height for itself, the frame left anything the page put after it standing below the bottom edge - which is where the two ways out of an app ended up, so a screen with four buttons on it made the reader scroll a page that had nothing further down it to reach them. Asking instead for whatever height is left over, the frame is the whole window when it is alone on the page, and gives up exactly what a foot after it needs when there is one. The body inside it is what gives way, and it scrolls only when the reading really is longer than the room left.";
  "A page saying it is exactly one window tall cannot also be sitting a little way down the window, so the space around it goes at the same moment its height is set. Left there, that space is added to a height that already filled the window, and the page scrolls by exactly that much with nothing down there to see - the same false scroll again, in a smaller amount.";
  html_style_assign(root, {
    display: "flex",
    "flex-direction": "column",
    height: html_viewport_height_visible(),
    margin: "0",
    "box-sizing": "border-box",
  });
  let shell = html_div(root);
  html_style_assign(shell, {
    display: "flex",
    "flex-direction": "column",
    flex: "1 1 auto",
    "min-height": "0",
    "box-sizing": "border-box",
  });
  let bar = html_div(shell);
  html_style_flex(bar, "0 0 auto");
  let content = html_div(shell);
  html_style_assign(content, {
    flex: "1 1 auto",
    "min-height": "0",
    position: "relative",
    "overflow-y": "scroll",
    "overflow-x": "auto",
  });
  html_scroll_body_mark(content);
  let v = {
    shell,
    bar,
    content,
  };
  return v;
}
