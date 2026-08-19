import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { not } from "./not.mjs";

export function js_property_get_rows(ast) {
  arguments_assert(arguments, 1);
  ("Every place in this file that reads one named entry out of a plain name, read out as the reading itself, the name being read from, and the entry being asked for.");
  ("Only the readings whose answer is knowable by looking are gathered. The thing read from has to be a bare name rather than a piece of work, because a piece of work has to be kept and run whatever else changes around it; and the entry asked for has to be words written out in place, because an entry worked out while the program runs is a different entry on different runs.");
  ("The reading node is handed back beside its parts so that a caller which decides to answer one of these by hand knows exactly which piece of code to write over.");
  function collect(emit) {
    function call_each(node) {
      let args = js_call_arguments_get(node);
      let two_is = list_size_2(args);
      if (not(two_is)) {
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
      emit({ call: node, target, key });
    }
    let f_name = fn_name("property_get");
    js_visit_calls_named_nodes(ast, f_name, call_each);
  }
  let rows = list_adder(collect);
  return rows;
}
