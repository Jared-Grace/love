import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { greater_than_equal_assert_json } from "./greater_than_equal_assert_json.mjs";
import { import_from_dir_path } from "./import_from_dir_path.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
export async function function_value_route_generic(
  f_name,
  getter_f_name,
  calls_set,
  value_read,
) {
  "Points one file at the function that returns the value the file writes out, and repairs the imports so the file still loads. What sort of value is being routed is the reading handed in, and which places count as somewhere a call may stand is the other one.";
  "The value is read off the named function rather than handed over, so the two cannot disagree. Handing it over as well would let a caller route a file onto a function holding something else entirely, which is the one mistake this shape of repair can make and never notice.";
  "Which files are routed is given rather than worked out, and that is deliberate. A value can be written the same in two files for no reason at all, so the set is a reading of what the files mean and belongs to whoever did the reading.";
  "How many places were pointed is carried back out and refused when it is none. Answered the same way either way, that read as a repair that had landed: the report offering the command stayed red, the command kept saying it had done the work, and the reader was left to conclude the report was at fault.";
  "The refusal stands ahead of the import repair, and so ahead of the file being written at all, because a run that is going to refuse must leave nothing behind - repaired imports on a file it did not otherwise touch is a change nobody asked for, arriving alongside a message saying nothing was done.";
  arguments_assert(arguments, 4);
  let paths = await functions_names_to_paths();
  let getter_path = property_get(paths, getter_f_name);
  let getter_code = await file_read(getter_path);
  let value = value_read(getter_code, getter_f_name);
  null_not_is_assert_json(value, {
    hint: "the function to route onto should be a getter that hands back one written value — is this one shaped differently, or is its value of a different sort from the one being routed?",
    getter_f_name,
  });
  let f_path = property_get(paths, f_name);
  let from_dir = import_from_dir_path(f_path);
  let sites = 0;
  async function lambda(ast) {
    sites = await calls_set(ast, value, getter_f_name);
    greater_than_equal_assert_json(sites, 1, {
      hint: "nothing in this file writes that value anywhere this reading lets a call stand, so there was nothing to point at the getter — for a word, the two readings are opposites, so try the sibling command: one of them leaves the naming of a field alone and the other touches nothing else. a value standing as the argument of the frozen-word marker, or as the source of an import, or as the name of a field, or as something the file only says in prose, is left alone and wants an edit by hand",
      f_name,
      getter_f_name,
      value,
    });
    await js_imports_auto_relative(ast, paths, from_dir);
  }
  await file_js_transform(f_path, lambda);
  let r = {
    f_name,
    getter_f_name,
    value,
    sites,
  };
  return r;
}
