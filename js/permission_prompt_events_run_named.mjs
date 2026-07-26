import { command_single_is } from "./command_single_is.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
export function permission_prompt_events_run_named(events) {
  "the waits that were one plain dispatcher call, each carrying the name of the function it ran";
  "these are the only interruptions a grant can answer, so they are the only ones worth counting when deciding what to grant. a wait on a chain, on a browser call or on a file tool was real and cost the human the same minute, but no rule naming a function makes it stop, and letting it into the ranking would put effort where no rule reaches.";
  "the name is added to the event rather than pulled out on its own, so the counting and worst-case machinery that already groups waits by a field can group by this one too, with nothing written twice";
  let named = [];
  for (let event of events) {
    let command = property_get(event, "command");
    let wordless = text_empty_is(command);
    if (wordless) {
      continue;
    }
    let single = command_single_is(command);
    if (not(single)) {
      continue;
    }
    let run_name = dispatcher_run_name(command);
    let nameless = text_empty_is(run_name);
    if (nameless) {
      continue;
    }
    property_set(event, "run_name", run_name);
    list_add(named, event);
  }
  return named;
}
