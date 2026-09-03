import { app_shared_language_sort_by_name } from "./app_shared_language_sort_by_name.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_language_sort_label(mode) {
  "What the button that changes the order of the languages says, while the languages stand in the order named here.";
  "It says what pressing it will do, never what has already happened. A button wearing the name of the state it is in is read as a thing to press to get that state, so a reader who wants their alphabet presses the button already saying A to Z and is handed the other order - and the only way back is to press the same button again. Naming the act instead means the words on the button and the result of touching it are the same sentence.";
  "So the branch is on the order the list is in NOW, and what comes back is the order it would be in after. The two are opposites, which is why they read the wrong way round if this is ever skimmed as a status.";
  "The order by name is not called A to Z in every language, and saying it that way in Urdu would name an alphabet the reader is not looking at. What the button promises is the reader's own alphabet, in their own order, so each language says it in its own terms rather than translating a pair of English letters.";
  let right = app_shared_language_sort_by_name();
  let by_name = equal(mode, right);
  if (by_name) {
    let spoken = {
      en: "Sort by most speakers",
      ur: "سب سے زیادہ بولنے والوں کے مطابق ترتیب دیں",
      translated_from: {
        ur: "Sort by most speakers",
      },
    };
    let s = app_shared_text_reader_language(spoken);
    return s;
  }
  let alphabetical = {
    en: "Sort A to Z",
    ur: "حروفِ تہجی کے مطابق ترتیب دیں",
    translated_from: {
      ur: "Sort A to Z",
    },
  };
  let a = app_shared_text_reader_language(alphabetical);
  return a;
}
