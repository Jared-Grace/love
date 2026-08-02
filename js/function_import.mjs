import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_import(f_name) {
  text_combine(
    "if you need to unalias use ",
    fn_name("function_import_unalias"),
  );
  let v = await function_name_to_path_search(f_name);
  let f = property_get(v, "f_path");
  let f_path = await path_resolve(f);
  let imported = await import(text_combine("file://", f_path));
  let imported_fn = imported[f_name];
  if (typeof imported_fn !== "function") {
    ("Said as a named export rather than a default one, because that is what this reads and the two send a reader to different places. The old wording asked for a default export, so the one thing to try was the one thing that would never work.");
    throw new Error(
      text_combine_multiple([
        "the file at ",
        f_path,
        " does not export a function called ",
        f_name,
        " - a file here is named after the one function it hands out, so either the export inside it is spelt differently or this is asking for the wrong file",
      ]),
    );
  }
  return imported_fn;
}
