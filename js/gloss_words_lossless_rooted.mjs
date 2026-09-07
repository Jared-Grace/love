import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_word_root_chain } from "./gloss_word_root_chain.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function gloss_words_lossless_rooted(known, priced) {
  "The queued words a repair cannot damage, each already carrying the roots a dictionary takes it back to - the work list for an author, ready to write against.";
  "A word is here when every sighting of it in the store is at fault, so there is no standing explanation for a repair to overwrite and the only question left is what the right sentence says. That makes this the one part of the queue that needs no permission to be wrong about: the worst a wrong sentence can do is replace a sentence that was already wrong.";
  "The roots come with the row because the sentence cannot be written without them, and looking each word up separately afterwards is the reading this exists to save. A word the dictionary takes nowhere is kept rather than dropped, and counted apart: it still needs a sentence, and the author now knows before opening it that the dictionary will not help.";
  "The rows are ordered by how many sightings each fixes, so an author working down the list from the top is always writing the sentence that buys the most.";
  "Nothing is written and nothing is asked of the network. The dictionary is read as it was handed in.";
  "$plain known";
  "$plain priced";
  "the first names a gathered dictionary to read, the second the priced queue to take the lossless rows from.";
  arguments_assert(arguments, 2);
  let all = property_get(priced, "priced");
  function lossless_is(row) {
    let lossless = property_get(row, "lossless");
    return lossless;
  }
  let lossless = list_filter(all, lossless_is);
  function row_rooted(row) {
    let word = property_get(row, "word");
    let silent = property_get(row, "silent");
    let chain = gloss_word_root_chain(known, word);
    let rootless = list_empty_is(chain);
    let rooted = not(rootless);
    let root = list_last_or_null(chain);
    let sheet = {
      word,
      silent,
      rooted,
      root,
      chain,
    };
    return sheet;
  }
  let sheets = list_map(lossless, row_rooted);
  function row_silent(row) {
    let silent = property_get(row, "silent");
    return silent;
  }
  let ranked = list_sort_number_mapper_reverse(sheets, row_silent);
  let sightings_total = 0;
  let rooted_words = 0;
  function sheet_count(sheet) {
    let silent = row_silent(sheet);
    sightings_total = add(sightings_total, silent);
    let rooted = property_get(sheet, "rooted");
    if (rooted) {
      rooted_words = add(rooted_words, 1);
    }
  }
  each(ranked, sheet_count);
  let words_total = list_size(ranked);
  let rootless_words = subtract(words_total, rooted_words);
  let r = {
    words_total,
    sightings_total,
    rooted_words,
    rootless_words,
    rows: ranked,
  };
  return r;
}
