import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_viewport_height_visible } from "./html_viewport_height_visible.mjs";
import { html_sticky_top } from "./html_sticky_top.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_sticky_bottom } from "./html_sticky_bottom.mjs";
import { html_foot_tail_attribute_name } from "./html_foot_tail_attribute_name.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_bar_content_sticky(root) {
  "a bar that stays at the top while the page itself does the scrolling. The twin next door instead gives the body its own scrollbar inside a box as tall as the screen - which on Android Firefox re-lays-out the moment the soft keyboard opens, at the exact instant the keyboard is taking hold of the box being typed into, and typing then reaches nothing. A page that scrolls the ordinary way keeps the keyboard on the path every plain web page uses, so screens holding a place to type belong here.";
  "A foot is handed back beside the bar, staying against the bottom of the screen the way the bar stays against the top, and it is a place rather than a thing - empty it has no height and a reader never learns it is there.";
  "It is a sister of the body rather than something put at the end of it. A thing held against an edge is only held for as long as the box it belongs to reaches past that edge, so one put at the end of the body lets go where the body ends and rides the rest of the way up the screen. Measured on a chapter of John: pinned for the first eighty pixels of two hundred and forty-five, then loose - which reads as the page changing its mind while a reader scrolls. Belonging to the whole page instead, it lets go only where the page itself ends.";
  "The frame is at least as tall as the screen, and the body is what grows to fill it. A foot held against the bottom only stays there while the page reaches past the bottom of the screen; on a short page - one verse, a few lines - it sat straight under the last line, halfway up the screen. Stretching the body puts the foot at the bottom of the screen on a short page too.";
  let shell = html_div(root);
  html_style_assign(shell, {
    display: "flex",
    "flex-direction": "column",
    "min-height": html_viewport_height_visible(),
    "box-sizing": "border-box",
  });
  let bar = html_div(shell);
  html_sticky_top(bar);
  let content = html_div(shell);
  html_style_flex(content, "1 0 auto");
  let foot = html_div(shell);
  html_sticky_bottom(foot);
  ("The foot is marked on the page, so the two ways out of an app - added once a screen has drawn, by something handed the page and nothing else - join this foot instead of holding themselves against the same edge and covering it.");
  let name = html_foot_tail_attribute_name();
  html_attribute_set(foot, name, "");
  let v = {
    bar,
    content,
    foot,
  };
  return v;
}
