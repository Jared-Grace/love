import { js_find_body_block } from "./js_find_body_block.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_set } from "./property_set.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_code_asserts_dropped(code) {
  arguments_assert(arguments, 1);
  ("The one function written out in this piece of code with its checking lines taken off the top level of the body, so that what is left is only the work.");
  ("Asked when two functions are being held beside each other to see whether they do the same thing. A run of lines cut out of a longer function almost never carries the checks the function it should call has already written, and a check does nothing to what comes back - so counting them as a difference would refuse exactly the pairs worth joining.");
  ("A line is a check when the name it calls ends in the word this repo ends every one of its checking names with, whether the line does the call or waits on it. Only the top level of the body is read: a check written inside a branch is guarding that branch rather than the whole function, and taking it away would change what the code does.");
  let ast = js_parse(code);
  let block = js_find_body_block(ast);
  let statements = property_get(block, "body");
  function lambda(statement) {
    let call = js_statement_call_any_get(statement);
    let name = js_call_callee_name_try(call);
    let unnamed = null_is(name);
    if (unnamed) {
      return true;
    }
    let asserting = text_ends_with(name, "_assert");
    let keep = not(asserting);
    return keep;
  }
  let kept = list_filter(statements, lambda);
  property_set(block, "body", kept);
  let written = js_unparse(ast);
  return written;
}
