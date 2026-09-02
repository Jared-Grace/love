import { html_div } from "./html_div.mjs";
import { html_sticky_top } from "./html_sticky_top.mjs";
export function html_bar_content_sticky(root) {
  "a bar that stays at the top while the page itself does the scrolling. The twin next door instead gives the body its own scrollbar inside a box as tall as the screen - which on Android Firefox re-lays-out the moment the soft keyboard opens, at the exact instant the keyboard is taking hold of the box being typed into, and typing then reaches nothing. A page that scrolls the ordinary way keeps the keyboard on the path every plain web page uses, so screens holding a place to type belong here.";
  let shell = html_div(root);
  let bar = html_div(shell);
  html_sticky_top(bar);
  let content = html_div(shell);
  let v = {
    bar,
    content,
  };
  return v;
}
