import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_verse_words_none_text() {
  "What stands where one bible's words would have gone, when that bible printed no words for this verse and another bible being read did.";
  "It is short because it does not have to carry the whole story. The reader is looking at the same verse in another bible on the line above or below, with words in it, so the question the long note downstairs has to answer - is this verse missing, or is the app broken - is already answered by what is next to it.";
  "It says the bible rather than the verse is what has nothing, because that is the true part. The verse is in the Bible; these translators had nothing to put here, and a reader who reads it the other way round would come away believing scripture is missing.";
  "The words carry this on their own, before any colour does. A reader with no colour, a reader being read to out loud, and a reader who has copied the line into a message all get the whole of it from the sentence; the grey it is drawn in is a second telling for the reader who has it, and never the only one.";
  let texts = {
    en: "This bible has no words for this verse.",
    ur: "اِس بائبل میں اِس آیت کے لیے کوئی الفاظ نہیں ہیں۔",
    translated_from: {
      ur: "This bible has no words for this verse.",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
