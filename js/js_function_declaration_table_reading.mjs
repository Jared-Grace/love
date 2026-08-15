import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_statements_work_size } from "./js_node_statements_work_size.mjs";
import { js_node_written_out_largest_or_null } from "./js_node_written_out_largest_or_null.mjs";
import { js_node_written_out_entry_largest } from "./js_node_written_out_entry_largest.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
export function js_function_declaration_table_reading(declaration) {
  arguments_assert(arguments, 1);
  ("The three numbers that say whether a function is a table: how much work its biggest written-out thing holds, how much work is left over once that thing is set aside, and how much sits in its heaviest single entry.");
  ("Three numbers rather than a yes, so that whoever reads them can see why an answer came out the way it did. A yes on its own leaves a person who disagrees with it nothing to disagree with.");
  ("A body with nothing written out in full answers with all of its work left over, which is the right answer: every line of it has to be read.");
  let block = property_get(declaration, "body");
  let total = js_node_statements_work_size(block);
  let largest = js_node_written_out_largest_or_null(block);
  let none_is = null_is(largest);
  if (none_is) {
    let bare = {
      inside: 0,
      outside: total,
      entry_largest: 0,
    };
    return bare;
  }
  let inside = js_node_statements_work_size(largest);
  let outside = subtract(total, inside);
  let entry_largest = js_node_written_out_entry_largest(largest);
  let reading = {
    inside,
    outside,
    entry_largest,
  };
  return reading;
}
