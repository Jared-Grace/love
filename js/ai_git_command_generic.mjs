import { files_written_take } from "./files_written_take.mjs";
import { git_ac_call_repos_files_or_all } from "./git_ac_call_repos_files_or_all.mjs";
import { git_acp_call_folder_try } from "./git_acp_call_folder_try.mjs";
import { path_join } from "./path_join.mjs";
import { lock_wait } from "./lock_wait.mjs";
import os from "os";
export async function ai_git_command_generic(f_name, args) {
  "Commits everything, saying in the message which command produced it. The log";
  "then answers a question no other record does: how would this change be made";
  "again without asking a model to invent it? A named transform and what it was";
  "given is a complete answer; a bare word is an admission that there is none.";
  "Takes the name and the arguments apart rather than one finished line, because";
  "the message is built in one place for every repo and that place already knows";
  "how to make a command line safe to send.";
  "the note of written files is taken outside the lock and before anything else, so that whatever happens next it is emptied exactly once: leaving it behind would let the following commit claim files that a different command wrote";
  let files = await files_written_take();
  let result = null;
  async function lambda() {
    result = await git_ac_call_repos_files_or_all(f_name, args, files);
    let v = os.homedir();
    let memory_backup_folder = path_join([v, "backup", "love_claude_memory"]);
    await git_acp_call_folder_try(memory_backup_folder, f_name, args);
  }
  await lock_wait(
    ai_git_command_generic.name,
    lambda,
    ai_git_command_generic.name,
  );
  ("answering with what was committed is what makes an empty commit visible: without it a commit that found nothing to do reads exactly like one that worked");
  return result;
}
