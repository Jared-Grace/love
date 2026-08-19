import { function_declaration_or_null } from "./function_declaration_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function function_async_is(f_name) {
  "Whether the repo function of this name waits, which is to say whether it hands back a promise rather than a plain value. Nothing when the repo answers to no such name.";
  "Three answers, and the third is why this hands back nothing rather than false: it waits, it does not wait, and it cannot be read. A caller deciding whether two functions hand back the same kind of thing has to treat the third as a refusal, not as a no.";
  "Reading the function out of the repo is done next door, because every question asked of a function by name starts with exactly that and it was being written out again here.";
  let declaration = await function_declaration_or_null(f_name);
  let missing = null_is(declaration);
  if (missing) {
    return null;
  }
  let async_is = property_get(declaration, "async");
  return async_is;
}
