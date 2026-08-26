import { function_name_full_assert } from "./function_name_full_assert.mjs";
import { files_to_commit_take } from "./files_to_commit_take.mjs";
import { ai_git_files } from "./ai_git_files.mjs";
export async function ai_git_command_generic(f_name, args) {
  "Commits what a named command wrote, saying in the message which command that";
  "was. The log then answers a question no other record does: how would this change";
  "be made again without asking a model to invent it? A named transform and what it";
  "was given is a complete answer; a bare word is an admission that there is none.";
  "Takes the name and the arguments apart rather than one finished line, because";
  "the message is built in one place for every repo and that place already knows";
  "how to make a command line safe to send.";
  "The note of written files is taken before anything else and emptied in the same";
  "breath, so it is spent exactly once: left behind, it would let the next commit";
  "claim files that a different command wrote.";
  "The name has to be a full one, and it is refused here rather than at each way in.";
  "Claude's seam already refuses shorthand for the command it is asked to run, but a";
  "name handed over as an argument never passed that door: running the by-name commit";
  "and typing the key you would type at the keyboard wrote a message naming a";
  "shorthand, and five commits in the log say a change was made by whatever that key";
  "points at today. An alias key can be repointed with one command, so such a message";
  "is a claim that goes false without anybody touching the commit.";
  await function_name_full_assert(f_name);
  let files = await files_to_commit_take();
  let result = await ai_git_files(f_name, args, files);
  return result;
}
