import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_contact_prompt_text() {
  "What the panel for writing to the developer asks above the box, in the language the reader of this app reads.";
  "It asks rather than instructs, because nobody owes the developer a message and a reader who has nothing to say should be able to see that they may simply close it.";
  "The urdu says the one who made this rather than borrowing the english word for that trade. A reader learning english from this app is exactly the reader who would not yet know it.";
  arguments_assert(arguments, 0);
  let texts = {
    en: "Is there anything you would like to tell the developer?",
    ur: "کیا آپ اسے بنانے والے کو کچھ بتانا چاہیں گے؟",
    translated_from: {
      ur: "Is there anything you would like to tell the developer?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
