import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function js_signature_has_callee(signature) {
  "True when an atomic-statement signature is a call-declaration (let y = callee(...)) rather than";
  "ceremony — a doc-string comment or an arguments_assert, both of which carry a null callee. Used to";
  "keep only the foldable logic when a fn's body is reduced to its match pattern.";
  arguments_assert(arguments, 1);
  let callee = property_get(signature, "callee");
  let has = null_not_is(callee);
  return has;
}
