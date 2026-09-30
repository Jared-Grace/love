import { arguments_assert } from "./arguments_assert.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { js_format } from "./js_format.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_source_formatted_overwrite } from "./function_source_formatted_overwrite.mjs";
export async function function_declaration_overwrite(declaration, f_name) {
  arguments_assert(arguments, 2);
  ("Writes one function written out as a tree into the repo under a name, exported, with every import it needs added, and puts it over whatever was answering to that name before.");
  ("The writing half of making a function, with no question asked about whether the name is free. Its caller next door asks that question and is the whole of what that caller adds; a second caller wants the opposite answer to the same question, so the question cannot live down here.");
  ("The name is handed in rather than read off the declaration, because the caller has already read it to ask its own question about it, and reading it twice is how the two could come to disagree.");
  ("A name that already has a file is written over in that file, in whichever repository it sits. The imports are worked out from the folder of that existing file, so writing anywhere else puts paths into a file that were measured from another folder - which is how a function living in one repository arrived in another carrying an import spelled from the first. A new name lands in the repository being worked in, which is also the folder its imports are measured from, so the two agree there already.");
  let code_declaration = js_unparse(declaration);
  let contents = js_code_export(code_declaration);
  let ast = js_parse(contents);
  await js_imports_missing_add_all(ast);
  let contents_import = js_unparse(ast);
  let dictionary = await functions_names_to_paths();
  let existing = property_get_or_null(dictionary, f_name);
  if (existing) {
    let formatted = await js_format(contents_import);
    await file_overwrite(existing, formatted);
    return;
  }
  await function_source_formatted_overwrite(f_name, contents_import);
}
