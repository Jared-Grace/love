import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_verse_next_text_get() {
  "What the button on to the verse after this one says, in the language the reader of this app reads.";
  "Its neighbour going the other way says why this is a whole phrase rather than a word beside a word. The Urdu here is the pair that proves it: the two sayings differ in their first word, and that word is chosen by the verse and not by the going-on.";
  let texts = { en: "Next verse", ur: "اگلی آیت" };
  let v = app_shared_text_reader_language(texts);
  return v;
}
