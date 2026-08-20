import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_unfinished_all_text(names) {
  "What the save-them-all button says when some of them did not get there, in the language the reader of this app reads, naming the ones that did not.";
  "The ones that did finish are not listed. What the reader needs is what is still missing, and a list of everything would bury it.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: "These did not finish: ",
      after: ". Would you like to check your connection and try them again?",
    },
    ur: {
      before: "یہ مکمل نہیں ہوئیں: ",
      after: "۔ کیا آپ اپنا کنکشن دیکھ کر انہیں دوبارہ آزمانا چاہیں گے؟",
    },
    translated_from: {
      ur: {
        before: "These did not finish: ",
        after: ". Would you like to check your connection and try them again?",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, names);
  return text;
}
