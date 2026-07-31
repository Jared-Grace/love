import { js_literal_calls_set } from "./js_literal_calls_set.mjs";
import { greater_than_equal_assert_json } from "./greater_than_equal_assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { text_empty_not_is_assert_json } from "./text_empty_not_is_assert_json.mjs";
import { import_from_dir_path } from "./import_from_dir_path.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
export async function function_literal_route(f_name, getter_f_name) {
  arguments_assert(arguments, 2);
  ("Points one file at the function that returns the word the file spells out, and");
  ("repairs the imports so the file still loads.");
  ("The word is read off the named function rather than handed over, so the two");
  ("cannot disagree. Handing it over as well would let a caller route a file onto a");
  ("function holding something else entirely, which is the one mistake this shape");
  ("of repair can make and never notice.");
  ("Which files are routed is given rather than worked out, and that is deliberate.");
  ("A word can be spelled the same in two files for no reason at all, so the set is");
  ("a reading of what the files mean and belongs to whoever did the reading.");
  ("That reading is taken as proved, and every place the named file spells the word");
  ("is pointed at the function - not only the places naming a field. It used to be");
  ("only those, on the argument that the same word elsewhere might be a different");
  ("thing spelled alike. But that argument is the guess this command already refuses");
  ("to make one line up, made again in a smaller place: the caller who named the");
  ("file is the one who read it, and a command that half-trusts its caller trusts");
  ("nobody. What it cost was worse than untidiness - the report that offers this");
  ("command named six files spelling a word in a plain declaration, and the command");
  ("refused all six and guessed in its message that they must be inside a list.");
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
  ("A few places are still left alone by design, so a file spelling the word only in");
  ("those comes back untouched. Answered the same way either way, that read as a repair that had");
  ("landed: the report offering this command stayed red, the command kept saying it");
  ("had done the work, and the reader was left to conclude the report was at fault.");
  ("The refusal stands ahead of the import repair, and so ahead of the file being");
  ("written at all, because a run that is going to refuse must leave nothing behind");
  ("- repaired imports on a file it did not otherwise touch is a change nobody");
  ("asked for, arriving alongside a message saying nothing was done.");
  let sites = 0;
  async function lambda(ast) {
    sites = await js_literal_calls_set(ast, literal, getter_f_name);
    greater_than_equal_assert_json(sites, 1, {
      hint: "nothing in this file spells that word anywhere a call may stand, so there was nothing to point at the getter — is it the argument of the frozen-word marker, or the naming of a field, or something the file only says in prose? each of those is left alone on purpose and wants an edit by hand",
      f_name,
      getter_f_name,
      literal,
    });
    await js_imports_auto_relative(ast, paths, from_dir);
  }
  await file_js_transform(f_path, lambda);
  let r = {
    f_name,
    getter_f_name,
    literal,
    sites,
  };
  return r;
}
