import { js_prose_literal_nodes } from "./js_prose_literal_nodes.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { equal_curried } from "./equal_curried.mjs";
import { list_first } from "./list_first.mjs";
export function js_literal_single_find_generic(ast, value_is, sort_name) {
  "The one value of a given sort that a function has written into it, which is how a selector says where.";
  "Comments are left out, because in this repo a comment is a string too. A function of four explanations and one message holds five strings and means one, so counting them all would refuse every function that says anything about itself - which is all of them. It costs nothing to leave them out when looking for a number, and it would cost a wrong answer to forget when looking for a string.";
  "One value, not one place. The same value written three times is still one decision written three times, and the transform this hands to takes every one of them - so demanding a single node would refuse exactly the functions most worth making general.";
  "The sort of value is asked for rather than fixed, because what makes a string the interesting one and a number the interesting one is the same question asked of a different kind of thing. Naming the sort is only so the complaint can say which kind was being looked for.";
  let prose = js_prose_literal_nodes(ast);
  let literals = js_list_type_nodes(ast, "Literal");
  function sort_value_is(node) {
    let commented = list_includes(prose, node);
    if (commented) {
      return false;
    }
    let each_value = js_literal_value_get(node);
    let wanted = value_is(each_value);
    return wanted;
  }
  let used = list_filter(literals, sort_value_is);
  let written = list_map(used, js_literal_value_get);
  let values = list_unique(written);
  let asked = {
    hint: text_combine_multiple([
      "a selector names one thing, so this function was expected to use exactly one ",
      sort_name,
      " as a value - would you like to pick a function with one, or say which of several you meant?",
    ]),
    sort_name,
  };
  let value = list_single_message(values, asked);
  let same_value_is = equal_curried(value);
  function written_value_is(node) {
    let each_value = js_literal_value_get(node);
    let same = same_value_is(each_value);
    return same;
  }
  let places = list_filter(used, written_value_is);
  let only = list_first(places);
  return only;
}
