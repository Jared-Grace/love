import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { js_call_is } from "./js_call_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { and } from "./and.mjs";
import { or } from "./or.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { error_json } from "./error_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_elements_calls_only_assert(elements, declared) {
  "Refuses a list whose items are all results, for a caller about to add a bare name to it.";
  "It is the other half of the pair the sibling refusal guards. Which command a register wants is decided by what the register already holds, and a register that holds what its functions handed back wants the call-adding half; a name added there is a function sitting in a column of values, which nothing waits for and nothing runs, so the list is quietly one item shorter than it reads.";
  "That failure is quieter than the one the sibling catches, and quieter is worse. A call written where a name was meant stops the file parsing, so it is found within the minute. A name written where a call was meant parses, canonicalizes, imports cleanly and goes green - and shows up only wherever the list is finally read, as an item that behaves like nothing at all.";
  "An item counts as a result three ways, and the third is the one that matters. A call is one. A call being waited for is one. And a bare word the function bound a line earlier is one, because the pass that canonicalizes this repo lifts every call in a list out into a local of its own, so a register that plainly holds results reads back as a column of bare words. Only a word from somewhere else - an import, a parameter - reads as a function being named.";
  "A list with nothing in it is let through, and so is a list holding a mixture. Neither is evidence, and a refusal drawn from no evidence stops work that was right.";
  arguments_assert(arguments, 2);
  let empty = list_empty_is(elements);
  let held = not(empty);
  if (held) {
    function element_result_is(element) {
      let call = js_call_is(element);
      let waited = js_node_type_is(element, "AwaitExpression");
      let name = js_identifier_is(element);
      let bound = list_includes(declared, element.name);
      let local = and(name, bound);
      let either = or(waited, local);
      let result = or(call, either);
      return result;
    }
    let results_only = list_all_is(elements, element_result_is);
    if (results_only) {
      let size = list_size(elements);
      let f_name = fn_name("function_list_call_add");
      error_json({
        hint: text_combine_multiple([
          "this list holds what its functions handed back rather than the functions themselves, so joining it means adding a call and not a name - ",
          f_name,
          " is the half that does that",
        ]),
        size,
      });
    }
  }
}
