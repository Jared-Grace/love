import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { app_shared_language_sort_by_name } from "./app_shared_language_sort_by_name.mjs";
import { equal } from "./equal.mjs";
export function app_shared_language_sort_label(mode) {
  "What the button that changes the order of the languages says it is doing, in the language the reader of this app reads.";
  "The order by name is not called A to Z in every language, and saying it that way in Urdu would name an alphabet the reader is not looking at. What the button promises is the reader's own alphabet, in their own order, so each language says it in its own terms rather than translating a pair of English letters.";
  let right = app_shared_language_sort_by_name();
  let by_name = equal(mode, right);
  if (by_name) {
    let alphabetical = {
      en: "Sorted A to Z",
      ur: "حروفِ تہجی کے مطابق ترتیب",
      translated_from: {
        ur: "Sorted A to Z",
      },
    };
    let a = app_shared_text_reader_language(alphabetical);
    return a;
  }
  let spoken = {
    en: "Sorted by most speakers",
    ur: "سب سے زیادہ بولنے والوں کے مطابق ترتیب",
    translated_from: {
      ur: "Sorted by most speakers",
    },
  };
  let s = app_shared_text_reader_language(spoken);
  return s;
}
