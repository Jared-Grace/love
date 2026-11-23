import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { not } from "./not.mjs";
import { file_read } from "./file_read.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_parse } from "./js_parse.mjs";
import { ebible_language_codes_iso_639_3_rename_ast } from "./ebible_language_codes_iso_639_3_rename_ast.mjs";
export async function ebible_language_codes_iso_639_3_rename_sites() {
  "Every place in js the rename of language codes to ISO 639-3 would change, and every place it would refuse - worked out on throwaway copies, so asking writes nothing. The rename itself writes exactly these.";
  "Only files whose text could hold such a place are parsed: one spelling a renamed code as a key, or naming language_code, or the English code's own file. The text only narrows which files are read; whether a place is renamed is decided on the tree.";
  arguments_assert(arguments, 0);
  let renamed = ebible_language_codes_iso_639_3_renamed();
  let befores = object_property_names(renamed);
  let pattern = new RegExp("\\b(" + befores.join("|") + ')"?\\s*:');
  let paths = await folder_read_files("js");
  let sites = [];
  for (let path of paths) {
    let b = path.endsWith(".mjs");
    if (not(b)) {
      continue;
    }
    let f_name = path
      .split("/")
      .pop()
      .replace(/\.mjs$/, "");
    let code = await file_read("js/" + path);
    let maybe =
      pattern.test(code) ||
      code.includes("language_code") ||
      equal(f_name, fn_name("ebible_language_en_code"));
    if (not(maybe)) {
      continue;
    }
    let ast = js_parse(code);
    let found = ebible_language_codes_iso_639_3_rename_ast(ast, f_name);
    sites.push(...found);
  }
  return sites;
}
