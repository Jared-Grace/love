import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_property_bible_references } from "./reply_property_bible_references.mjs";
import { reply_property_outputs } from "./reply_property_outputs.mjs";
import { reply_wrap_invoke } from "./reply_wrap_invoke.mjs";
import { reply_matches } from "./reply_matches.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { reply_bible_references_runs } from "./reply_bible_references_runs.mjs";
import { null_is } from "./null_is.mjs";
import { list_map } from "./list_map.mjs";
import { reply_bible_run_line } from "./reply_bible_run_line.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add } from "./list_add.mjs";
export function reply_bible_references_closed(rule) {
  arguments_assert(arguments, 1);
  ("A rule that reads what the given rule reads, and then opens the reply with the verses noted along the way.");
  ("★ THIS IS ITS OWN RULE AND NOT A ",
    fn_name("reply_on_match"),
    " STEP, BECAUSE IT HAS TO WAIT. ",
    fn_name("reply_on_match"),
    " does not wait for its steps, so a download started in one would finish after the reply was already handed back, with no verses in it.");
  ("★ A READING WHOSE VERSES COULD NOT BE DOWNLOADED IS DROPPED, so the message gets no reply and reaches a person. A reply without the verses would answer as if they had not been said.");
  let name = reply_property_bible_references();
  let name_outputs = reply_property_outputs();
  let closed = async function reply_bible_references_closed_matches(
    possibilities,
  ) {
    let read = await reply_wrap_invoke(rule, possibilities);
    let readings = reply_matches(read);
    let kept = [];
    for (let possibility of readings) {
      let references = property_initialize_list(possibility, name);
      if (list_empty_not_is(references)) {
        let runs = await reply_bible_references_runs(references);
        if (null_is(runs)) {
          continue;
        }
        let lines = list_map(runs, reply_bible_run_line);
        possibility[name_outputs] = list_concat(
          lines,
          possibility[name_outputs],
        );
      }
      list_add(kept, possibility);
    }
    return kept;
  };
  return closed;
}
