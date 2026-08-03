import { js_field_call_prefix } from "./js_field_call_prefix.mjs";
import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_last } from "./list_last.mjs";
import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_string_site_key_is(stack) {
  arguments_assert(arguments, 1);
  ("Whether a written word sits where a field is named rather than where a value is");
  ("given. Three shapes say it: the word inside the brackets of a lookup, the word");
  ("standing as the key of an entry, and the word handed second to one of the calls");
  ("this repo reads and writes fields with.");
  ("The difference matters to a report of repeated spellings, because the two are");
  ("not the same kind of thing at all. A value can be moved behind a name and every");
  ("site follows it. A field name is part of the shape of the data, and once that");
  ("shape has been written down anywhere outside this repo, tying it to a name here");
  ("means a later rename quietly stops the old writing from being readable.");
  let held_node = list_last(stack);
  let above = js_stack_node_above(stack);
  let above_type = js_node_type(above);
  let member_is = equal(above_type, "MemberExpression");
  if (member_is) {
    let computed = property_get(above, "computed");
    let held_is = property_equals(above, "property", held_node);
    let bracketed = computed && held_is;
    return bracketed;
  }
  let entry_is = equal(above_type, "Property");
  if (entry_is) {
    let named_is = property_equals(above, "key", held_node);
    return named_is;
  }
  let call_is = equal(above_type, "CallExpression");
  if (call_is) {
    let callee_named = js_call_callee_name_try(above);
    let unnamed = equal(callee_named, null);
    if (unnamed) {
      return false;
    }
    let field_call = text_starts_with(callee_named, js_field_call_prefix());
    if (not(field_call)) {
      return false;
    }
    let call_args = property_get(above, "arguments");
    let argument_index = list_index_of(call_args, held_node);
    let second_is = equal(argument_index, 1);
    return second_is;
  }
  return false;
}
