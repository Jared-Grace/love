import { git_current_run } from "./git_current_run.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function git_current_run_multiple(commands_words) {
  "Runs several git commands where we are standing, one after another, and answers what each of them printed.";
  "Each command arrives as its own list of words, so what is handed over is a list of lists. That reads heavier than a list of lines and is the whole safety of it: a line has to be split back into words before it runs, and nothing here would know which of the lines it was given carried a value that must stay one word.";
  "One after another rather than all at once, because these are commands that change the repo and the later ones assume the earlier ones happened - a remote is added before anything is pushed to it.";
  let results = await list_map_async(commands_words, git_current_run);
  return results;
}
