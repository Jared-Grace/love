import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
export async function function_names_to_acronyms_import() {
  "The acronym map's builder, fetched only at the moment a name that could be an acronym is actually asked about.";
  "Named apart and asked for this way because a plain import is followed before the file it sits in runs a single line. The builder lists every function file in every repo and derives an acronym for each, so it reaches the repo scanner and the file reader behind it - 17 of the 339 files a command loads.";
  "The branch that calls it runs only for a name holding no separator, and every function's full name holds one, so on the seam that takes full names only it never runs at all. What is behind the branch is exactly what it always was; it simply arrives when the branch is taken.";
  let module = await import(
    text_combine_multiple(["./", fn_name("function_names_to_acronyms"), ".mjs"])
  );
  let fn = property_get(module, fn_name("function_names_to_acronyms"));
  return fn;
}
