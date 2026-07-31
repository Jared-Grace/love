import { arguments_assert } from "./arguments_assert.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_attr } from "./html_parse_attr.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { roman_to_integer } from "./roman_to_integer.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { list_map } from "./list_map.mjs";
export function ebible_main_verse_numbers(d, main) {
  arguments_assert(arguments, 2);
  ("every verse in a chapter's main element, as its number and the words it holds");
  ("the number is roman in the page's own id - V1, V2 - because that is how the source writes it, so it is turned back into a number here rather than by each caller");
  let list = html_parse_find_list_to(main, ".verse");
  function lambda(item) {
    let t = html_parse_text(d, item);
    let name = "id";
    let id = html_parse_attr(d, item, name);
    let without = text_prefix_without(id, "V");
    let i = roman_to_integer(without);
    let n = whitespace_normalize(t);
    let v = {
      number: i,
      name: n,
    };
    return v;
  }
  let verse_numbers = list_map(list, lambda);
  return verse_numbers;
}
