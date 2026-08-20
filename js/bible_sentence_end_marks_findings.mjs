import { property_get } from "./property_get.mjs";
import { bible_sentence_end_marks_findings_named_wrongly } from "./bible_sentence_end_marks_findings_named_wrongly.mjs";
import { bible_sentence_end_marks_path } from "./bible_sentence_end_marks_path.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
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
  let r = bible_sentence_end_marks_findings_named_wrongly(
    recorded,
    property_name,
    shipped,
  );
  let named_wrongly = property_get(r, "named_wrongly");
  let named_unshipped = property_get(r, "named_unshipped");
  let unnamed = property_get(r, "unnamed");
  let unmeasured = property_get(r, "unmeasured");
  let departed = property_get(r, "departed");
  let unreached = property_get(r, "unreached");
  let unstored = property_get(r, "unstored");
  let unread = property_get(r, "unread");
  let ended_none = property_get(r, "ended_none");
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
