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
export async function function_declaration_extras_overwrite(
  declaration,
  extras,
  f_name,
) {
  "Writes one function, together with what its file keeps outside it, into the repo under a name, exported, with every import it needs added, and puts the whole over whatever file was answering to that name before.";
  "★ THE EXTRAS ARE WRITTEN WITH THE FUNCTION, IN ONE PIECE, BEFORE THE IMPORTS ARE WORKED OUT. A value kept beside a function and read inside it has to be there when the file is canonicalised; written afterwards, the pass would first see a body reading a name nothing binds. Writing only the function is how the Strong's Greek dictionary lookup lost its kept dictionary and threw on every call.";
  "What is handed in is the whole of the file's top line besides its imports: an empty list writes a file holding the function alone, and anything the file held before and the list leaves out is gone. Deciding that is the caller's, which is why the caller hands the list in.";
  "A name that already has a file is written over in that file, in whichever repository it sits, and its imports are worked out from that file's folder; a new name lands in the repository being worked in.";
  arguments_assert(arguments, 3);
  function lambda(item) {
    let code = js_unparse(item);
    return code;
  }
  let codes = extras.map(lambda);
  let code_declaration = js_unparse(declaration);
  let code_export = js_code_export(code_declaration);
  let contents = [...codes, code_export].join("\n");
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
