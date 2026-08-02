import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_container_light_blue_div(parent) {
  arguments_assert(arguments, 1);
  ("One line standing on its own inside a light blue card.");
  ("A lesson keeps a single remark - a definition, a heading, one worked line -");
  ("in a card of its own. The card is opened only so the line can be put in it,");
  ("and nothing else is ever put beside it, so the card itself is never named");
  ("again once the line exists.");
  ("The line comes back rather than the card, because the line is what the caller");
  ("goes on to write into.");
  let card = app_code_container_light_blue(parent);
  let line = html_div(card);
  return line;
}
