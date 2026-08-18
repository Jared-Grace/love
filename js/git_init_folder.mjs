import { git_folder_run } from "./git_folder_run.mjs";
export async function git_init_folder(folder) {
  "Makes the folder a repository, and answers what git said about it.";
  "Git is handed the command as a list of words rather than as a line of text. The command is one word and could never have been split wrongly, so this changes no answer; what it changes is the route, because a line of text is run by the function whose argument names the program, and everything able to reach that one is refused an allow rule for as long as it can.";
  let r = await git_folder_run(folder, ["init"]);
  return r;
}
