import { arguments_assert } from "./arguments_assert.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { js_object_properties_offered_run_is } from "./js_object_properties_offered_run_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { js_object_properties_spread_replaced } from "./js_object_properties_spread_replaced.mjs";
import { property_set } from "./property_set.mjs";
export async function js_object_properties_call_spread_set(ast, f_name) {
  arguments_assert(arguments, 2);
  ("$plain f_name");
  ("In one parsed file, put a spread of a named function's call in place of the run of written-out properties that were saying the same thing by hand.");
  ("★ THE RUN IS FOUND BY THE FUNCTION'S OWN KEYS RATHER THAN BY A LIST HANDED IN. A caller spelling the keys would be a second copy of the very thing being collapsed, and it would be the copy that rots first: a sixth key added to the function would leave the caller naming five. Asking the function what it offers means the collapse is derived from the subject, so it cannot disagree with it.");
  ("The proof that the file goes on saying what it said is the value-by-value comparison, and it is made where the run is recognised rather than here.");
  ("IT REFUSES ANYTHING BUT EXACTLY ONE RUN IN THE FILE, the same safety the single-property writer keeps: none means the caller is naming something that is not there, and two means the file says it twice and the caller cannot have meant both.");
  ("The search names its object, its properties and its place differently from the one run it settles on, because the two live in the same body and a reader arriving at the second half has no way to tell which of them a bare name meant.");
  let imported_fn = await function_import_unalias(f_name);
  let takes = property_get(imported_fn, "length");
  let takes_none = equal(takes, 0);
  assert_json(takes_none, {
    hint: "only a function that asks for nothing can be spread into an object literal, because there would be nothing to fill its arguments with",
    f_name,
    takes,
  });
  let offered = imported_fn();
  let keys = object_property_names(offered);
  let objects = js_list_type_nodes(ast, "ObjectExpression");
  let found = [];
  for (let object_node of objects) {
    let properties_node = property_get(object_node, "properties");
    let count = list_size(properties_node);
    let start_at = 0;
    while (less_than(start_at, count)) {
      let matched = js_object_properties_offered_run_is(
        properties_node,
        start_at,
        keys,
        offered,
      );
      if (matched) {
        list_add(found, {
          object: object_node,
          start: start_at,
        });
      }
      start_at = start_at + 1;
    }
  }
  let runs = list_size(found);
  let one_is = equal(runs, 1);
  assert_json(one_is, {
    hint: "exactly one run of those properties has to be in the file to write over; none means the file does not spell them the way the function does, and two means it spells them twice",
    f_name,
    keys,
    runs,
  });
  let hit = list_first(found);
  let object = property_get(hit, "object");
  let start = property_get(hit, "start");
  let properties = property_get(object, "properties");
  let call = await js_call_new_expression(f_name, ast);
  let spread = {
    type: "SpreadElement",
    argument: call,
  };
  let wanted = list_size(keys);
  let after = js_object_properties_spread_replaced(
    properties,
    start,
    wanted,
    spread,
  );
  property_set(object, "properties", after);
  let r = {
    keys,
    start,
  };
  return r;
}
