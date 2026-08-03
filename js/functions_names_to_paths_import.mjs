import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_names_to_paths_import() {
  "The map from every function's name to its file, fetched only at the moment names are actually being looked up.";
  "Named apart and asked for this way because a plain import is followed before the file it sits in runs a single line. Building the map lists every function file in every repo, so it reaches the repo scanner and the path readers behind it - 29 of the 323 files a command loads.";
  "The only caller asks it about the expansions of an acronym, and a name spelled in full has none, so on the seam that takes full names only the list is always empty and the map is never wanted. What is behind the branch is exactly what it always was; it simply arrives when the branch is taken.";
  let module = await import(
    text_combine_multiple(["./", fn_name("functions_names_to_paths"), ".mjs"])
  );
  let fn = property_get(module, fn_name("functions_names_to_paths"));
  return fn;
}
