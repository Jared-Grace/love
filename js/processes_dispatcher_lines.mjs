import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read } from "./folder_read.mjs";
import { process_own_id } from "./process_own_id.mjs";
import { dispatcher_scripts } from "./dispatcher_scripts.mjs";
import { process_command_line_or_null } from "./process_command_line_or_null.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function processes_dispatcher_lines() {
  arguments_assert(arguments, 0);
  ("Every running process whose command line names one of this repo's dispatcher");
  ("scripts, whatever program it actually is.");
  ("Naming one of those scripts is not the same as running it. A shell told to run");
  ("a command carries that whole command as its own line, so a wrapper around one of");
  ("these reads as one. That difference is the whole reason the two askers split");
  ("here rather than each walking the folder for itself: one of them wants what is");
  ("running and the other wants exactly what this one is not, and a walk written");
  ("twice would drift on the question they disagree about.");
  ("Never the one asking, which is such a process too and would otherwise stand at");
  ("the top of every report of its own making.");
  let entries = await folder_read("/proc");
  let mine = process_own_id();
  let scripts = dispatcher_scripts();
  let found = [];
  for (let entry of entries) {
    let own = equal(entry, mine);
    if (own) {
      continue;
    }
    let line = process_command_line_or_null(entry);
    if (equal(line, null)) {
      continue;
    }
    let ours = text_includes_multiple_is(line, scripts);
    if (not(ours)) {
      continue;
    }
    let named = {
      pid: entry,
      line,
    };
    list_add(found, named);
  }
  return found;
}
