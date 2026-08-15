import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_remove_end } from "./text_remove_end.mjs";
export function css_em_multiply(outer, inner) {
  arguments_assert(arguments, 2);
  ("two lengths written in em, multiplied into the one em length they come to: 0.55em measured against a 1.2em font is 0.66em of whatever that 1.2em was itself measured against");
  ("For the case where a piece of styling has to be moved from one font to another and come out the same size. An em in every property except font-size is measured against the element's OWN font, so a control that keeps its padding while dropping its enlarged font quietly loses padding with it - the number has to be carried across rather than copied.");
  let unit = "em";
  let unit_count = unit.length;
  let text = text_remove_end(outer, unit_count);
  let outer_number = number_from_text(text);
  let text2 = text_remove_end(inner, unit_count);
  let inner_number = number_from_text(text2);
  let product = multiply(outer_number, inner_number);
  let length = text_combine(product, unit);
  return length;
}
