import { list_unique } from "./list_unique.mjs";
import { folder_js } from "./folder_js.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { permission_grant_names_note } from "./permission_grant_names_note.mjs";
import { js_code_names_spelled } from "./js_code_names_spelled.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_auto } from "./function_auto.mjs";
export async function permission_grant_names_write(names) {
  "write these names out as the source of the list Claude's allow rules are generated from, and leave the file in the shape the normalize pass would leave it in";
  "normalizing afterwards is not tidiness. The renderer numbers its first binding like all the others and puts the whole list on a single line, while the normalize pass drops that number and wraps the list one name to a line, so a file written and not normalized differs from itself the moment anybody runs the pass over it - and a generated file that reports itself changed when nothing changed is one nobody trusts.";
  "a name spelled twice is dropped to one here, and here rather than in any caller, because this is the only thing that writes the list. Two spellings grant exactly what one grants, so nothing is taken away - but two Claudes granting at once each merge into a list the other has already changed, and the same name goes in twice through a caller that could not see it. It is also what makes rendering the list from itself leave the file alone, which is the whole claim the round-trip command exists to check.";
  let f_name = fn_name("permission_grant_names");
  let note = permission_grant_names_note();
  let unique = list_unique(names);
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
