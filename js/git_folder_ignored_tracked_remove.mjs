import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_ignored_tracked } from "./git_folder_ignored_tracked.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function git_folder_ignored_tracked_remove(folder) {
  "$plain folder";
  "Has this repository stop recording every file its own ignore rules say it should not be recording, leaving all of them exactly where they are on the disk.";
  "The other half of writing an ignore rule, and the half that is easy to leave out. A rule only governs files git has not met yet, so writing one over a folder git already knows changes nothing at all about that folder - it goes on being recorded, at its old rate, under a rule that reads as though the matter were settled.";
  "It is given no list and finds its own, so it can be run after any rule is written, and run again afterwards, and asked a third time by somebody who does not know whether the first two happened. Nothing about it depends on knowing what the rules were changed to.";
  "The files themselves are untouched. What is dropped is the record git keeps of them, which is why this is safe to run while others are working in the same folder: the build sitting there stays sitting there, and the next reader of it cannot tell the difference.";
  "It asks again at the end. Git spells paths its own way and a rule can match something the asking did not, so the only honest proof that the recording stopped is the same question answering nothing the second time.";
  arguments_assert(arguments, 1);
  let named = await git_folder_ignored_tracked(folder);
  let none = list_empty_is(named);
  if (none) {
    let already = {
      removed: [],
      remaining: [],
    };
    return already;
  }
  let asked = ["rm", "--cached", "--quiet", "--"];
  list_add_multiple(asked, named);
  await git_folder_run(folder, asked);
  let remaining = await git_folder_ignored_tracked(folder);
  list_empty_is_assert_json(remaining, {
    hint: "the recording was dropped for the files named below and they are still being recorded afterwards, so something is putting them back - look for a rule that matches them only some of the time before writing any of this into a commit",
    remaining,
  });
  let r = {
    removed: named,
    remaining,
  };
  return r;
}
