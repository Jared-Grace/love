import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { not } from "./not.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { js_find_declaration_named_or_null } from "./js_find_declaration_named_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_shared_text_reader_word_source_try(ast, argument) {
  arguments_assert(arguments, 2);
  ("The function a word arriving at a door came out of, when the code sitting in the seat says which one, and nothing at all when it does not.");
  ("Two shapes say it, and they are the same shape one line apart. The word is a call, and then the function called is the answer; or the word is a plain name, and then the line in this same file that makes that name is a call, and the function that call names is the answer. Everything else - a reach into a record, a name made from something other than a call, a name that arrives as a parameter from a caller - is a word this cannot follow, and it says so by handing back nothing rather than by guessing.");
  ("One step and no more. Following further would mean deciding what a caller was holding when it called, which is a question about a run of the app rather than about the code, and the reading built on this is only ever entitled to say what the code says.");
  ("Nothing found is not a word in order and not a word in breach. It is the size of what could not be read, which is the thing the reading above has to print beside whatever it did find.");
  let called = js_call_callee_name_try(argument);
  let there = null_not_is(called);
  if (there) {
    return called;
  }
  let plain = js_identifier_is(argument);
  if (not(plain)) {
    return null;
  }
  let name = property_get_name(argument);
  let declaration = js_find_declaration_named_or_null(ast, name);
  let made_here = null_not_is(declaration);
  if (not(made_here)) {
    return null;
  }
  let declarators = property_get(declaration, "declarations");
  for (let declarator of declarators) {
    let id = property_get(declarator, "id");
    let bound = property_get_name(id);
    let ours = equal(bound, name);
    if (not(ours)) {
      continue;
    }
    let value = property_get_or_null(declarator, "init");
    let source = js_call_callee_name_try(value);
    return source;
  }
  return null;
}
