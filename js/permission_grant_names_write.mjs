import { fn_name } from "./fn_name.mjs";
import { permission_grant_names_note } from "./permission_grant_names_note.mjs";
import { list_unique } from "./list_unique.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_names_spelled } from "./js_code_names_spelled.mjs";
import { folder_js } from "./folder_js.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_auto } from "./function_auto.mjs";
export async function permission_grant_names_write(names) {
  "write these names out as the source of the list Claude's allow rules are generated from, and leave the file in the shape the normalize pass would leave it in";
  "normalizing afterwards is not tidiness. The renderer numbers its first binding like all the others and puts the whole list on a single line, while the normalize pass drops that number and wraps the list one name to a line, so a file written and not normalized differs from itself the moment anybody runs the pass over it - and a generated file that reports itself changed when nothing changed is one nobody trusts.";
  "a name spelled twice is dropped to one here, and here rather than in any caller, because this is the only thing that writes the list. Two spellings grant exactly what one grants, so nothing is taken away - but two Claudes granting at once each merge into a list the other has already changed, and the same name goes in twice through a caller that could not see it. It is also what makes rendering the list from itself leave the file alone, which is the whole claim the round-trip command exists to check.";
  let f_name = fn_name("permission_grant_names");
  let note = permission_grant_names_note();
  let unique = list_unique(names);
  ("★ EVERY NAME WRITTEN MUST NAME A LIVE FUNCTION, CHECKED JUST BEFORE THE WRITE. A batch grant reads the list, spends minutes on a safety walk, then writes. A peer's rename landing in that window was undone by the write: on 2026-11-07 two renamed grants went back to their old spellings, which nothing answers to. A name asked for before a rename and granted after it is the same fault. Both show up here as a name no function has, so refusing to write keeps the peer's edit, and the caller runs again from the list as it now stands.");
  ("Refusing, not dropping, is deliberate. Dropping a dead name only takes an approval away, but where the name was renamed it silently loses a grant the human gave. A refusal says which names, and the remover of dead grants is the command for a deletion.");
  let live = await functions_names();
  let dead = list_without_multiple(unique, live);
  list_empty_is_assert_json(dead, {
    hint: text_combine_multiple([
      "these granted names name no live function, so nothing was written - a peer may have renamed one while this ran, so run the command again; where a function was deleted, take its grant back with ",
      fn_name("permission_grants_dead_remove"),
    ]),
  });
  let code = js_code_names_spelled(f_name, note, unique);
  let dir = folder_js();
  let path = js_file_dir_path(dir, f_name);
  await file_overwrite(path, code);
  await function_auto(f_name);
  let report = {
    path,
    names: unique.length,
    spelled: unique,
  };
  return report;
}
