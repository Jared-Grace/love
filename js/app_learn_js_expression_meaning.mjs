import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_learn_js_expression_node_is } from "./app_learn_js_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_learn_js_expression_value_code } from "./app_learn_js_expression_value_code.mjs";
import { app_learn_js_expression_name_is } from "./app_learn_js_expression_name_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_node_index_is } from "./app_learn_js_expression_node_index_is.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { app_learn_js_expression_node_before_is } from "./app_learn_js_expression_node_before_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_learn_js_operators_method } from "./app_learn_js_operators_method.mjs";
export function app_learn_js_expression_meaning(item) {
  arguments_assert(arguments, 1);
  ("what a shape MEANS, written out with a pair of brackets round every single operator and nothing at all left to the reader: the shape printed as Math.floor(14 / 4) * 4 comes out (Math.floor((14/4))*4)");
  ("Nobody reads this. It exists to be held against the same sentence read out of the LINE the shape printed as, and two things that are equal as text are the same shape - so the comparison needs no walk of its own and cannot quietly pass a pair of shapes it failed to look inside.");
  ("Brackets everywhere rather than only where they are needed, because deciding where they are needed is exactly the thing being checked. A writing that left them out wherever the strengths make them unnecessary would agree with a line that dropped a pair it needed, which is the one fault this was built to find.");
  ("No spaces anywhere, for the same reason: how a line is spaced is how it is spelled, not what it means, and a check that failed on a space would go red on a day nothing was wrong.");
  ('2026-11-22: an array means its items, each by what it means, between square brackets with only a comma between them, as ["love","joy"] - spelled as the line reader below spells one, with no spaces');
  if (list_is(item)) {
    let item_meanings = list_map(item, app_learn_js_expression_meaning);
    let items_joined = list_join(item_meanings, ",");
    let array_meaning = text_combine_multiple(["[", items_joined, "]"]);
    return array_meaning;
  }
  let node_is = app_learn_js_expression_node_is(item);
  if (not(node_is)) {
    ("a value is already the whole of what it means");
    let text = app_learn_js_expression_value_code(item);
    return text;
  }
  ("2026-11-09: a name still to be read means itself, as a.length does, and an item read by its index means the array's name and what the index means inside brackets - the array lessons' two pieces, spelled as the line spells them");
  if (app_learn_js_expression_name_is(item)) {
    let name = property_get(item, "name");
    return name;
  }
  let symbol = property_get(item, "operator");
  let right = property_get(item, "right");
  let right_meaning = app_learn_js_expression_meaning(right);
  if (app_learn_js_expression_node_index_is(item)) {
    let array_name = property_get(item, "name");
    let indexed = js_code_index(array_name, right_meaning);
    return indexed;
  }
  let before_is = app_learn_js_expression_node_before_is(item);
  if (before_is) {
    let one_sided = text_combine_multiple([symbol, "(", right_meaning, ")"]);
    return one_sided;
  }
  let left = property_get(item, "left");
  let left_meaning = app_learn_js_expression_meaning(left);
  ("2026-11-22: an action reached by a dot means what it acts on, then the dot and the action, then what is in its brackets inside brackets of its own, as a.slice((1+1)) - the way Math.floor((14/4)) is written above, so a pair a line needs round the inside is never forgiven");
  let list = app_learn_js_operators_method();
  let method_is = list_includes(list, symbol);
  if (method_is) {
    let acted = text_combine_multiple([
      left_meaning,
      symbol,
      "(",
      right_meaning,
      ")",
    ]);
    return acted;
  }
  let both_sides = text_combine_multiple([
    "(",
    left_meaning,
    symbol,
    right_meaning,
    ")",
  ]);
  return both_sides;
}
