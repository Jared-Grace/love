import { not } from "./not.mjs";
import { app_shared_hash_field_drop_button } from "./app_shared_hash_field_drop_button.mjs";
import { app_shared_hash_field_suggestion_button } from "./app_shared_hash_field_suggestion_button.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { each } from "./each.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_hash_field_unknown_row(parent, field, value) {
  "One word in a link that nothing answers to, said back to the reader with everything they can do about it.";
  "The word is quoted rather than described, because it is what they can see in their own address bar - a reader matching the page against the link needs the same letters in both places. The field is named alongside it, so a link with two different things wrong says which is which instead of showing two rows that read the same.";
  let row = html_div(parent);
  let gap = app_shared_spaced_tiny_gap();
  html_style_margin_y(row, gap);
  let name = property_get(field, "name");
  let said = text_combine_multiple([
    "The ",
    name,
    ' in the link says "',
    value,
    '"',
  ]);
  html_div_text_bold(row, said);
  let suggest = property_get(field, "suggestions");
  let suggestions = suggest(value);
  let none = list_empty_is(suggestions);
  let asked = "Did you mean:";
  if (none) {
    ("A count with no digits anywhere in it leaves nothing to offer, and the useful thing to say is what one looks like rather than that we have not got this one. Every number is one we have; this word is simply not a number.");
    let number_field_is = property_get(field, "number_is");
    if (number_field_is) {
      asked = text_combine_multiple([
        "A ",
        name,
        " is written as a number, like 3.",
      ]);
    }
    if (not(number_field_is)) {
      asked = text_combine_multiple([
        "No ",
        name,
        " we have is spelled anything like it.",
      ]);
    }
  }
  app_shared_text_body(row, asked);
  let buttons = html_div(row);
  function draw(suggestion) {
    app_shared_hash_field_suggestion_button(buttons, field, value, suggestion);
  }
  each(suggestions, draw);
  app_shared_hash_field_drop_button(buttons, field, value);
  return row;
}
