import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_fn_name_literals } from "./js_fn_name_literals.mjs";
import { js_literals_used } from "./js_literals_used.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
import { literal_distinctive_is } from "./literal_distinctive_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { js_code_literal_key_only } from "./js_code_literal_key_only.mjs";
import { list_add } from "./list_add.mjs";
export function literals_unnamed_generic_found_found_files_by_literal(
  codes,
  named,
  files_by_literal,
) {
  "Walks the code of every function and adds into one shared table, for each piece of plain text that no function yet stands for, the files that spell it out. It is the reading that says which words are worth a name.";
  "Four things are stepped over before a spelling is noted. The path in an import line names a file rather than a value. A name written as a name through the marker is already the name of something. Text that some function already answers to needs no second one. And text too plain to tell one place from another would gather half the repo under a single short word.";
  "A file in which every spelling of the word is naming a field gets dropped at the end, once that file's own list is made. Putting such a word behind a function would not be tidying but a change to the shape of the data - and this repo writes whole objects out to disks it cannot reach again afterwards.";
  arguments_assert(arguments, 3);
  for (let f_name of object_property_names(codes)) {
    let ast = property_js_parse(codes, f_name);
    let skip = {};
    for (let declaration of js_imports_all(ast)) {
      let source = property_path_get_2(declaration, "node", "source");
      let path = js_literal_value_get(source);
      skip[path] = true;
    }
    for (let name of js_fn_name_literals(ast, f_name)) {
      skip[name] = true;
    }
    let held = {};
    for (let node of js_literals_used(ast)) {
      let value = js_literal_value_get(node);
      let b = text_is(value);
      if (not(b)) {
        continue;
      }
      let b3 = literal_distinctive_is(value);
      if (not(b3)) {
        continue;
      }
      let skipped = property_get_or_null(skip, value);
      if (skipped) {
        continue;
      }
      let has_name = property_get_or_null(named, value);
      if (has_name) {
        continue;
      }
      held[value] = true;
    }
    for (let value of object_property_names(held)) {
      if (js_code_literal_key_only(codes[f_name], value)) {
        continue;
      }
      let files = property_get_or_null(files_by_literal, value);
      if (not(files)) {
        files = [];
        files_by_literal[value] = files;
      }
      list_add(files, f_name);
    }
  }
}
