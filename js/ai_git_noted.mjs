import { arguments_assert } from "./arguments_assert.mjs";
import { files_to_commit_take } from "./files_to_commit_take.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ai_git_files } from "./ai_git_files.mjs";
export async function ai_git_noted() {
  arguments_assert(arguments, 0);
  ("Commits whatever is already noted as changed, under the bare word, and claims");
  ("nothing about which command wrote it. Run it before a command that commits step");
  ("by step: the note is one running list with no divider in it, so anything left");
  ("over from earlier would be swept into the first step's commit and filed under a");
  ("command that never touched it. Emptying it first is what makes each step's");
  ("message true.");
  ("Nothing noted has to mean nothing to do, and it has to be said here. Asked to");
  ("commit no files at all, the plumbing below reads that as a request to commit the");
  ("whole folder, which is the one outcome this exists to prevent.");
  let files = await files_to_commit_take();
  let none = list_empty_is(files);
  if (none) {
    let nothing = {
      swept: false,
      repos: [],
    };
    return nothing;
  }
  let args = [];
  let result = await ai_git_files("ai", args, files);
  return result;
}
