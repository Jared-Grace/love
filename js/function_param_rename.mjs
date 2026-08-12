import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { function_identifier_rename_checked } from "./function_identifier_rename_checked.mjs";
export async function function_param_rename(f_name, name, name_after) {
  arguments_assert(arguments, 3);
  ("Give one of a function's parameters a better name, everywhere inside that function.");
  ("The row this completes. A parameter could already be added and taken away by name, and the one thing left was to spell an existing one differently - which until now meant editing the declaration by hand and then hunting the body for every line reading it, with nothing to say when one was missed.");
  ("Nothing outside the function moves, and nothing outside it needs to. A call hands its arguments over in order and never says what the far end calls them, so every caller goes on saying exactly what it said before. That is what makes this behaviour-preserving by construction rather than by checking.");
  ("It refuses a word that is not a parameter, and that refusal is the whole reason this exists beside the plain rename underneath. Renaming a word the function never binds is not an error to that one - it walks the body, finds nothing to change, and reports a clean run. So a mistyped parameter name would come back looking exactly like a rename that worked.");
  ("An unpacked parameter's pieces are not offered. A piece is a key of an object the caller built, so changing its spelling here changes what the caller has to hand over - which is a different edit, reaching outside this function, and it should be asked for by a name that says so.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let params = js_function_declaration_params_names_plain(declaration);
  let named = list_includes(params, name);
  assert_json(named, {
    hint: "this function has no parameter of that name, and renaming a word it never binds would quietly do nothing at all - would you like to check the spelling against the list here?",
    f_name,
    name,
    params,
  });
  let r = await function_identifier_rename_checked(f_name, name, name_after);
  await function_param_plain_marker_rename(f_name, name, name_after);
  return r;
}
