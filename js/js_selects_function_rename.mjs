import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
export function js_selects_function_rename(ast, selects, name_after) {
  arguments_assert(arguments, 3);
  ("Give a chosen function written inside another one a name of your own choosing, and move every mention of it with it.");
  ("The move that has to come before a lift, and until now there was no way to make it. A pass that walks a body lifting what it can refuses every piece the auto pass named for itself - lambda, lambda5 - and says so plainly: carried out under a name joined to its holder's, it would stand in the repo as a name no search for what it does could ever reach. Then it asks whether you would like to name it for what it does first. That question had no answer anywhere, so the pieces stayed where they were and the bodies holding them stayed over the ceiling.");
  ("It refuses a name the file already reads anywhere. Renaming onto a word already in use does not fail - it silently joins two different values under one name, and every line below reads whichever one was written last. That is the failure with no error, and it is the same one the repo forbids outright under its own rule against hiding a name already in scope.");
  ("Only what reads the value moves. A word that names a property belongs to whatever object is being asked rather than to this file, so it stays where it is - which is why the renaming is handed to the reader that already knows that difference rather than done here by hand.");
  let declaration = list_single(selects);
  let name_before = js_function_declaration_name(declaration);
  let names = js_identifiers_names(ast);
  let taken = list_includes(names, name_after);
  false_is_assert_json(taken, {
    hint: "this file already reads a name spelled that way, so the renaming would join two different values under one name and every line below would read whichever was written last - pick a name nothing here says yet",
    name_before,
    name_after,
  });
  js_identifier_rename(ast, name_before, name_after);
}
