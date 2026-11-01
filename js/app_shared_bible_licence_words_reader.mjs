import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_licence_words } from "./ebible_licence_words.mjs";
import { ebible_licence_words_unread } from "./ebible_licence_words_unread.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licence_words_reader(licence) {
  arguments_assert(arguments, 1);
  ("$plain licence");
  ("the licence is the terms a translation is offered on, as its catalogue names them. It is data to look up and nothing that runs.");
  ("The terms of a translation as the reader of this app is shown them on its card.");
  ("A LICENCE THAT WAS RECOGNISED KEEPS ITS OWN NAME IN EVERY LANGUAGE, because that name is what somebody would search for or check against, and it is written the way its holder writes it.");
  ("ONLY THE ANSWER FOR TERMS NOTHING RECOGNISED IS TRANSLATED. That one is a sentence to the reader rather than a name, so a reader of Urdu is owed it in Urdu. It is translated here and not where it is spelled, because a gate over the generated files finds the English words by matching them, and the files are written for every reader at once.");
  let words = ebible_licence_words(licence);
  let unread = ebible_licence_words_unread();
  let not_read = equal(words, unread);
  if (not_read) {
    let texts = {
      en: words,
      ur: "شرائط پڑھی نہیں گئیں",
      translated_from: {
        ur: "The terms were not read",
      },
    };
    let said = app_shared_text_reader_language(texts);
    return said;
  }
  return words;
}
