import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
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
    if (not(ours)) {
      continue;
    }
    ("Naming one of those scripts is not the same as running it. A shell told to run a command carries that whole command as its own line, so every wrapper around one of these reads as one - and a wrapper is not what anybody is looking for here. What is asked instead is what the process itself is: the first word of the line is the program, and the program has to be node.");
    let words = text_split_space(line);
    let program = list_first(words);
    let node_is = text_ends_with(program, "node");
    if (node_is) {
      let running = {
        pid: entry,
        line,
      };
      list_add(found, running);
    }
  }
  return found;
}
