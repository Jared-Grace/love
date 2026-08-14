import { text_split_comma } from "./text_split_comma.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function permission_grants_reaching(seams_comma) {
  "Which standing approvals can reach any of the named functions, and which ones each of them reaches.";
  "A grant is a promise about a whole command line, and the guard reads the command line and nothing else. So taking the approval away from the function that does the work stops nothing while an approved wrapper still calls it: the wrapper runs its innards with no prompt, and the innards were never the thing being asked about. Which approvals to take away is therefore a question about reach rather than about names, and it is the wrappers that answer it.";
  "Asking it by reading names is what this exists to replace. A word typed into a search finds what the typist already thought of, so the one wrapper nobody remembered stays approved and the guarantee is quietly false while reading as though it holds. Measured on 2026-08-14: reading names for the word build found five candidates and missed the two that were only reachable through another.";
  "The walk is handed the same memory throughout, so a helper deep under twenty approvals is read once rather than twenty times.";
  let names = await permission_grant_names();
  let seams = text_split_comma(seams_comma);
  let remembered = {};
  let reaching = [];
  for (let name of names) {
    let reached = await function_seams_reached_memo(name, seams, remembered);
    let reaches = list_empty_not_is(reached);
    if (reaches) {
      list_add(reaching, {
        grant: name,
        reached,
      });
    }
  }
  let r = {
    seams,
    grants: names.length,
    reaching,
  };
  return r;
}
