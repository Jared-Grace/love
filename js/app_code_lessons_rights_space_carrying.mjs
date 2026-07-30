import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_lesson_rights_space_strip } from "./js_lesson_rights_space_strip.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function app_code_lessons_rights_space_carrying() {
  "names every code lesson that still hands over a name-word starting with a space, found by asking the strip of a tree nobody writes back";
  "The question is asked of the same transform that does the fixing, on a tree that";
  "is thrown away, so what the gate watches for and what the sweep repairs can never";
  "drift apart. A gate written to look for the space itself would be a second";
  "description of the same rule, and the day the two disagreed the gate would be the";
  "one that was wrong.";
  "The set is found rather than given. A list written into a caller stops being true";
  "the moment a lesson is added, and a lesson added with the space is exactly what";
  "this is here to catch.";
  "A file that will not read or will not parse is passed over rather than reported. A";
  "peer is editing it right now, and half a file is not a finding.";
  let paths = await functions_names_to_paths();
  let found = [];
  for (let f_name of Object.keys(paths)) {
    let lesson_is = text_starts_with(f_name, "app_code_lesson");
    if (not(lesson_is)) {
      continue;
    }
    let f_path = property_get(paths, f_name);
    async function read() {
      let read_code = await file_read(f_path);
      return read_code;
    }
    let code = await catch_null_async(read);
    let unreadable = equal(code, null);
    if (unreadable) {
      continue;
    }
    function parse() {
      let parsed = js_parse(code);
      return parsed;
    }
    let ast = await catch_null_async(parse);
    let torn = equal(ast, null);
    if (torn) {
      continue;
    }
    let count = js_lesson_rights_space_strip(ast);
    let any = greater_than(count, 0);
    if (any) {
      list_add(found, f_name);
    }
  }
  return found;
}
