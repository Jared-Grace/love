import { repo_acronym_to_path } from "./repo_acronym_to_path.mjs";
import { each_async } from "./each_async.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_publish_initial(acronym) {
  "Puts a repo on its main branch and sends it up for the first time, the branch it makes being the one it then pushes.";
  "Each command is written out as the words git receives rather than as a line of text that has to be split back into words. The two commands say main in the same place, which is what the joining was for, and writing them out says it twice - the cost of that is one word repeated, and what it buys is the route: a line of text is run by the function whose argument names the program, and every function able to reach that one is refused an allow rule for as long as it can.";
  let folder = await repo_acronym_to_path(acronym);
  let commands = [
    ["checkout", "-b", "main"],
    ["push", "-u", "origin", "main"],
  ];
  async function lambda(command_words) {
    await git_folder_run(folder, command_words);
  }
  await each_async(commands, lambda);
}
