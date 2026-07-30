import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { text_empty_not_is_assert_json } from "./text_empty_not_is_assert_json.mjs";
import { import_from_dir_path } from "./import_from_dir_path.mjs";
import { js_literal_key_calls_set } from "./js_literal_key_calls_set.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
export async function function_literal_route(f_name, getter_f_name) {
  arguments_assert(arguments, 2);
  ("Points one file's field names at the function that returns the word they are");
  ("spelled with, and repairs the imports so the file still loads.");
  ("The word is read off the named function rather than handed over, so the two");
  ("cannot disagree. Handing it over as well would let a caller route a file onto a");
  ("function holding something else entirely, which is the one mistake this shape");
  ("of repair can make and never notice.");
  ("Which files are routed is given rather than worked out, and that is deliberate.");
  ("A word can be spelled the same in two files for no reason at all, so the set is");
  ("a reading of what the files mean and belongs to whoever did the reading.");
  let paths = await functions_names_to_paths();
  let getter_path = property_get(paths, getter_f_name);
  let getter_code = await file_read(getter_path);
  let literal = js_code_getter_literal(getter_code, getter_f_name);
  text_empty_not_is_assert_json(literal, {
    hint: "the function to route onto should be a getter that hands back one written word — is this one shaped differently?",
    getter_f_name,
  });
  let f_path = property_get(paths, f_name);
  let from_dir = import_from_dir_path(f_path);
  ("How many places were pointed is carried back out and refused when it is none.");
  ("The rewriting only reaches a word standing where a call may stand, so a file");
  ("spelling it somewhere else - inside a list being joined, say - comes back");
  ("untouched. Answered the same way either way, that read as a repair that had");
  ("landed: the report offering this command stayed red, the command kept saying it");
  ("had done the work, and the reader was left to conclude the report was at fault.");
  let sites = 0;
  async function lambda(ast) {
    sites = js_literal_key_calls_set(ast, literal, getter_f_name);
    await js_imports_auto_relative(ast, paths, from_dir);
  }
  await file_js_transform(f_path, lambda);
  greater_than_assert_json(sites, 0, {
    hint: "nothing in this file spells that word anywhere a call may stand, so there was nothing to point at the getter — is it written inside a list, or as the key of a written-out record? either one wants an edit by hand",
    f_name,
    getter_f_name,
    literal,
  });
  let r = {
    f_name,
    getter_f_name,
    literal,
    sites,
  };
  return r;
}
