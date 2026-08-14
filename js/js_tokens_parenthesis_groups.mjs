import { js_tokens_parenthesis_group_tokens } from "./js_tokens_parenthesis_group_tokens.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function js_tokens_parenthesis_groups(tokens) {
  "What each ( in a line of tokens has gathered up, one entry per bracket pair, each entry being the tokens inside it sorted and joined. Sorted again as a whole, so two lines can be asked whether their brackets gather the same things.";
  "It answers what brackets are FOR rather than where they sit. Two lines can hold the same symbols in the same number and still bracket different things - (3 === 5) === false and (3) === 5 === false are built from one set of tiles - and every check that goes by value calls those two the same line, because they are the same line by value. What they are not is the same answer to a lesson about brackets.";
  let groups = js_tokens_parenthesis_group_tokens(tokens);
  function key_of(inside) {
    let list = list_copy(inside);
    let sorted = list_sort_text(list);
    let separator = " ";
    let key = list_join(sorted, separator);
    return key;
  }
  let keys = list_map(groups, key_of);
  list_sort_text(keys);
  return keys;
}
