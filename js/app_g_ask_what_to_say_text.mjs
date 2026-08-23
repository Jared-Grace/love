import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_g_ask_what_to_say_text() {
  "What stands over the replies after the person has just declined a topic, in the language the reader of the game reads.";
  "IT ASKS ABOUT SAYING AND NOT ABOUT DOING, which is the whole of why it is not the other question. The player has just been told no, and the two things open to them are both words - taking the no gracefully, or ending the conversation - so a line offering them something to do would read as offering a way around the no.";
  let texts = {
    en: "What would you like to say?",
    ur: "آپ کیا کہنا چاہیں گے؟",
    translated_from: {
      ur: "What would you like to say?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
