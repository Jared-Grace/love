import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split } from "./text_split.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_join } from "./list_join.mjs";
export async function git_paths_commits_last(folder) {
  "$plain folder";
  "The last commit to touch each file in one repository, gathered by reading the history once instead of once per file.";
  arguments_assert(arguments, 1);
  ("★ THIS EXISTS BECAUSE ASKING PER FILE COSTS A WHOLE HISTORY WALK EACH TIME. Asking git for the last commit to touch one path makes it walk every commit looking for that path, and measured here that is five seconds for one file. A run that goes red names about a hundred and thirteen distinct functions, so the same walk was being paid a hundred and thirteen times over for answers one walk already holds - about three hundred and seventy seconds of processor, taken from the peers sharing this machine. Read once, the whole history costs twenty-nine seconds on one processor and answers every file at once.");
  ("Rename detection is turned off, and that is a speed change rather than an answer change. Without it git still lists a renamed file under its new path in the commit that renamed it, which is exactly what the one-file question reports too - following a file back through its old names is a different question that nothing here asks.");
  ("Each commit's line is begun with two at-signs so a header can be told from a filename by looking at it rather than by counting the blank lines around it, which breaks on the first surprising filename. This is the one assumption here: a file whose path really began with two at-signs would be read as a commit. Nothing in any of these repositories does, and the cost if one ever did is a wrong name in a report, not a wrong verdict in a gate.");
  ("The FIRST sighting of a path is kept and later ones are ignored, because the history is walked newest first - so the first sighting is the last commit to touch it.");
  ("The whole history is walked rather than a recent window of it, and that was measured rather than assumed. A window is tempting because three thousand commits cost five seconds against the full walk's twenty-nine - but this folder takes about five hundred and thirty commits a day, so three thousand reaches back five and a half days, and a file the gates named was last touched four thousand eight hundred commits ago. A window that misses most of what is asked buys nothing and owes a fallback; the full walk answers everything and needs none.");
  let header_marker = "@@";
  let printed = await git_folder_run(folder, [
    "log",
    "--no-renames",
    "--name-only",
    "--format=@@%h/%ar/%s",
  ]);
  let paths = {};
  let heading = null;
  let lines = text_split(printed, "\n");
  for (let line of lines) {
    let header_is = text_starts_with(line, header_marker);
    if (header_is) {
      let list = text_split(line, header_marker);
      let stated = list_get(list, 1);
      let parts = text_split(stated, "/");
      let list2 = list_skip(parts, 2);
      heading = {
        commit: list_first(parts),
        when: list_get(parts, 1),
        subject: list_join(list2, "/"),
      };
      continue;
    }
    let f_path = text_trim(line);
    let blank_is = text_empty_is(f_path);
    if (blank_is) {
      continue;
    }
    let seen = property_get_or_null(paths, f_path);
    let already_is = null_not_is(seen);
    if (already_is) {
      continue;
    }
    property_set(paths, f_path, heading);
  }
  return paths;
}
