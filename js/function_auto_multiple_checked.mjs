import { function_auto_checked } from "./function_auto_checked.mjs";
import { text_split_comma_dot_map_unordered } from "./text_split_comma_dot_map_unordered.mjs";
export async function function_auto_multiple_checked(names_comma) {
  "Canonicalize a whole list of functions and say for each one whether it still loads";
  let r = await text_split_comma_dot_map_unordered(
    names_comma,
    function_auto_checked,
  );
  return r;
}
