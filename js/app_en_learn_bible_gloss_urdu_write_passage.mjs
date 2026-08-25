import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
export async function app_en_learn_bible_gloss_urdu_write_passage(
  chapter_code,
  verse_key,
) {
  "Everything needed to explain one named passage's English words to an Urdu reader: its English wording, the same verses in Urdu, and the Greek behind them.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses one passage of it covers. Neither names anything that runs.";
  "The Urdu is here so the explaining can be checked rather than invented. An English word is being explained to somebody who already reads Urdu, so what that verse already says in Urdu is the words the reader will recognise, and an explanation that reaches for some other Urdu word is harder to read than the English it was explaining.";
  "The Greek is here for the same reason it is in the store: where the English wording is a choice among several the Greek allows, an explanation of the English word should not quietly promise the reader more than the Greek said.";
  "It also answers with the file to write the explanations into, because that name is a convention and a convention nobody can see is a convention nobody can follow.";
  "The passage is named rather than found, which is what lets a passage that already carries explanations be authored again - correcting one is the same work as writing it the first time, and it should not need a different door.";
  let passages = await app_en_learn_bible_gloss_urdu_passages(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  let file = gloss_write_file_path(
    chapter_code,
    verse_key,
    app_en_learn_bible_gloss_urdu_generate,
  );
  let r = {
    chapter_code,
    verse_key,
    file,
    passage,
  };
  return r;
}
