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
  "The queued words a repair cannot damage, each beside whatever roots a dictionary claims for it - the safe end of the queue, and the expensive one to write.";
  "A word is here when every sighting of it in the store is at fault, so there is no standing explanation for a repair to overwrite. That is the whole of what safe means here: it prices the damage a wrong sentence can do, and says nothing at all about how hard the right sentence is to find.";
  "★ THE ROOTS ON THESE ROWS ARE MOSTLY INVENTED, AND THE ROW DOES NOT MARK WHICH. Of thirty-four rooted words read on the ceb store, five carried a root that belongs to them; the dictionary manufactured the other twenty-nine and marked every one analysed, the same way it manufactures a decomposition for a proper name. It answers denaryo, the Roman coin, with diriyot; hades, which is Greek, with dili, the word for not; canaan with kana. An author reading a root here as a fact will write twenty-nine wrong sentences with confidence.";
  "That is not bad luck, and it is the reason to read this list rather than work down it. A word reaches this list by having every one of its sightings unexplained, and a sighting goes unexplained because the author found no root worth naming - which is the same fact as the dictionary having nothing true to say. So the rows that are cheapest to overwrite and the words the dictionary cannot help with are one set seen twice: loan words, proper names, bare prefixes, and misspellings in the Cebuano text itself.";
  "A word the dictionary takes nowhere is kept rather than dropped, and counted apart. Those five rows are the honest ones - they promise nothing - and they are no harder than the twenty-nine that promise something false.";
  "The rows are ordered by how many sightings each would mend, so the cost of an author's attention is visible even though the worth of the roots is not.";
  "Nothing is written and nothing is asked of the network. The dictionary is read as it was handed in.";
  "$plain known";
  "$plain priced";
  "the first names a gathered dictionary to read, the second the priced queue to take the lossless rows from.";
  arguments_assert(arguments, 2);
  let all = property_get(priced, "priced");
  function lossless_is(row) {
    let row_lossless = property_get(row, "lossless");
    return row_lossless;
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
