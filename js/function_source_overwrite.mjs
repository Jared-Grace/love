import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function function_source_overwrite(f_name, contents) {
  "$plain f_name";
  "$plain contents";
  arguments_assert(arguments, 2);
  ("Puts text into a function's file, found by the function's own name rather than by a path, so an alias reaches it too. The other half of the reader beside it, which had none until now.");
  ("What it is for is putting back what was there a moment ago. A transform that has to see what it wrote before it can tell whether the write was worth making needs a way back that leaves not one character different, and the only text certain to do that is the text that was read out of the same file before the transform ran.");
  let v = await function_name_to_path_unalias(f_name);
  let f_path = property_get(v, "f_path");
  await file_overwrite_uncached(f_path, contents);
}
