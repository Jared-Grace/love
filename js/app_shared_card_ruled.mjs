import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_color_rule_faint } from "./app_shared_color_rule_faint.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_card_ruled(parent) {
  "$plain parent";
  "A fresh card in a running list of them, set off from the one above it by a gap and a faint line across its top, handed back for its contents to be put in.";
  "THE LINE IS FAINT AND SEE-THROUGH SO IT READS ON A LIGHT PAGE AND A DARK ONE ALIKE. A list of cards is one long scroll on a phone, and without a line a reader cannot tell where one card's words stop and the next one's start; with a solid line it looks like a table instead of a list.";
  "The gap above the line is bigger than the gap below it, so the line sits with the card it begins rather than floating between two.";
  arguments_assert(arguments, 1);
  let card = html_div(parent);
  let faint = app_shared_color_rule_faint();
  let rule = text_combine("1px solid ", faint);
  html_style_assign(card, {
    "margin-top": "24px",
    "padding-top": "12px",
    "border-top": rule,
  });
  return card;
}
