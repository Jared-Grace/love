import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
export function app_code_braces_colors() {
  arguments_assert(arguments, 0);
  ("the colours a pair of braces may wear: the pointing colours except the teal, which is pale enough in its colour to look grey beside a token already chosen, as the human said 2026-10-10, so only the plainly colourful ones are left");
  ("Rejected: taking the teal out of the pointing colours themselves. Other screens point with it on a light background, where nothing chosen stands grey beside it, and the complaint was only about braces.");
  let first = app_code_highlight_color();
  let second = app_code_highlight_color_second();
  let third = app_code_highlight_color_third();
  let fourth = app_code_highlight_color_fourth();
  let fifth = app_code_highlight_color_fifth();
  let colors = [first, second, third, fourth, fifth];
  return colors;
}
