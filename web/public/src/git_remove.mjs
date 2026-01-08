import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
export async function git_remove() {
  const f_path = "firebase-debug.log";
  await command_line_git("rm --cached " + f_path);
}
