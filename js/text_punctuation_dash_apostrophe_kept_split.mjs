import { arguments_assert } from "./arguments_assert.mjs";
import { regex_punctuation_dash_apostrophe_kept } from "./regex_punctuation_dash_apostrophe_kept.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export function text_punctuation_dash_apostrophe_kept_split(t) {
  "The words one piece of text carries, cut apart wherever punctuation stands, with a dash inside a word and an apostrophe inside a word both left where they are.";
  "This is the reader for a language that writes both marks inside its words, which Cebuano does: it spells the catch in the throat with a dash, in pag-ila and panan-awon, and joins an enclitic on with an apostrophe, in siya'y and usa'g. The two beside this one each keep one mark and cut at the other, so each of them takes one of those spellings apart.";
  "★ THE READER THAT ALREADY KEPT BOTH MARKS CUT AT SPACES ALONE, AND THAT IS NOT THE SAME THING AT ALL. Measured over the Cebuano bible, reading it that way welded 867 pairs into words nobody wrote - kalibotannga, hariug, pinulongannanagbarog - because a comma standing between two words was taken out of the middle of them rather than cut at. Keeping a mark and cutting at punctuation are separate decisions and this is the first reader in the repo to make both of them.";
  "A dash or an apostrophe left hanging at either end of a word is taken off, since there it was standing between things after all - the apostrophe there is the mark a translator opens a quotation with. Nothing empty comes back.";
  "$plain t";
  arguments_assert(arguments, 1);
  function edge_trim(part) {
    let stripped = part.replace(/^['-]+|['-]+$/g, "");
    return stripped;
  }
  let straight = t.replace(/[‘’]/g, "'");
  let r = regex_punctuation_dash_apostrophe_kept();
  let parts = straight.split(r);
  let trimmed = list_map(parts, edge_trim);
  let words = list_filter_text_empty_not_is(trimmed);
  return words;
}
