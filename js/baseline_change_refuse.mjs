import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function baseline_change_refuse(
  added,
  stale,
  hint_get,
  name_write,
) {
  arguments_assert(arguments, 4);
  ("Refuse a ratchet's two ways of going wrong in one complaint: the names that newly offend, and the ones the record still holds that no longer do.");
  ("Both are said at once, and that is the whole reason they are gathered before either is spoken of. Refusing on the new names first and the left-behind ones after reads as an order of importance and is not one - it is the order the two lines happen to be written in, and it hides the second list entirely for as long as the first is not empty. A gate red about a new offense stays red for as long as somebody is busy elsewhere, and every entry that stopped offending over that stretch goes unsaid. That window is not small: one record reached twenty-nine names of which three were still true, and the twenty-six were never once printed.");
  ("What to say about the new names is worked out rather than handed over, so that a reading costing a search of the repo for each name is paid for only by a gate that is failing. A gate that passes must cost nothing beyond its own sweep, or it stops being run. Where the sentence is the same every time, a caller hands over a maker that returns it.");
  ("The two ratchets standing on this differ only in what an offense is - a name, or a function with a list of names hanging off it - and that difference is spent before they arrive here, so both hand over flat lists of names.");
  ("THE TWO SENTENCES ARE DECLARED AND THEN GATHERED, RATHER THAN ADDED ONE AT A TIME INTO A LIST MADE EMPTY, BECAUSE THE READING THAT ASKS WHETHER A GATE NAMES A BYSTANDER FOLLOWS A NAME BACKWARDS ONLY THROUGH THE LINES THAT DECLARED IT. A name put into a list by a later line is reached by nothing, so the command every ratchet spells for its caller looked, from outside, like a name spoken into the open - and twenty-nine gates were named for it at once. Built this way the whole chain from the complaint back to the command is declarations, and the reading walks it.");
  let added_any_is = list_empty_not_is(added);
  let hint_added = added_any_is ? await hint_get(added) : null;
  let stale_any_is = list_empty_not_is(stale);
  let hint_stale = stale_any_is
    ? text_combine_multiple([
        "these no longer offend - shrink the record with ",
        name_write,
        " so the same name cannot come back unnoticed",
      ])
    : null;
  let sentences_all = [hint_added, hint_stale];
  let sentences = list_filter_null_not_is(sentences_all);
  let hint = list_join_newline(sentences);
  let both = list_concat(added, stale);
  list_empty_is_assert_json(both, {
    hint,
    added,
    stale,
  });
  let r = {
    added: 0,
    stale: 0,
  };
  return r;
}
