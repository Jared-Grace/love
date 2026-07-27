import { js_array_text_remove } from "./js_array_text_remove.mjs";
import { js_object_shorthand_remove } from "./js_object_shorthand_remove.mjs";
import { js_call_callee_set } from "./js_call_callee_set.mjs";
import { js_expand_selects } from "./js_expand_selects.mjs";
import { js_array_identifier_add } from "./js_array_identifier_add.mjs";
import { js_call_argument_named_set } from "./js_call_argument_named_set.mjs";
import { js_selects_move_after } from "./js_selects_move_after.mjs";
import { js_statement_return_argument_set } from "./js_statement_return_argument_set.mjs";
import { js_selects_functionize } from "./js_selects_functionize.mjs";
import { js_object_property_text_add } from "./js_object_property_text_add.mjs";
import { js_object_property_text_remove } from "./js_object_property_text_remove.mjs";
import { js_object_shorthand_add } from "./js_object_shorthand_add.mjs";
import { js_array_text_add } from "./js_array_text_add.mjs";
import { js_call_argument_named_identifier_set } from "./js_call_argument_named_identifier_set.mjs";
import { js_block_return_identifier_add } from "./js_block_return_identifier_add.mjs";
import { js_block_call_add } from "./js_block_call_add.mjs";
import { js_statement_wrap_if } from "./js_statement_wrap_if.mjs";
import { js_statement_wrap_for_of } from "./js_statement_wrap_for_of.mjs";
import { js_selects_unwrap } from "./js_selects_unwrap.mjs";
import { js_statement_if_return_add } from "./js_statement_if_return_add.mjs";
import { js_statement_replace_code } from "./js_statement_replace_code.mjs";
import { js_statement_delete } from "./js_statement_delete.mjs";
import { js_statement_duplicate } from "./js_statement_duplicate.mjs";
import { js_selects_call_add_after } from "./js_selects_call_add_after.mjs";
import { js_selects_call_add_before } from "./js_selects_call_add_before.mjs";
export function example_transforms() {
  "Every verb an example is allowed to name, by name. The pair to the list of addresses next door: naming both halves is what lets one example say which cell of the multiplication it is showing.";
  let transforms = {
    js_statement_wrap_if,
    js_statement_wrap_for_of,
    js_selects_unwrap,
    js_statement_if_return_add,
    js_statement_replace_code,
    js_statement_delete,
    js_statement_duplicate,
    js_selects_call_add_after,
    js_selects_call_add_before,
    js_call_argument_named_identifier_set,
    js_block_return_identifier_add,
    js_block_call_add,
    js_object_shorthand_add,
    js_array_text_add,
    js_object_property_text_add,
    js_object_property_text_remove,
    js_selects_functionize,
    js_statement_return_argument_set,
    js_selects_move_after,
    js_call_argument_named_set,
    js_array_identifier_add,
    js_expand_selects,
    js_call_callee_set,
    js_array_text_remove,
    js_object_shorthand_remove,
  };
  return transforms;
}
