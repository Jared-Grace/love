import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals_try } from "./property_equals_try.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_equals } from "./property_equals.mjs";
import { equal } from "./equal.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_intersection } from "./list_intersection.mjs";
export function js_variable_box_assignments(ast, name) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("the word a local in this file is written under, whose writes are being gathered so they can be turned into writes into a record.");
  ("Every place this name is written, refused unless all of them are a plain write standing on a line of its own.");
  ("A WRITE INTO A RECORD IS A CALL, AND A CALL DOES NOT HAND BACK WHAT WAS WRITTEN. A plain write does, which is what lets one be used in the middle of something larger, so a write standing anywhere but on its own line would come out meaning something else. Every write in this repo stands on its own line, so refusing the other shape costs nothing and removes the one way this move could quietly change an answer.");
  ("IT ALSO REFUSES A WRITE THAT READS THE OLD VALUE ON ITS WAY IN. The shorthands that add to a name rather than replacing it would each need their own reading written out, and the reading is not the same for all of them, so they are told apart here rather than guessed at further down.");
  let all = js_list_type_nodes(ast, "AssignmentExpression");
  function mine_is(node) {
    let left = property_get(node, "left");
    let is = property_equals_try(left, "name", name);
    return is;
  }
  let mine = list_filter(all, mine_is);
  let wanted = list_size(mine);
  function plain_is(node2) {
    let is = property_equals(node2, "operator", "=");
    return is;
  }
  let plain = list_filter(mine, plain_is);
  let plain_size = list_size(plain);
  let all_plain = equal(wanted, plain_size);
  true_is_assert_json(all_plain, {
    name,
    wanted,
    plain_size,
    hint: "one of the places this name is written adds to what was there rather than replacing it, and each of those shorthands means a different reading - write it out in full first",
  });
  let statements = js_list_type_nodes(ast, "ExpressionStatement");
  let expressions = list_map_property(statements, "expression");
  let standing = list_intersection(mine, expressions);
  let standing_size = list_size(standing);
  let all_standing = equal(wanted, standing_size);
  true_is_assert_json(all_standing, {
    name,
    wanted,
    standing_size,
    hint: "one of the places this name is written is part of something larger and hands the written value on, which a write into a record cannot do - give it a line of its own first",
  });
  return mine;
}
