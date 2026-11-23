import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_filled } from "./app_shared_text_reader_language_filled.mjs";
export function app_shared_bible_word_google_question_text_get(
  word,
  reference,
  verse,
) {
  "$plain word";
  "$plain reference";
  "$plain verse";
  "the word is a Bible word as the reader tapped it, the reference names its verse and the verse is that verse's words; all three are only asked about.";
  "The question handed to Google about one word in one verse, in the language the reader of this app reads.";
  "THE VERSE AND ITS REFERENCE GO WITH THE WORD because a word can mean different things in different verses, and the answer wanted is what it means in this one (asked for by the human 2026-11-22).";
  arguments_assert(arguments, 3);
  let texts = {
    eng: 'Explain what the word "{word}" means in this verse: {reference} "{verse}"',
    urd: 'اس آیت میں لفظ "{word}" کا مطلب سمجھائیں: {reference} "{verse}"',
    tgl: 'Ipaliwanag kung ano ang ibig sabihin ng salitang "{word}" sa talatang ito: {reference} "{verse}"',
    translated_from: {
      urd: 'Explain what the word "{word}" means in this verse: {reference} "{verse}"',
      tgl: 'Explain what the word "{word}" means in this verse: {reference} "{verse}"',
    },
  };
  let v = app_shared_text_reader_language_filled(texts, {
    word,
    reference,
    verse,
  });
  return v;
}
