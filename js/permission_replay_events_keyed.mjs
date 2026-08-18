import { bash_command_label } from "./bash_command_label.mjs";
import { command_single_is } from "./command_single_is.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function permission_replay_events_keyed(events) {
  "every shell call in a batch of transcript events, each carrying the name a rule would have to spell to cover it";
  "the key is the dispatcher function whenever the line runs one, and the command shape otherwise. a wrapper that takes a command as its own argument would otherwise pile a hundred different functions into one row wearing the wrapper's name, and that row reads as a single huge grantable shape while not one of its members is the thing to grant.";
  "a call by a tool other than the shell carries no command, and is dropped here rather than counted: the guard is only asked about shell commands, so nothing here can say whether such a call would stop the human or not.";
  let keyed = [];
  for (let event of events) {
    let command = property_get(event, "command");
    let wordless = text_empty_is(command);
    if (wordless) {
      continue;
    }
    let key = bash_command_label(command);
    let kind = "shell";
    let single = command_single_is(command);
    if (single) {
      let run_name = dispatcher_run_name(command);
      let named = text_empty_not_is(run_name);
      if (named) {
        key = run_name;
        kind = "function";
      }
    }
    let unkeyed = text_empty_is(key);
    if (unkeyed) {
      continue;
    }
    property_set(event, "replay_key", key);
    property_set(event, "kind", kind);
    list_add(keyed, event);
  }
  return keyed;
}
