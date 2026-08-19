import { arguments_assert } from "./arguments_assert.mjs";
import { js_declaration_record_read_collapse_try } from "./js_declaration_record_read_collapse_try.mjs";
import { js_declarations_single_rows } from "./js_declarations_single_rows.mjs";
import { js_rebound_names } from "./js_rebound_names.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";

export function js_declarations_record_read_collapse(ast) {
  arguments_assert(arguments, 1);
  ("Take out every line that gathers names into a record which nothing then wants except to read those same names back out again, and answer with the records that went.");
  ("What is left behind when a piece of work moved out of a body is folded back in. The piece handed its answers over as one record and the body took them apart again on the very next line, and once both halves stand in the one place the record is a parcel packed and unpacked without ever being carried anywhere.");
  ("The list of lines is asked again after each one goes, because taking one out can make the next one takeable. A record often holds another record's name, and while that mention stands the inner one looks like something wanted for itself. It stops when a whole pass takes nothing.");
  let collapsed = [];
  let going = true;
  while (going) {
    going = false;
    let rows = js_declarations_single_rows(ast);
    let rebound = js_rebound_names(ast);
    for (let row of rows) {
      let taken_is = js_declaration_record_read_collapse_try(ast, rebound, row);
      if (taken_is) {
        let name = property_get(row, "name");
        list_add(collapsed, name);
        going = true;
        break;
      }
    }
  }
  return collapsed;
}
