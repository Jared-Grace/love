import { files_written_take } from "./files_written_take.mjs";
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
  let files = await files_written_take();
  let result = await ai_git_files(f_name, args, files);
  return result;
}
