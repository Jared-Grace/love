import { invoke_cache_file_global } from "./invoke_cache_file_global.mjs";
import { wolff_words } from "./wolff_words.mjs";
export async function wolff_words_cache() {
  "Wolff's dictionary already filed under the spellings a text writes, kept on this disk so that looking a word up costs a reading rather than a parse.";
  "Taking the book apart means parsing nine megabytes of markup and walking twenty thousand entries, and it answers the same thing every time because a printed dictionary does not change. Keeping the answer is what makes a single word affordable to look up - otherwise every question about one word pays for the whole book.";
  "It is read back once a run however often it is asked for. The reading is ten megabytes, and a caller working through a list of words asks for the whole book once per word - which is the whole cost once the parse has been paid for.";
  let r = await invoke_cache_file_global(wolff_words, []);
  return r;
}
