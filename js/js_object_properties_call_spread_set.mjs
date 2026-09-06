import { arguments_assert } from "./arguments_assert.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { less_than } from "./less_than.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_add } from "./list_add.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { property_set } from "./property_set.mjs";
export async function js_object_properties_call_spread_set(ast, f_name) {
  arguments_assert(arguments, 2);
  ("$plain f_name");
  ("In one parsed file, put a spread of a named function's call in place of the run of written-out properties that were saying the same thing by hand.");
  ("★ THE RUN IS FOUND BY THE FUNCTION'S OWN KEYS RATHER THAN BY A LIST HANDED IN. A caller spelling the keys would be a second copy of the very thing being collapsed, and it would be the copy that rots first: a sixth key added to the function would leave the caller naming five. Asking the function what it offers means the collapse is derived from the subject, so it cannot disagree with it.");
  ("★ EVERY VALUE IS COMPARED BEFORE ANYTHING IS THROWN AWAY, and that comparison is the whole proof that the file goes on saying what it said. A property whose written-out word differs from what the function offers is a property that means something else, and swapping the call in there would change the answer while looking like tidying.");
  ("THE PROPERTIES MUST SIT TOGETHER AND IN THE FUNCTION'S OWN ORDER. An object's later key wins over its earlier one, so a run broken up by something else, or written in another order, would come back in a different order after the collapse and could hand a different value to whoever reads the object.");
  ("IT REFUSES ANYTHING BUT EXACTLY ONE RUN IN THE FILE, the same safety the single-property writer keeps: none means the caller is naming something that is not there, and two means the file says it twice and the caller cannot have meant both.");
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
  let wanted = list_size(keys);
  function js_object_properties_call_spread_set_key(one) {
    "The word a property writes as its key, or nothing at all when it is spread in from elsewhere or worked out as the code runs. A key asked for both ways: written plainly it sits on a name, written in quotes it sits as a word, and whichever is absent simply answers with nothing.";
    let plain = js_node_type_is(one, "Property");
    if (not(plain)) {
      return null;
    }
    let computed = property_get(one, "computed");
    if (computed) {
      return null;
    }
    let key_node = property_get(one, "key");
    let name = property_get_or(key_node, "name", null);
    if (name) {
      return name;
    }
    let spelled = property_get_or(key_node, "value", null);
    return spelled;
  }
  function js_object_properties_call_spread_set_run(properties, start) {
    "Whether the properties beginning here are exactly the function's keys, in the function's order, each already holding the very value the function offers under that name.";
    let count = list_size(properties);
    let past = start + wanted;
    if (less_than(count, past)) {
      return false;
    }
    let at = 0;
    while (less_than(at, wanted)) {
      let one = properties[start + at];
      let key = js_object_properties_call_spread_set_key(one);
      let same = equal(key, keys[at]);
      if (not(same)) {
        return false;
      }
      let value_node = property_get(one, "value");
      let written = js_node_type_is(value_node, "Literal");
      if (not(written)) {
        return false;
      }
      let value = property_get(value_node, "value");
      let right = property_get(offered, key);
      let held = equal(value, right);
      if (not(held)) {
        return false;
      }
      at = at + 1;
    }
    return true;
  }
  let objects = js_list_type_nodes(ast, "ObjectExpression");
  let found = [];
  for (let object of objects) {
    let properties = property_get(object, "properties");
    let count = list_size(properties);
    let start = 0;
    while (less_than(start, count)) {
      let matched = js_object_properties_call_spread_set_run(properties, start);
      if (matched) {
        list_add(found, {
          object,
          start,
        });
      }
      start = start + 1;
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
  let hit = found[0];
  let object = property_get(hit, "object");
  let start = property_get(hit, "start");
  let properties = property_get(object, "properties");
  let call = await js_call_new_expression(f_name, ast);
  let spread = {
    type: "SpreadElement",
    argument: call,
  };
  let after = [];
  let at = 0;
  let count = list_size(properties);
  while (less_than(at, count)) {
    let before_run = less_than(at, start);
    let b = less_than(at, start + wanted);
    let past_run = not(b);
    if (before_run || past_run) {
      list_add(after, properties[at]);
    }
    if (equal(at, start)) {
      list_add(after, spread);
    }
    at = at + 1;
  }
  property_set(object, "properties", after);
  let r = {
    keys,
    start,
  };
  return r;
}
