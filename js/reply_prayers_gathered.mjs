import { arguments_assert } from "./arguments_assert.mjs";
import { reply_property_prayers } from "./reply_property_prayers.mjs";
import { reply_property_outputs } from "./reply_property_outputs.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { property_initialize_list_add_if_not_includes } from "./property_initialize_list_add_if_not_includes.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_prayers_gathered(rule) {
  arguments_assert(arguments, 1);
  ("A rule that reads what the given rule reads, and then takes every reply line that is a whole prayer of its own out of the reply, noting what it asks for instead, so it is prayed in the one prayer that closes the reply.");
  ("★ A REPLY WITH FOUR PRAYERS IN IT OPENED IN THE NAME OF THE FATHER FOUR TIMES AND SAID AMEN FOUR TIMES. Each rule that blesses somebody wraps its own prayer, because a rule cannot see what the others will say; only once the whole message is read can the prayers be seen side by side and joined.");
  ("A line is a whole prayer when it opens with the words every prayer opens with and closes with the words every prayer closes with, and both are asked for from the functions that write them, so a reworded opening is still recognised.");
  ("Lines that are not prayers stay exactly where they were and in the same order.");
  let name_prayers = reply_property_prayers();
  let name_outputs = reply_property_outputs();
  let start = prayer_start();
  let end = prayer_end();
  function each_reading(possibilities) {
    for (let possibility of possibilities) {
      let outputs = possibility[name_outputs];
      let kept = [];
      for (let output of outputs) {
        let opens = text_starts_with(output, start);
        let closes = text_ends_with(output, end);
        if (opens && closes) {
          let opened = text_prefix_without(output, start);
          let line = text_suffix_without(opened, end);
          property_initialize_list_add_if_not_includes(
            possibility,
            name_prayers,
            line,
          );
        } else {
          kept.push(output);
        }
      }
      possibility[name_outputs] = kept;
    }
  }
  let gathered = reply_on_match(rule, [each_reading]);
  return gathered;
}
