import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal_curried } from "./equal_curried.mjs";
import { list_first } from "./list_first.mjs";
import { js_prose_literal_nodes } from "./js_prose_literal_nodes.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_is } from "./text_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single_message } from "./list_single_message.mjs";
export function js_string_literal_single_find(ast) {
  "The one string a function actually uses as a value, which is how a selector says where.";
  "Comments are left out, because in this repo a comment is a string too. A function of four explanations and one message holds five strings and means one, so counting them all would refuse every function that says anything about itself - which is all of them.";
  "One value, not one place. The same string written three times is still one decision written three times, and the transform this hands to takes every one of them - so demanding a single node would refuse exactly the functions most worth making general.";
  "Naming what was looked for is the whole of the complaint's usefulness: a function holding two strings and a function holding none fail here the same way, and told only that a list was the wrong length a reader cannot tell which happened, nor in whose code.";
  let prose = js_prose_literal_nodes(ast);
  let literals = js_list_type_nodes(ast, "Literal");
  function value_string_is(node) {
    let commented = list_includes(prose, node);
    if (commented) {
      return false;
    }
    let each_value = js_literal_value_get(node);
    let string_is = text_is(each_value);
    return string_is;
  }
  let used = list_filter(literals, value_string_is);
  let written = list_map(used, js_literal_value_get);
  let values = list_unique(written);
  let asked = {
    hint: "a selector names one thing, so this function was expected to use exactly one string as a value - would you like to pick a function with one, or say which of several you meant?",
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
