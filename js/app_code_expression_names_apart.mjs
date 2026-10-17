import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_name } from "./app_code_expression_name.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
export function app_code_expression_names_apart(item) {
  arguments_assert(arguments, 1);
  ("the same expression shape with every name in it standing as a piece of its own: x * x holds two names, and reading the first must leave the second still to be read");
  ("Needed because ",
    fn_name("app_code_expression_solved"),
    " finds the piece a learner picked by being that very piece, and a shape built from a table of names hands the same piece to every place a name is written. Everything else in the shape is copied as it stands, the parentheses a lesson wrote among it.");
  ("Not picked: finding the picked name by where it is written instead, which every walker would then have to carry.");
  let name_is = app_code_expression_name_is(item);
  if (name_is) {
    let name = property_get(item, "name");
    let value = property_get(item, "value");
    let own = app_code_expression_name(name, value);
    return own;
  }
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    return item;
  }
  let right = property_get(item, "right");
  let right_apart = app_code_expression_names_apart(right);
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    let before = object_copy_assign(item, {
      right: right_apart,
    });
    return before;
  }
  let left = property_get(item, "left");
  let left_apart = app_code_expression_names_apart(left);
  let both = object_copy_assign(item, {
    left: left_apart,
    right: right_apart,
  });
  return both;
}
