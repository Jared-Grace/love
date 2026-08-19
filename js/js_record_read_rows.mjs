import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_property_get_rows } from "./js_property_get_rows.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_record_read_rows(ast) {
  arguments_assert(arguments, 1);
  ("Every place in this file that reads a named entry out of a plain name, whether it stops there or carries straight on one step further, read out as the reading itself, the name being read from, the entry asked for, and the step still to come after it.");
  ("The two shapes are gathered together because whoever asks is asking one question - is every mention of this record only ever a reading of an entry it was written with. A reading that goes one step further is still exactly that; it simply cannot be answered by handing back a name, so what remains of it travels alongside.");
  ("What remains is handed back as the piece of code it already is rather than as anything read out of it. Nothing about it is judged, because nothing about it needs to be - it stays where it stands and runs when it always ran.");
  function collect(emit) {
    function plain_each(row) {
      let call = property_get(row, "call");
      let target = property_get(row, "target");
      let key = property_get(row, "key");
      emit({
        call,
        target,
        key,
        after: null,
      });
    }
    let plain = js_property_get_rows(ast);
    each(plain, plain_each);
    function step_each(node) {
      let args = js_call_arguments_get(node);
      let size = list_size(args);
      let three_is = equal(size, 3);
      if (not(three_is)) {
        return;
      }
      let target = list_first(args);
      let named_is = js_identifier_is(target);
      if (not(named_is)) {
        return;
      }
      let key_node = list_get(args, 1);
      let written_is = js_literal_text_is(key_node);
      if (not(written_is)) {
        return;
      }
      let key = js_literal_value_get(key_node);
      let after = list_get(args, 2);
      emit({
        call: node,
        target,
        key,
        after,
      });
    }
    let f_name = fn_name("property_path_get_2");
    js_visit_calls_named_nodes(ast, f_name, step_each);
  }
  let rows = list_adder(collect);
  return rows;
}
