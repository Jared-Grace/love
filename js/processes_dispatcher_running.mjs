import { folder_read } from "./folder_read.mjs";
import { dispatcher_scripts } from "./dispatcher_scripts.mjs";
import { process_command_line_or_null } from "./process_command_line_or_null.mjs";
import { process_own_id } from "./process_own_id.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function processes_dispatcher_running() {
  "Every running process that was started by asking this repo to run a function, with the line it was started from.";
  "The line it was started from is what says so, not the folder it is working in. A process outliving the folder it was copied into is working nowhere at all, and that is exactly the one worth finding - so a search that went by folder would miss the case it was written for.";
  "Never the one asking, which is such a process too and would otherwise stand at the top of every report of its own making.";
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
    if (ours) {
      let running = {
        pid: entry,
        line,
      };
      list_add(found, running);
    }
  }
  return found;
}
