import { arguments_assert } from "./arguments_assert.mjs";
import { folders_function_named_roots } from "./folders_function_named_roots.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_user_mounted_assert } from "./folder_user_mounted_assert.mjs";
import { assert_json } from "./assert_json.mjs";
export async function folders_function_named_roots_present_assert() {
  arguments_assert(arguments, 0);
  ("Refuse to go on unless every folder whose children are named after a function can actually be reached.");
  ("The finder over those folders answers nothing when one is not there, and that is the right answer for a gate: a machine holding none of the data has no data left behind. It is the wrong answer for anything that writes down what it found, because nothing found and nothing there read the same and only one of them means the record may shrink. Measured on the day this was written - the drive went out partway through a session, and the record of what was left behind could have been emptied by a reading that never looked at anything.");
  ("So the two readers part company here rather than in the finder. Whoever is only reporting may abstain; whoever is about to write down what they saw has to have seen it.");
  ("The drive being out is said in its own words first, because what the system says on its own names a permissions problem that is not there and the remedy is to plug it back in.");
  let roots = folders_function_named_roots();
  for (let root of roots) {
    let there = await file_exists(root);
    if (there) {
      continue;
    }
    await folder_user_mounted_assert(root);
    assert_json(there, {
      hint: "this folder is not there at all, so nothing can be said about what is left behind inside it - and a record written from a reading that reached nothing would quietly forget every folder it could not see",
      root,
    });
  }
}
