import { function_imports } from "./function_imports.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function function_imports_none_assert(f_name, reason) {
  "refuse to go on unless this function stands entirely on its own, borrowing no name from anywhere in this repo";
  "for a function that is going to be sent somewhere else to run - into a browser, say - as its own text. over there none of this repo's names exist, so a single borrowed name is code that throws where nothing is watching, and the failure arrives disguised as whatever it was sent to do going wrong";
  "an import is the thing to look for because that is how a borrowed name arrives: the canonicalizing pass never rewrites a line without adding the import for the name it wrote, so no imports is the same statement as nothing borrowed, asked in a way that is simple to be sure of";
  let imports = await function_imports(f_name);
  list_empty_is_assert_json(imports, {
    hint: "this function is sent somewhere else to run as its own text, so it may not borrow a name from this repo - the imports listed here are names that will not exist where it lands",
    f_name,
    reason,
  });
}
