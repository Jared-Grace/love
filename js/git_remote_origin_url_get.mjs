import { text_trim } from "./text_trim.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_remote_origin_url_get(folder) {
  "Where the repo in one folder was cloned from, or a throw when it was cloned from nowhere.";
  "Git is handed the command as a list of words rather than as a line of text, the same way its setting twin already was. The two answers are the same - the command is fixed, so nothing carried in the folder name could ever have become a second command - but the route is not: a line of text is run by the function whose argument names the program, and every function that can reach that one is refused an allow rule for as long as it can. This one sat on the only path from committing to it, so a rename could not be committed without asking.";
  let stdout = await git_folder_run(folder, ["remote", "get-url", "origin"]);
  let url = text_trim(stdout);
  return url;
}
