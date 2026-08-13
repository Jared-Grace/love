import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_bibles_answered_assert(
  answered,
  write_name,
  unasked_hint,
) {
  "$plain write_name";
  "$plain unasked_hint";
  arguments_assert(arguments, 3);
  ("Refuses a record that leaves a bible this repo ships unasked, or that still holds a bible the repo no longer ships.");
  ("Every record about the bibles is written by walking the shipped list once, so it is only worth reading while it still names that same list. A bible added since is not in it and would be passed over in silence, which is the one of the two faults that reads as an answer rather than as a gap.");
  ("The reason a bible must not go unasked belongs to whoever is asking, so that half of the wording is handed in. The other half is the same wherever this is used: a record naming a bible that is gone is stale, whatever it was recording.");
  let shipped = ebible_bible_folders_sorted();
  let unasked = list_difference(shipped, answered);
  let departed = list_difference(answered, shipped);
  list_empty_is_assert_json(unasked, {
    hint: unasked_hint,
    unasked,
  });
  list_empty_is_assert_json(departed, {
    hint: text_combine_multiple([
      "the record holds a bible this repo no longer ships - write it again with ",
      write_name,
      " so what is checked is what is here",
    ]),
    departed,
  });
  let r = {
    unasked,
    departed,
  };
  return r;
}
