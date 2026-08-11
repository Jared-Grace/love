import { js_name_taken_is } from "./js_name_taken_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { js_free_names } from "./js_free_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
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
    let taken_message =
      "the replacement is itself the name of a repo function, so the file would hide that one instead";
    return taken_message;
  }
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  ("A name the file BINDS and a name the file merely READS are two different");
  ("refusals, and asking only the second reported the first as no reason at all.");
  ("The rename itself refuses a word the file binds or imports; this asked");
  ("whether the word was read while unbound, which a bound word never is - so a");
  ("replacement already declared here came back as empty text, and a sweep");
  ("printed a skipped name with nothing beside it. Measured on one site: image");
  ("generate declares its own words, and the sweep said only that it had been");
  ("skipped.");
  let declared = js_name_taken_is(ast, name_after);
  if (declared) {
    let held =
      "the replacement is already bound or imported in this file, so the rename would move the hiding rather than end it";
    return held;
  }
  let free = js_free_names(ast);
  let bound_already = list_includes(free, name_after);
  if (bound_already) {
    let occupied =
      "the replacement is already read in this file, so the rename would run two different things together under one name";
    return occupied;
  }
  ("No inner scope hiding the word is NOT a refusal, and used to be reported as");
  ("one. It only says which of the two renames applies: none means the word is");
  ("bound at the function's own level over a repo function, which the");
  ("whole-function twin does, and exactly one means the inner twin does. Since the");
  ("sweep now chooses between them by kind, neither count is a reason to skip.");
  let scopes = js_scopes_shadowing(ast, name);
  let several = list_multiple_is(scopes);
  if (several) {
    let inner = fn_name("function_shadowing_rename_in");
    let many = `the file hides the word in more than one place, so there is no single inner binding to move and the choice belongs to whoever is reading it — ${inner} asks for that choice as its second argument, the function the binding sits in, and clears one binding per run`;
    return many;
  }
  let unknown = "";
  return unknown;
}
