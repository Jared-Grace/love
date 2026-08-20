import { property_get } from "./property_get.mjs";
import { bible_sentence_end_marks_findings_ended_none } from "./bible_sentence_end_marks_findings_ended_none.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { not } from "./not.mjs";
import { property_equals } from "./property_equals.mjs";
import { bible_folders_sentence_end_unmarked } from "./bible_folders_sentence_end_unmarked.mjs";
import { bible_sentence_end_marks_path } from "./bible_sentence_end_marks_path.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_filter } from "./list_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function bible_sentence_end_marks_findings() {
  arguments_assert(arguments, 0);
  ("Everything the record of how bibles end their sentences can be faulted for, read out of the record in one go and handed over without a word about what any of it means.");
  ("The reading and the refusing are two jobs and this is the first of them. Whoever refuses has to say seven different things to a person, each of them several lines long, and with the reading sitting above them the one function was long enough that neither half could be seen whole.");
  ("Every finding is worked out here whether or not anybody goes on to complain about it, because they are read out of one another - what is shipped and never measured, and what is measured and no longer shipped, are the same two lists compared each way round.");
  ("Nothing here reaches the network. The measuring is a command somebody runs; this only reads the file it left behind, which is what lets the checking run wherever the rest of the gates run.");
  let path = bible_sentence_end_marks_path();
  let recorded = await file_read_json(path);
  let languages = ebible_languages();
  let property_name = bible_folder_key();
  let shipped = list_map_property(languages, property_name);
  let r = bible_sentence_end_marks_findings_ended_none(
    recorded,
    property_name,
    shipped,
  );
  let ended_none = property_get(r, "ended_none");
  let unread = property_get(r, "unread");
  let stored = property_get(r, "stored");
  let unstored = property_get(r, "unstored");
  let unreached = property_get(r, "unreached");
  let departed = property_get(r, "departed");
  let unmeasured = property_get(r, "unmeasured");
  let unfindable = list_map_property(ended_none, property_name);
  let named = bible_folders_sentence_end_unmarked();
  let unnamed = list_difference(unfindable, named);
  ("A NAME FOR A BIBLE NOBODY SHIPS IS A FINDING OF ITS OWN, and it used to be told as the opposite of what it is. The list of languages that write no marks was being subtracted from the bibles read and found to write some, so anything named and not read at all fell out of that subtraction and was reported as a bible that ends its sentences after all. Thai sat there: it is named here, it is in no bible this repo ships, and whoever read the fault was told to take the name out because its readers were being denied a reading - of a bible that is not there to read.");
  ("So the naming is asked two separate questions. Does this name point at a bible we ship, and if it does, was that bible read finishing sentences. The first has no repair in common with the second: one is a name left behind by a bible that went away, and the other is a bible that changed under a name still describing how it used to read.");
  let named_unshipped = list_difference(named, shipped);
  ("Only a bible really read and really found to finish a sentence is named wrongly. Reaching it by subtraction gathered up everything not in one list - the never measured, the empty in storage, the unreadable this afternoon - and offered every one of them the same single repair.");
  function lambda7(entry) {
    let none = property_equals(entry, "ended", 0);
    let some = not(none);
    return some;
  }
  let ended_some = list_filter(stored, lambda7);
  let findable = list_map_property(ended_some, property_name);
  let named_wrongly = list_intersection(named, findable);
  let findings = {
    shipped,
    unmeasured,
    departed,
    unstored,
    unread,
    ended_none,
    unnamed,
    named_unshipped,
    named_wrongly,
    unreached,
  };
  return findings;
}
