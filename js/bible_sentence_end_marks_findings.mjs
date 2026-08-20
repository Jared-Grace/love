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
  ("The reading and the refusing are two jobs and this is the first of them. Whoever refuses has to say six different things to a person, each of them several lines long, and with the reading sitting above them the one function was long enough that neither half could be seen whole.");
  ("Every finding is worked out here whether or not anybody goes on to complain about it, because they are read out of one another - what is shipped and never measured, and what is measured and no longer shipped, are the same two lists compared each way round.");
  ("Nothing here reaches the network. The measuring is a command somebody runs; this only reads the file it left behind, which is what lets the checking run wherever the rest of the gates run.");
  let path = bible_sentence_end_marks_path();
  let recorded = await file_read_json(path);
  let languages = ebible_languages();
  let property_name = bible_folder_key();
  let shipped = list_map_property(languages, property_name);
  let measured = list_map_property(recorded, property_name);
  let unmeasured = list_difference(shipped, measured);
  let departed = list_difference(measured, shipped);
  ("A bible nothing could be read from is told apart from one read and found to write no marks, because only the second is a fact about a language. The first is an errand that failed - a folder named wrongly, or a chapter that is not there - and reading it as a language without sentences is exactly the mistake the first hand measurement made with Urdu.");
  function lambda4(entry) {
    let never = property_equals(entry, "unreachable", true);
    return never;
  }
  let unreached = list_filter(recorded, lambda4);
  ("A chapter the far end never answered about is taken out of the reading below rather than counted in it, because the two say opposite things and only one of them is about a bible. Nothing read because there is nothing there is a fact somebody has to decide about; nothing read because the ask failed is this run being unfinished, and the remedy is to measure again rather than to go and look at a bible.");
  function lambda(entry) {
    let never = property_equals(entry, "unreachable", true);
    if (never) {
      return false;
    }
    let none = property_equals(entry, "read", 0);
    return none;
  }
  let unread = list_filter(recorded, lambda);
  function lambda2(entry) {
    let none = property_equals(entry, "ended", 0);
    return none;
  }
  let ended_none = list_filter(recorded, lambda2);
  let unfindable = list_map_property(ended_none, property_name);
  let named = bible_folders_sentence_end_unmarked();
  let unnamed = list_difference(unfindable, named);
  let named_wrongly = list_difference(named, unfindable);
  let findings = {
    shipped,
    unmeasured,
    departed,
    unread,
    ended_none,
    unnamed,
    named_wrongly,
    unreached,
  };
  return findings;
}
