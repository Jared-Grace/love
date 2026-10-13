import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_module_extras_none_assert } from "./js_module_extras_none_assert.mjs";
import { function_declaration_extras_overwrite } from "./function_declaration_extras_overwrite.mjs";
export async function function_declaration_overwrite(declaration, f_name) {
  arguments_assert(arguments, 2);
  ("Writes one function written out as a tree into the repo under a name, exported, with every import it needs added, and puts it over whatever was answering to that name before.");
  ("The writing half of making a function, with no question asked about whether the name is free. Its caller next door asks that question and is the whole of what that caller adds; a second caller wants the opposite answer to the same question, so the question cannot live down here.");
  ("The name is handed in rather than read off the declaration, because the caller has already read it to ask its own question about it, and reading it twice is how the two could come to disagree.");
  ("A caller holding only a function has nothing to say about what the file keeps outside it, so a file that keeps anything there is refused rather than written over: only the function would be carried, and the rest dropped without a word. A caller that does hold the rest hands it to the writer next door.");
  let dictionary = await functions_names_to_paths();
  let existing = property_get_or_null(dictionary, f_name);
  if (existing) {
    let parsed = await file_js_parse(existing);
    let ast_existing = property_get(parsed, "ast");
    js_module_extras_none_assert(ast_existing, existing);
  }
  await function_declaration_extras_overwrite(declaration, [], f_name);
}
