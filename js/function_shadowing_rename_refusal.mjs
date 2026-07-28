import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { js_free_names } from "./js_free_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export async function function_shadowing_rename_refusal(
  f_name,
  name,
  name_after,
) {
  "Why the single shadowing rename will not do this one, said in a sentence a";
  "reader can act on. It asks the same questions that rename asks and answers";
  "the first that comes back no.";
  "It changes nothing, so it is safe to ask before or after an attempt. That is";
  "the point: the attempt is the half that commits, so it must not be run a";
  "second time just to find out what it said.";
  "Empty text means every question came back yes, which is worth telling apart";
  "from a known refusal - it says the attempt failed for a reason nobody has";
  "thought to ask about yet.";
  let candidates = await functions_names();
  let clash = list_includes(candidates, name_after);
  if (clash) {
    let taken =
      "the replacement is itself the name of a repo function, so the file would hide that one instead";
    return taken;
  }
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let free = js_free_names(ast);
  let bound_already = list_includes(free, name_after);
  if (bound_already) {
    let occupied =
      "the replacement is already read in this file, so the rename would run two different things together under one name";
    return occupied;
  }
  let scopes = js_scopes_shadowing(ast, name);
  let count = list_size(scopes);
  let none = equal(count, 0);
  if (none) {
    let flat =
      "nothing INSIDE this file hides the word - it is bound at the function's own level, over a repo function of that name, which is the other kind of hiding and wants a whole-function rename rather than an inner one";
    return flat;
  }
  let several = greater_than(count, 1);
  if (several) {
    let many =
      "the file hides the word in more than one place, so there is no single inner binding to move and the choice belongs to whoever is reading it";
    return many;
  }
  let unknown = "";
  return unknown;
}
