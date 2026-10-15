import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function giveaway_psalms_chapters_uploaded_path() {
  arguments_assert(arguments, 0);
  ("Where the list of psalm chapters whose archive.org box has already been given away is kept.");
  ("★ IT IS KEPT BESIDE THE RECORD RATHER THAN IN THE FINDINGS, BECAUSE NOTHING MEASURED IT AND NOTHING CAN MEASURE IT AGAIN. The findings folder holds answers a run went and fetched, and the honest thing about such an answer is that re-running the measuring replaces it. This is the opposite kind of fact: it is the note somebody made at the moment they handed a box over, and the handing over cannot be undone, asked again, or worked out from anything on this disk. A file that could be rebuilt by a command belongs where rebuilt things go; this one is a witness, so it lives with the record it is a witness about.");
  ("★ THE LIST IS WHAT SWITCHES THE FREEZE ON, SO AN EMPTY FILE AND A MISSING FILE MUST NOT READ THE SAME. Empty means nothing has gone out yet and every name in the record is still free to move, which is true today and is a thing somebody chose to write down. Missing means nobody knows, and the one thing that must not then happen is a rewriting going ahead as though all were well. The reader above is the half that insists on this; what this says is only that the file has a place of its own and is committed, so a machine that has it is a machine that can be told.");
  let folder = data_given_folder();
  let path = path_join([
    folder,
    text_combine_multiple([
      fn_name("giveaway_psalms_chapters_uploaded"),
      ".json",
    ]),
  ]);
  return path;
}
