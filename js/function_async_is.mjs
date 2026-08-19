import { property_path_get_2 } from "./property_path_get_2.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_parse_strict_declaration } from "./function_parse_strict_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function function_async_is(f_name) {
  "Whether the repo function of this name waits, which is to say whether it hands back a promise rather than a plain value. Nothing when the repo answers to no such name.";
  "Three answers, and the third is why this hands back nothing rather than false: it waits, it does not wait, and it cannot be read. A caller deciding whether two functions hand back the same kind of thing has to treat the third as a refusal, not as a no.";
  let r = await function_exists(f_name);
  let exists = property_get(r, "exists");
  if (not(exists)) {
    return null;
  }
  let parsed = await function_parse_strict_declaration(f_name);
  let async_is = property_path_get_2(parsed, "declaration", "async");
  return async_is;
}
