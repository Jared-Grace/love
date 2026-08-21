import { property_get_or_null } from "./property_get_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_shipped_record_checked(path, f_name_write, asked) {
  "$plain path";
  "$plain asked";
  "The bibles a record of measurements was written about, read off the file and refused unless the record is about exactly the bibles this repo ships - and the list this repo ships, alongside.";
  "Every gate reading one of these records opens the same way and has to, because a record about a different set of bibles cannot be read as saying anything about this one. A bible on the roster and missing from the record looks in every later reading like a bible with nothing wrong; a bible in the record and off the roster is an answer about something nobody can reach.";
  "The two faults are refused here rather than reported back, so that a gate asking for the record never has to remember to check it. What each gate then goes on to find in the record is its own, and that is the whole of the difference between them.";
  "What the measuring asked of each bible is a phrase the caller gives, because it is the one thing a reader of the failure needs that this cannot know: the remedy is to run the writing command, and knowing what that command goes and asks is what says whether it is the right one.";
  "WHEN THE RECORD WAS MEASURED IS HANDED BACK ALONGSIDE IT, so that a gate complaining out of it can say how old the thing it is complaining about is. A record about a server is only as true as it is recent, and a reader given the findings without the date has no way of telling a fault from a measurement taken before the fault was put right. That is not a hypothetical: seventy-seven bibles were named as holding nothing by a record that predated their upload.";
  "A record written before anything was stamped answers with nothing here rather than being refused, because the missing date is a fact about when that file was written and not a fault in it.";
  arguments_assert(arguments, 3);
  let recorded = await file_read_json(path);
  let measured_at = property_get_or_null(recorded, "measured_at");
  let bibles = property_get(recorded, "bibles");
  let shipped = ebible_bible_folders_sorted();
  let property_name = bible_folder_key();
  let measured = list_map_property(bibles, property_name);
  let unmeasured = list_difference(shipped, measured);
  let departed = list_difference(measured, shipped);
  list_empty_is_assert_json(unmeasured, {
    hint: text_combine_multiple([
      "a bible is shipped that has never been asked ",
      asked,
      " - ask them all with ",
      f_name_write,
      ", which reaches the network and rewrites the record",
    ]),
    unmeasured,
  });
  list_empty_is_assert_json(departed, {
    hint: text_combine_multiple([
      "the record holds a bible this repo no longer ships - write it again with ",
      f_name_write,
      " so what is checked is what is here",
    ]),
    departed,
  });
  let r = {
    bibles,
    shipped,
    unmeasured,
    departed,
    measured_at,
  };
  return r;
}
