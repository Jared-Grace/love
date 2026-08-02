import { list_concat_property } from "./list_concat_property.mjs";
import { functions_shadowing_offender_hidden } from "./functions_shadowing_offender_hidden.mjs";
import { function_shadowing_function_rename } from "./function_shadowing_function_rename.mjs";
import { function_shadowing_rename_refusal } from "./function_shadowing_rename_refusal.mjs";
import { functions_shadowing } from "./functions_shadowing.mjs";
import { function_shadowing_rename } from "./function_shadowing_rename.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function functions_shadowing_rename_all(name, name_after) {
  "End one name's hiding everywhere it hides, rather than one function at a";
  "time. The same word is hidden in twenty places by the same habit - a local";
  "named after a function and written over it - so clearing them one";
  "command each leaves nothing behind, and files each rename under a message";
  "that has to describe a batch instead of naming a command.";
  "It finds its own set, so no list is passed in and the set cannot drift from";
  "what is actually hidden. The pair of names is the only real choice: what a";
  "local should be called instead is a judgment, and the same word does not";
  "always want the same replacement.";
  "Every guard belongs to the single rename and is left there. That one refuses";
  "a replacement that is itself a repo function, refuses one already bound in";
  "the file, and refuses a file hiding the word in more than one place - so a";
  "site this cannot do safely is SKIPPED WITH ITS NAME rather than forced, and";
  "the answer says which. A skip is a real finding: it means that file wants a";
  "name chosen by somebody reading it.";
  "Each rename commits itself under its own name and arguments, so a sweep a";
  "peer interrupts leaves whole commits rather than half of one.";
  await ai_git_noted();
  let offenders = await functions_shadowing();
  let renamed = [];
  let skipped = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let outer = property_get(offender, "shadows_outer");
    let both = list_concat_property(outer, offender, "shadows_function");
    let hides = list_includes(both, name);
    if (hides) {
      ("Two kinds of hiding, two renames, chosen by which list the word came from");
      ("rather than by trying one and reading what it complained about. A scope");
      ("inside the file hides an outer binding, and the inner rename moves that one");
      ("binding; a name bound at the function's own level hides a repo FUNCTION,");
      ("where there is no inner binding to move and the rename is over the whole");
      ("function. Each verb refuses what the other is for, so a wrong choice here");
      ("stops rather than quietly doing the other edit.");
      let inner_is = list_includes(outer, name);
      let verb = function_shadowing_function_rename;
      if (inner_is) {
        verb = function_shadowing_rename;
      }
      async function attempt() {
        let done = await function_call_commit(verb, [f_name, name, name_after]);
        return done;
      }
      let result = await catch_null_async(attempt);
      let refused = equal(result, null);
      if (refused) {
        ("The reason is asked for again rather than kept from the attempt, because");
        ("the attempt is the half that commits and it must not be run twice. What");
        ("a name is skipped FOR is the whole value of a skip - a list of bare");
        ("names says the sweep did nothing and not one word about why, which is");
        ("the shape that reads as a clean run.");
        let why = await function_shadowing_rename_refusal(
          f_name,
          name,
          name_after,
        );
        let note = {
          name: f_name,
          why,
        };
        list_add(skipped, note);
      }
      let done2 = not(refused);
      if (done2) {
        list_add(renamed, f_name);
      }
    }
  }
  ("Asked again after the work, so what is left is measured rather than counted");
  ("up from what each step believed it did.");
  let after = await functions_shadowing();
  let left = [];
  for (let offender2 of after) {
    let f_name2 = property_get(offender2, "name");
    let both2 = functions_shadowing_offender_hidden(offender2);
    let hides2 = list_includes(both2, name);
    if (hides2) {
      list_add(left, f_name2);
    }
  }
  let r = {
    name,
    name_after,
    renamed,
    skipped,
    still_hiding: left,
  };
  return r;
}
