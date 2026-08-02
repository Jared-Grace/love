import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { json_decompress } from "./json_decompress.mjs";
export async function json_decompress_object_if_compressed(c) {
  "Unpacks a stored object when it was squeezed small, and hands back what came in when it was not.";
  "Both shapes are really in storage: a sermon is written squeezed and an objection file is written plainly, and nothing in the address says which one an answer will be. Asking the object itself is the only reading that works for both, and the alternative - one reader per shape, chosen by the caller - puts the guess back on somebody who has even less to go on.";
  let compressed = property_get_or_null(c, "compressed");
  let plain = null_is(compressed);
  if (plain) {
    return c;
  }
  let o = await json_decompress(compressed);
  return o;
}
