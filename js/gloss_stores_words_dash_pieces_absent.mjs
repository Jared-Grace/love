import { gloss_chapters_words_dash_kept_distinct } from "./gloss_chapters_words_dash_kept_distinct.mjs";
import { words_dash_pieces_absent } from "./words_dash_pieces_absent.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
export async function gloss_stores_words_dash_pieces_absent() {
  "Ask every gloss store on the roster how many of the words it explains are written with a dash inside them, and which pieces a reader that cut there would invent.";
  "★ THE POINT IS THE STORES THAT ANSWER ZERO, NOT THE ONE THAT DOES NOT. The reader that chooses per store leaves every store but the Cebuano one reading as it reads today, and that was written down as a choice rather than as a measurement. A store answering zero dashed words is that choice made safe: there is nothing there for the cutting to spoil, so nobody has to weigh what changing it would cost. A store answering more than zero is a second language waiting for the same decision, and it should be found here rather than after somebody has spent on its word lists.";
  "Every store is read the same way, with the dash kept, so the answers can be compared. That reading is not being claimed as right for any of them - it is the only reading that can see a dash at all, and a store that holds none is unaffected by which reader it is asked with.";
  "A store that is not on the disk is reported as missing rather than answered for, because these stores live on a drive that is not always mounted and an empty answer reads exactly like a store with nothing in it.";
  async function store_ask(fn) {
    let words = await gloss_chapters_words_dash_kept_distinct(fn);
    let found = words_dash_pieces_absent(words);
    return found;
  }
  let r = await gloss_stores_offenders_generic(store_ask);
  return r;
}
