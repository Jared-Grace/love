import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function functions_renamed_callers_left_assert(renames) {
  "Refuses to call a batch of renames finished while any function still reads one of the old names. Asked after the callers were moved, of an index read fresh: an old name has no file any more, so every place still reading it is a caller the rename stepped over, and that file no longer loads.";
  "It exists because a rename once stopped partway, after the functions moved and before their callers did, and the repo was left broken with nothing saying so. Read with the index, not the text, so a word that only spells an old name - a frozen storage key, a sentence - is not mistaken for a caller.";
  arguments_assert(arguments, 1);
  let identifiers = await data_identifiers_get();
  let left = [];
  for (let before of object_property_names(renames)) {
    if (property_exists_not(identifiers, before)) {
      continue;
    }
    let callers = property_get(identifiers, before);
    if (list_empty_is(callers)) {
      continue;
    }
    list_add(left, {
      before,
      after: property_get(renames, before),
      callers,
    });
  }
  list_empty_is_assert_json(left, {
    hint: text_combine_multiple([
      "these functions still read a name that was renamed - move each onto its new name, with ",
      fn_name("function_identifier_rename"),
    ]),
  });
  return left;
}
