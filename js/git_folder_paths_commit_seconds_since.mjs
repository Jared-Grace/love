import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export async function git_folder_paths_commit_seconds_since(folder, since) {
  "For every file this folder's recent commits touched, the second of the newest commit that touched it.";
  "Asked as one question about the whole folder rather than one question per file. Asking git about a named set of files makes it look through the whole of history for them, and it costs about the same whether two files are named or five hundred - so several such questions cost several times that, while one question naming nothing costs it once and answers for every file at the same time.";
  "Only commits made since the given second are looked through, because the caller already knows there is nothing it needs from before then. That bound is what keeps the cost small: a day of this repo's history is a few thousand lines to read, and all of it is tens of times more.";
  "A file the answer does not mention is one no recent commit touched, which is exactly what the caller wants to know about it.";
  "★ THE MARK IS A SLASH BECAUSE A LETTER IS NOT A MARK. THIS ASKED FOR C AND THE FOLDER HOLDS CLAUDE.MD, SO THAT FILE'S OWN LINE WAS READ AS A COMMIT ANNOUNCING ITSELF: THE FILE FELL OUT OF THE ANSWER ALTOGETHER, AND EVERY LATER FILE FIRST NAMED IN THAT SAME COMMIT WAS GIVEN A SECOND OF NOTHING. BOTH FAILURES ARE SILENT - A MISSING FILE READS AS ONE NOTHING TOUCHED, WHICH IS THE ANSWER THIS IS ASKED FOR. GIT NAMES A FILE BY ITS PATH FROM THE TOP OF THE REPO, WHICH NEVER BEGINS WITH A SLASH, SO A SLASH IS THE FIRST CHARACTER NO ANSWERING LINE CAN CARRY.";
  let asked = text_combine_multiple(["--since=@", since]);
  let printed = await git_folder_run(folder, [
    "log",
    asked,
    "--format=/%ct",
    "--name-only",
  ]);
  let lines = printed.split("\n");
  ("Each commit announces its own second on a line marked out from the file names by a character that no path can begin with, and then lists its files. Git answers newest first, so the first mention of a path is the newest one and every later mention is older.");
  let seconds = {};
  let commit_second = null;
  for (let line of lines) {
    let marked = text_starts_with(line, "/");
    if (marked) {
      let second_text = text_skip(line, 1);
      commit_second = integer_to_try(second_text);
      continue;
    }
    let named = line in seconds;
    let blank = text_empty_is(line);
    if (named || blank) {
      continue;
    }
    seconds[line] = commit_second;
  }
  return seconds;
}
