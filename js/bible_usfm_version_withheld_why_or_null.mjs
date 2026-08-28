import { bible_folder_key } from "./bible_folder_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_get } from "./bible_usfm_version_get.mjs";
import { property_get } from "./property_get.mjs";
import { bible_versions_english_choices_withheld } from "./bible_versions_english_choices_withheld.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
export function bible_usfm_version_withheld_why_or_null(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Why one bible on the shelf is held back from readers, asked for by the short word it goes under - and nothing, when nothing is held against it.");
  ("THE SHELF AND THE LIST OF HELD-BACK TRANSLATIONS WERE WRITTEN APART AND HAD NO WAY OF MEETING, WHICH IS THE WHOLE FAULT THIS CLOSES. One of them says where a translation's files are and the other says a translation must not be put in front of anybody; the second was written first, about a bible nobody had unpacked yet, and when that bible was later put on the shelf nothing joined the two up. So the repo held the warning and handed over the words anyway.");
  ("They are joined by the publisher's folder rather than by the short word, because the folder is the only name both lists spell. The shelf's short word is ours and was invented here; the held-back list came from the reading of what eBible publishes, and knows translations by the folders they are packed in - some of which are not on this disk at all.");
  ("Nothing rather than a refusal, because being held back from readers is not the same as being unfit for every purpose. The Douay-Rheims numbers its psalms the Vulgate way and so must never answer a psalm reference, and is still a real translation somebody may deliberately want. What the caller owes a reader is to say so, which it cannot do unless it is told.");
  let record = bible_usfm_version_get(version);
  let folder = property_get(record, "folder");
  let withheld = bible_versions_english_choices_withheld();
  let why = list_find_property_get_or(
    withheld,
    bible_folder_key(),
    folder,
    "why",
    null,
  );
  return why;
}
