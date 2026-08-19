import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_await_if_unwrap } from "./js_await_if_unwrap.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
export function js_relabel_only_is(declaration) {
  arguments_assert(arguments, 1);
  ("Whether a function's whole product is one call to another function, handed straight back - a second name for that function and nothing else.");
  ("The reading beside this one asks the same question about a function whose product is a record taken apart and put back together, and it cannot see this shape at all: it wants a record written out where a body handing back a bare word has none. So the two are the same finding about two kinds of product, and a body handing back one thing escaped the reading that was meant to catch it.");
  ("Where that matters is the holder a cut leaves behind. A cut takes a run out of a body and puts a call to it where the run stood, so a run that was the whole of what its holder did leaves a holder that calls the piece and hands its answer on. Nothing got shorter and the name grew a word, which is the very thing the reading beside this one exists to refuse.");
  ("The line counting the arguments is left out along with the prose, because the pass writes that line rather than a person, and a function is not doing work by carrying it.");
  ("Two lines exactly, and no fewer. A body of one line handing back a call written out is a shape this repo's own pass does not leave standing, and asking for it as well would widen the reading past the case it was built for - a refusal that is narrow can only turn down a shape it has actually read.");
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let count = list_size(working);
  let two_is = equal(count, 2);
  if (not(two_is)) {
    return false;
  }
  let last = list_get(working, 1);
  let return_is = js_node_type_is(last, "ReturnStatement");
  if (not(return_is)) {
    return false;
  }
  let handed = property_get(last, "argument");
  let word_is = js_identifier_is(handed);
  if (not(word_is)) {
    return false;
  }
  let name = property_get_name(handed);
  ("The name handed back has to have been set from a call inside this same body. A parameter handed straight back is set nowhere here and reads as nothing, which is the answer that shape deserves.");
  let set_from = js_name_set_from_node_try(declaration, name);
  ("A wait is stepped over before the call is looked for. The reading next door that asks which function set a name stops at the wait and answers nothing, so asked through it every holder that waits on its piece came back as honest work - which is most of them, and exactly the case this was built for.");
  let r = js_await_if_unwrap(set_from);
  let waited = property_get(r, "argument");
  let called = js_call_callee_name_try(waited);
  let missing = null_is(called);
  let relabel_only_is = not(missing);
  return relabel_only_is;
}
