import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_rename } from "./function_rename.mjs";
export async function function_rename_commit(f_name_before, f_name_after) {
  "Renames one function everywhere and commits exactly what that rename touched, under the rename's own name and its own two words.";
  "The rename and the commit were always two commands typed one after the other, and the second one is the one that gets forgotten. What a forgotten commit costs here is not the commit - somebody's sweep picks the files up within minutes - it is the name on it. A rename swept up by a sweep is filed under the bare word this repo keeps for hand edits, and the log then says a human changed those files when a command did.";
  "The window matters because the folder is shared. Between the rename finishing and the commit being typed, any of the other hands working here can commit, and whichever gets there first takes the files. So the two steps are made one rather than made faster.";
  "Anything already noted is committed first, before the rename runs. Otherwise a hand edit somebody left uncommitted would be swept into this commit and would arrive claiming to be the rename, which is the one thing a message here must never say.";
  arguments_assert(arguments, 2);
  await ai_git_noted();
  let r = await function_call_commit(function_rename, [
    f_name_before,
    f_name_after,
  ]);
  return r;
}
