import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_verse_previous_text_get() {
  "What the button back to the verse before this one says, in the language the reader of this app reads.";
  "The whole phrase and not a word of it. The Urdu for the one before is not the same word beside a verse as it is beside a chapter, so a reader whose language changes the word by what follows it gets the wrong one from anything assembled a word at a time, and gets it as fluent writing rather than as a fault anybody can see.";
  "No arrow in it. Which side the arrow stands on and which way it points follow the direction the reader reads in, not the language, and two things that change for different reasons cannot share one piece of writing.";
  let texts = { en: "Previous verse", ur: "پچھلی آیت" };
  let v = app_shared_text_reader_language(texts);
  return v;
}
