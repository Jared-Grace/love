import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_choices_licences } from "./ebible_versions_english_choices_licences.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
export async function ebible_versions_english_choices_reference(reference) {
  "$plain reference";
  "One passage, written the way a person writes one - 'Malachi 3:17' - read out of every complete English translation this repo may lawfully put in front of a reader, as each translation against the words it uses there.";
  "IT IS FOR CHOOSING WORDING, WHICH IS A COMPARISON AND NOT A LOOKUP. A line of a song rests on a passage, and the several translations of that passage differ in exactly the way the choice turns on - one says jewels where another says treasured possession. Read one at a time the differences are invisible, because nothing is beside anything.";
  "ONLY THE ONES WE MAY SHIP AND MAY EARN FROM. A wording that cannot be quoted is not a choice, and offering it as one only wastes the reading of whoever is choosing.";
  "A translation that does not carry the passage is left out rather than listed as empty, so what comes back is the set of real options.";
  "SEVERAL AT A TIME, because each translation that is not already on this disk has to come down, and waiting for one is no reason to stop asking for the next.";
  arguments_assert(arguments, 1);
  let licences = await ebible_versions_english_choices_licences();
  let usable = list_filter_property(licences, "commercial", true);
  async function lambda$read(record) {
    let bible_folder = property_get(record, "bible_folder");
    let texts = await ebible_folder_references_texts(bible_folder, [reference]);
    let text = property_get(texts, reference);
    let name = property_get(record, "name");
    let wording = {
      bible_folder,
      name,
      text,
    };
    return wording;
  }
  let wordings = await list_map_limited_async(usable, lambda$read, 4);
  let held = list_filter_property_not(wordings, "text", null);
  return held;
}
