import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { text_combine } from "./text_combine.mjs";
export function giveaway_version_file_name(bible_folder, name_part, ending) {
  arguments_assert(arguments, 3);
  ("$plain bible_folder");
  ("$plain name_part");
  ("$plain ending");
  ("What one file of a whole translation is called inside its box - the translation, then which of its files this is.");
  ("★ THE TRANSLATION IS IN THE FILE NAME EVEN THOUGH THE BOX IS ALREADY NAMED AFTER IT, FOR THE SAME REASON THE PASSAGE IS. A host-built zip opens with no wrapper folder of its own, so somebody who downloads several translations and unzips them in one place would have every one of them overwrite the last. Saying the translation twice is the price of a download that survives being opened beside its neighbours.");
  ("The second word is handed in rather than listed here, because the two files a device needs to read a translation with no network are already named elsewhere in this repo - the list of which chapters exist, and every chapter in one bundle. Naming them again here would be a second place to keep in step with the first, and the thing that would drift is which file an offline reader looks for.");
  ("The translation keeps the folder name it already carries on this disk, in the lower case it already has. Nothing is converted, so a translation added later needs no second naming decision.");
  let stem = list_join_underscore([bible_folder, name_part]);
  let file_name = text_combine(stem, ending);
  return file_name;
}
