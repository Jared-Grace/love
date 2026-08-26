import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function g_prayer_prompt() {
  "the prompt heading over the prayer choices on a prayer screen the FIRST time it is asked - what would you like to pray to God, in the language the reader of the game reads";
  "IT IS THE SAME QUESTION THE OTHER TWO ASK, a word apart - what you would like to do, what you would like to say, what you would like to pray. That is deliberate: a prayer screen is a turn like any other, and the player is the one taking it. So the Urdu is bent the same way theirs is, and a reader meets one question three times rather than three questions.";
  let texts = {
    en: "What would you like to pray to God?",
    ur: "آپ خدا سے کیا دعا کرنا چاہیں گے؟",
    translated_from: {
      ur: "What would you like to pray to God?",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
