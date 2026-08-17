import { folders_function_named } from "./folders_function_named.mjs";
import { list_indexes } from "./list_indexes.mjs";
import { list_get } from "./list_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_move } from "./file_move.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function folders_function_named_rename(
  f_name_before,
  f_name_after,
) {
  "Moves every folder named after a function to follow its new name.";
  "Each folder is named after the function and nothing else points at it, so a rename that moved only the code would leave the new name reading an empty folder while every past write sat under the old one. Moving the folders is what makes the rename behaviour-preserving again, which is what a rename is supposed to be.";
  "Every folder rather than one, because for a while this moved the store of answers a function remembers and walked away from the handover folder somebody authors chapters into by hand. The code moved, the authored chapters did not, and the symptom was an authoring folder nobody writes to, which reads as clean forever. Both sides are asked of the same list of roots, so they come back in the same order and the same number, and pairing them by position is safe by construction rather than by care.";
  "Nothing to move is the ordinary case and not a problem: most functions never store anything, and a machine that does not have the storage volume mounted holds none of the data either. Both answer the same way here, which is honest - there is no folder, so there is nothing this rename can lose.";
  "Local only, and that is the whole of what it fixes. A function name written into a remote path escapes to a disk this cannot reach, and no move here follows it.";
  arguments_assert(arguments, 2);
  let befores = folders_function_named(f_name_before);
  let afters = folders_function_named(f_name_after);
  let indexes = list_indexes(befores);
  for (let index of indexes) {
    let before = list_get(befores, index);
    let present = await file_exists(before);
    if (not(present)) {
      continue;
    }
    let after = list_get(afters, index);
    await file_move(before, after);
    let told = text_combine_multiple([
      "moved the stored files from ",
      before,
      " to ",
      after,
    ]);
    console.log(told);
  }
}
