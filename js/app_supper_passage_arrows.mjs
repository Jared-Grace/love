import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_replace_button_arrow_left } from "./app_replace_button_arrow_left.mjs";
import { app_replace_button_arrow_right } from "./app_replace_button_arrow_right.mjs";
export function app_supper_passage_arrows(parent, on_left, on_right) {
  let row = html_div(parent);
  html_centered(row);
  app_replace_button_arrow_left(row, on_left);
  app_replace_button_arrow_right(row, on_right);
  return row;
}
