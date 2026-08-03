import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
export function html_bar_content_sticky(root) {
  "a bar that stays at the top while the page itself does the scrolling. The twin next door instead gives the body its own scrollbar inside a box as tall as the screen - which on Android Firefox re-lays-out the moment the soft keyboard opens, at the exact instant the keyboard is taking hold of the box being typed into, and typing then reaches nothing. A page that scrolls the ordinary way keeps the keyboard on the path every plain web page uses, so screens holding a place to type belong here.";
  let shell = html_div(root);
  let bar = html_div(shell);
  let background = app_shared_color_page_background();
  html_style_assign(bar, {
    position: "sticky",
    top: "0",
    "z-index": "1",
    "background-color": background,
  });
  let content = html_div(shell);
  let v = {
    bar,
    content,
  };
  return v;
}
