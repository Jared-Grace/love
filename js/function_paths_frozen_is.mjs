import { function_paths_frozen_enable } from "./function_paths_frozen_enable.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
export function function_paths_frozen_is() {
  "Whether this process has been told the folders it reads cannot change under it.";
  "False unless somebody said so, which is the safe way round: a process that never mentions the question gets the answer that is true of the living folder.";
  "The promise is kept under the name of the function that makes it, so the asking and the saying cannot drift apart onto two different words.";
  let frozen = global_function_property_exists(
    function_paths_frozen_enable,
    "frozen",
  );
  return frozen;
}
