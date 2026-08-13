import { command_verbs_all } from "./command_verbs_all.mjs";
import { set_includes } from "./set_includes.mjs";
import { command_verb_shape } from "./command_verb_shape.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function permission_prompt_events_shaped(events, verbs_granted) {
  "the waits that no rule naming a function could ever answer, each carrying the verb a rule would have to name instead";
  "exactly the half its sibling throws away, and thrown away there for a good reason: a ranking meant to say which function to grant must not be filled with interruptions no function grant reaches. that reason bounds what is dropped, though, and not what it is worth. an interruption on a shell shape cost the human the same minute, and the rule that answers it is a verb rule rather than a function one - so the two halves want two reports, not one report and a silence.";
  "these are where a narrow rule sits next to a common shape that falls just outside it. a verb already granted, showing up here in numbers, is that gap being paid for over and over.";
  let shaped = [];
  for (let event of events) {
    let command = property_get(event, "command");
    let wordless = text_empty_is(command);
    if (wordless) {
      continue;
    }
    let run_name = dispatcher_run_name(command);
    let named = text_empty_is(run_name);
    if (not(named)) {
      continue;
    }
    ("the piece with no rule is what a grant would have to answer, so that is what the wait is filed under - and when every piece already has one, the leading verb is the honest label, because then nothing about the verbs explains why it stopped");
    let verbs = command_verbs_all(command);
    let shape = command_verb_shape(command);
    for (let verb of verbs) {
      let granted = set_includes(verbs_granted, verb);
      if (not(granted)) {
        shape = verb;
        break;
      }
    }
    let shapeless = text_empty_is(shape);
    if (shapeless) {
      continue;
    }
    property_set(event, "shape", shape);
    list_add(shaped, event);
  }
  return shaped;
}
