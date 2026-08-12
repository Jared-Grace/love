import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_free_names } from "./js_free_names.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { function_identifier_replace } from "./function_identifier_replace.mjs";
export async function function_identifier_rename_checked(
  f_name,
  name,
  name_after,
) {
  arguments_assert(arguments, 3);
  let candidates = await functions_names();
  let clash = list_includes(candidates, name_after);
  not_assert_json(clash, {
    hint: "that name belongs to a repo function, so the file would hide that one instead — would a plainer local name do?",
    name_after,
  });
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let free = js_free_names(ast);
  let taken = list_includes(free, name_after);
  not_assert_json(taken, {
    hint: "the file already reads that name, so the rename would run two different things together under one name — would you like a name nothing here uses?",
    name_after,
  });
  ("Whether the file READS the name is not the question - whether it BINDS it");
  ("anywhere is. A name bound in some inner scope is not free, so asking only");
  ("about free names says yes to a word the file already uses for something else,");
  ("and the rename lands a second binding on top of the first. That happened:");
  ("renaming to a word an inner scope already bound produced a line declaring a");
  ("name from a call to that same name, which throws the moment it runs.");
  let bound = js_binding_names(ast);
  let occupied = list_includes(bound, name_after);
  not_assert_json(occupied, {
    hint: "something in this file already binds that name, so the rename would put two different things under one word and hide one behind the other — would you like a name nothing here binds?",
    name_after,
  });
  ("A file that IMPORTS the word as well is refused. Renaming over the whole");
  ("function moves every mention of it, and where an import survives beside a");
  ("local of the same name the file genuinely means two things by the word - so");
  ("the rename would carry the call that meant the imported one along with it,");
  ("and the call would then name nothing. The auto pass drops an import that a");
  ("local stands entirely in front of, so an import that is still here is one");
  ("something still reads.");
  let imported = js_imports_local_names(ast);
  let both_meanings = list_includes(imported, name);
  not_assert_json(both_meanings, {
    hint: "this file both imports that name and binds it, so it means two different things by one word — would you like to rename the local by hand, where you can see which mentions are which?",
    name,
  });
  ("A file that hides the word INSIDE itself as well is refused rather than");
  ("guessed at: renaming over the whole function would move an inner binding the");
  ("caller never named, which is a different edit from the one being asked for.");
  let scopes = js_scopes_shadowing(ast, name);
  let none = list_empty_is(scopes);
  assert_json(none, {
    hint: "something inside this file hides that word too, so a whole-function rename would move a binding nobody named — would you like the inner rename instead?",
    name,
    scopes: scopes.length,
  });
  let r = await function_identifier_replace(f_name, name, name_after);
  return r;
}
