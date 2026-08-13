import { binisaya_word_morphology } from "./binisaya_word_morphology.mjs";
import { binisaya_word_text } from "./binisaya_word_text.mjs";
import { object_assign } from "./object_assign.mjs";
export async function binisaya_word_read(word) {
  "Ask binisaya.com about one Cebuano word and answer with what it says the word is built from.";
  "$plain word";
  "the word is a Cebuano word being looked up. It is asked about and read; nothing here reads or writes a file, and nothing the far end answers with is run.";
  "Only the breakdown is kept and not the English meanings, because the meanings on that site read as the glosses of an English dictionary hung on a Cebuano headword - they describe the English word rather than the Cebuano one, and an explanation written from them would be about the wrong language while reading as though it were sourced. The root and the affixes are about Cebuano, and they are the half worth keeping.";
  let html = await binisaya_word_text(word);
  let morphology = await binisaya_word_morphology(html);
  let r = {
    word,
  };
  object_assign(r, morphology);
  return r;
}
