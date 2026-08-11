import { git_folder_run } from "./git_folder_run.mjs";
export async function git_remote_origin_url_set(folder, value) {
  "Points the repo in one folder at a new address for where it was cloned from.";
  "The address is handed over as its own word rather than written into a line of text. It arrives from outside the source - read back off a repo that was set up elsewhere - and a line of text is split back into words before it runs, so a value carried inside one can stop being one word and start being a further command.";
  await git_folder_run(folder, ["remote", "set-url", "origin", value]);
}
