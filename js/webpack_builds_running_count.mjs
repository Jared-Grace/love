import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read } from "./folder_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { process_command_line_or_null } from "./process_command_line_or_null.mjs";
import { text_includes } from "./text_includes.mjs";
import { webpack_build_command_start } from "./webpack_build_command_start.mjs";
export async function webpack_builds_running_count() {
  "How many webpack builds are running anywhere on this machine, counted from the running processes themselves rather than from any one program's notes.";
  arguments_assert(arguments, 0);
  ("★ A PROGRAM'S OWN NOTES ONLY EVER COUNT ITS OWN WORK. The watcher keeps a flag per app and holds itself to six builds at once, and that is a true count of the watcher and a false count of the machine. Measured on the 21st of August: the watcher's own builds peaked at five while the machine as a whole reached seven, and the extra ones were builds somebody had started by hand. Those the flags neither see nor govern.");
  ("Exactly one process per build is counted, which was checked against a running build rather than assumed. A build is three processes deep - the runner starts a shell and the shell starts the compiler - and only the outermost of the three carries these words joined by a space: the shell below it carries the program's name in quotes, and the one below that carries nothing but the name.");
  ("Folders in here that are not processes answer with nothing and are passed over, so the whole of ",
    fn_name("folder_read"),
    " can be walked without first deciding which names are numbers.");
  let entries = await folder_read("/proc");
  let start = webpack_build_command_start();
  let start_joined = list_join_space(start);
  let count = 0;
  for (let entry of entries) {
    let line = process_command_line_or_null(entry);
    let missing = null_is(line);
    if (missing) {
      continue;
    }
    let match = text_includes(line, start_joined);
    if (not(match)) {
      continue;
    }
    count = count + 1;
  }
  return count;
}
