import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_filled } from "./app_shared_text_reader_language_filled.mjs";
export function app_shared_bible_word_question_text_get(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("the word is a Bible word as the reader tapped it, and is only asked about.");
  ("The question handed to an AI about one Bible word, in the language the reader of this app reads.");
  ("IT IS ASKED IN THE READER'S LANGUAGE because an AI answers in the language it is asked in, so a reader of Urdu asking in English would be handed an answer in English.");
  let texts = {
    en: 'What does the word "{word}" mean in the Bible?',
    ur: 'بائبل میں لفظ "{word}" کا کیا مطلب ہے؟',
    tgl: 'Ano ang ibig sabihin ng salitang "{word}" sa Biblia?',
    translated_from: {
      ur: 'What does the word "{word}" mean in the Bible?',
      tgl: 'What does the word "{word}" mean in the Bible?',
    },
  };
  let v = app_shared_text_reader_language_filled(texts, {
    word,
  });
  return v;
}
