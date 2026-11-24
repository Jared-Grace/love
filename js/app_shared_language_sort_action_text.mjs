import { app_shared_language_sort_by_name } from "./app_shared_language_sort_by_name.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_language_sort_action_text(mode) {
  "What the button that changes the order of the languages says, while the languages stand in the order named here.";
  "It says what pressing it will do, never what has already happened. A button wearing the name of the state it is in is read as a thing to press to get that state, so a reader who wants their alphabet presses the button already saying A to Z and is handed the other order - and the only way back is to press the same button again. Naming the act instead means the words on the button and the result of touching it are the same sentence.";
  "So the branch is on the order the list is in NOW, and what comes back is the order it would be in after. The two are opposites, which is why they read the wrong way round if this is ever skimmed as a status.";
  "The order by name is not called A to Z in every language, and saying it that way in Urdu would name an alphabet the reader is not looking at. What the button promises is the reader's own alphabet, in their own order, so each language says it in its own terms rather than translating a pair of English letters.";
  let right = app_shared_language_sort_by_name();
  let by_name = equal(mode, right);
  if (by_name) {
    let spoken = {
      eng: "Sort by most speakers",
      urd: "سب سے زیادہ بولنے والوں کے مطابق ترتیب دیں",
      tgl: "Ayusin ayon sa pinakamaraming nagsasalita",
      spa: "Ordenar por más hablantes",
      por: "Ordenar por mais falantes",
      translated_from: {
        urd: "Sort by most speakers",
        tgl: "Sort by most speakers",
        spa: "Sort by most speakers",
        por: "Sort by most speakers",
      },
    };
    let s = app_shared_text_reader_language(spoken);
    return s;
  }
  let alphabetical = {
    eng: "Sort A to Z",
    urd: "حروفِ تہجی کے مطابق ترتیب دیں",
    tgl: "Ayusin mula A hanggang Z",
    spa: "Ordenar de la A a la Z",
    por: "Ordenar de A a Z",
    translated_from: {
      urd: "Sort A to Z",
      tgl: "Sort A to Z",
      spa: "Sort A to Z",
      por: "Sort A to Z",
    },
  };
  let a = app_shared_text_reader_language(alphabetical);
  return a;
}
