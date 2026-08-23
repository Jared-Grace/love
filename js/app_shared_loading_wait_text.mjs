import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_loading_wait_text() {
  "The line under the spinner while an app is still coming up, in the language the reader of the game reads.";
  "IT ASKS RATHER THAN ANNOUNCES, and that is the whole difference between this and a progress figure. Nothing here can honestly say how long is left - the wait is a download over whatever connection the reader has - so what is left to say is the courteous thing, which is to ask them to stay.";
  "THE FOLDED HANDS ARE NOT IN IT. A little picture reads the same in every language and is put on afterwards, and a language written from the right hangs it on the other end by itself; written into the sentence it would have to be placed again by hand in every language, and placed wrongly in the ones nobody checked.";
  "THE STATIC SPLASH GETS THE ENGLISH AND THAT IS RIGHT RATHER THAN A SHORTFALL. That one is baked into the page while the app is being built, where there is no reader to ask, and it covers only the moment before any code has run. A reader of another language sees English for that moment and their own language the instant the app can tell.";
  let texts = {
    en: "One moment, please",
    ur: "ایک لمحہ، براہِ کرم",
    translated_from: {
      ur: "One moment, please",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
