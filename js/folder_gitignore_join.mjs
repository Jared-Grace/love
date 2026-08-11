import { path_join } from "./path_join.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
export function folder_gitignore_join(name) {
  "Where one of the local records lives - the log of what was run, the compiled-file cache, the note of what a commit is for. Spelled from the root.";
  "It used to be spelled from where the process was standing, and that is the whole of what changed. A name on its own is a different folder to every process that reads it, so the one folder these were meant to share became five: one beside each repo a command had been run from, holding a second copy of the log and a second compiled cache. Two of the five were committed into a repo's history before anybody noticed, because the repo they landed in was not the one whose ignore rules named this folder.";
  "One of those five was worse than waste. The note saying which files a commit is for is written by the command that changed them and read by the commit afterwards, so written under one folder and read under another it is simply not there - and a commit that finds no note files nothing and says it worked.";
  "The repo is found from this file's own place on disk rather than from where the process is standing, which is what makes the answer the same for every process here.";
  let repo = folder_repo_love();
  let folder = folder_gitignore_name();
  let joined = path_join([repo, folder, name]);
  return joined;
}
