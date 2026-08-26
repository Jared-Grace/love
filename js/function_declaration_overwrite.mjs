import { arguments_assert } from "./arguments_assert.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { function_source_formatted_write } from "./function_source_formatted_write.mjs";
export async function function_declaration_overwrite(declaration, f_name) {
  arguments_assert(arguments, 2);
  ("Writes one function written out as a tree into the repo under a name, exported, with every import it needs added, and puts it over whatever was answering to that name before.");
  ("The writing half of making a function, with no question asked about whether the name is free. Its caller next door asks that question and is the whole of what that caller adds; a second caller wants the opposite answer to the same question, so the question cannot live down here.");
  ("The name is handed in rather than read off the declaration, because the caller has already read it to ask its own question about it, and reading it twice is how the two could come to disagree.");
  let code_declaration = js_unparse(declaration);
  let contents = js_code_export(code_declaration);
  let ast = js_parse(contents);
  await js_imports_missing_add_all(ast);
  let contents_import = js_unparse(ast);
  await function_source_formatted_write(f_name, contents_import);
}
