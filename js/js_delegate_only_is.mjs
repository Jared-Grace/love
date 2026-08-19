import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statement_call_alone } from "./js_statement_call_alone.mjs";
import { less_than } from "./less_than.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { list_take } from "./list_take.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export function js_delegate_only_is(declaration) {
  arguments_assert(arguments, 1);
  ("Whether a function makes some values, hands them all to one call, and keeps nothing - the call standing last with only names being set above it and nothing said back to whoever asked.");
  ("The third reading of a holder that a cut has left with no work of its own, and the two beside it cannot see this shape. One of them wants a record written out and this hands back nothing at all; the other wants exactly two lines and this can have any number. So a body of four lines that sets three names and passes them on went straight past both of them.");
  ("What makes it a holder in name only is that nothing survives the call. A name set above it is either read by the call or read by another name that is, because a name read by nobody would have gone; and nothing stands after it, and nothing is handed back. So the whole of what the body does is make the call's arguments - which is the work of the call, done one line early.");
  ("Ending on a call is the line that decides it, and everything above has to be a name being set. A line that is not a name being set does something the call does not account for - it draws, or it clears, or it asks a question and stops - and a body doing any of that is doing work of its own however short it is.");
  ("Fewer than two lines is left to the readings beside this one. A body of one line is either a call and nothing else, which is a different shape with a different answer, or it is not a call at all.");
  ("A wait is read past, here and in the reading of a single call this leans on. A body that waits for the one call it makes still makes only that call.");
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let count = list_size(working);
  let short_is = less_than(count, 2);
  if (short_is) {
    return false;
  }
  let last = list_last(working);
  let call = js_statement_call_alone(last);
  let handed_on_is = null_is(call);
  if (handed_on_is) {
    return false;
  }
  let above_count = list_size_subtract(working, 1);
  let above = list_take(working, above_count);
  function setting_is(statement) {
    let declaration_is = js_node_type_is(statement, "VariableDeclaration");
    return declaration_is;
  }
  let delegate_only_is = list_all_is(above, setting_is);
  return delegate_only_is;
}
