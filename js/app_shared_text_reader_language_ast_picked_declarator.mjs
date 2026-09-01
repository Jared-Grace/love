import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
export function app_shared_text_reader_language_ast_picked_declarator(
  declarators,
  named_objects,
  named_calls,
) {
  arguments_assert(arguments, 3);
  for (let declarator of declarators) {
    let named = equal(declarator.id.type, "Identifier");
    if (not(named)) {
      continue;
    }
    let init = declarator.init;
    let missing = null_is(init);
    if (missing) {
      continue;
    }
    let written = equal(init.type, "ObjectExpression");
    if (written) {
      property_set(named_objects, declarator.id.name, init);
      continue;
    }
    let fetched = equal(init.type, "CallExpression");
    if (not(fetched)) {
      continue;
    }
    let plain = list_empty_is(init.arguments);
    if (not(plain)) {
      continue;
    }
    let holder = js_call_callee_name_try(init);
    let unnamed = null_is(holder);
    if (unnamed) {
      continue;
    }
    property_set(named_calls, declarator.id.name, holder);
  }
}
