import { gloss_chapters_punctuation_words } from "./gloss_chapters_punctuation_words.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
export async function gloss_punctuation_words_measure() {
  "What every gloss store on the disk explains as though it were a word while it is only a mark, each store named beside the chapters at fault in it, and which stores could not be read at all.";
  "A store that came back clean is kept here rather than dropped, because the count of stores actually read is the whole of how far this answer reaches - an answer naming only the stores at fault reads the same whether it looked at three stores or at none.";
  async function store_ask(fn) {
    let offenders = await gloss_chapters_punctuation_words(fn);
    return offenders;
  }
  let r = await gloss_stores_offenders_generic(store_ask);
  return r;
}
