import { set_includes_not } from "./set_includes_not.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
export function gloss_words_rows_names_apart(rows, common_words) {
  "Word rows split in two: the borrowed names an outside dictionary appears to have forced through Cebuano word-building, and everything a person could actually sit down and write a gloss for.";
  "Moises comes back as mo- + isi + -s, Omega as um inside ig with -a after it, Efeso as i- + peso. None of those roots exists; the site has run a Hebrew or Greek name through its machinery and reported whatever fell out. Filed among the words whose glosses say nothing about their root, hundreds of sightings of them sit on top of the list and hide the real work underneath.";
  "★ ONE TEST, AND IT IS A CLAIM ABOUT A VOCABULARY RATHER THAN ABOUT A WORD: A ROW IS A NAME WHEN ITS SMALL-LETTER SPELLING IS MET NOWHERE IN THE WORDS HANDED IN. SO WHAT IS HANDED IN DECIDES WHETHER THE TEST IS WORTH ANYTHING. Sixty-six books is a great deal of text for an ordinary word to get through without once standing in the middle of a sentence; four hundred and fifty authored chapters is not, and over that much text alone the test calls Pangumustaha a name.";
  "There were two tests here until 2026-09-06, ANDed, the second one asking whether a row's own breakdown rebuilt a different word. It was never a second opinion - it was a patch for that thin vocabulary, and once the whole bible is handed in the false positive it was patching disappears on its own, because pangumustaha is met in small letters there. What it went on costing was 27 real names it refused to let go: Jacob, Juda, Jesu, Solomon, Saulo and Tomas all rebuild correctly once u and o are treated as one letter, so nothing contradicts them and the AND kept every one of them on somebody's list of work.";
  "Measured 2026-09-06 over the 321 rows left in the Cebuano queue: 27 taken out and the queue down to 295, 25 of the 27 proper names on sight. Two of them are wrong, one sighting each - Pakiglantugi and Gitak-opan, ordinary verbs capitalised only because they open their sentences.";
  "The traffic runs both ways, and that is the price of asking a bigger vocabulary rather than a stricter question: Canaan came back onto the list, because somewhere in the sixty-six books it is spelled in small letters, and one such spelling is all it takes to un-name a word for good. So this is exposed to a single typo in the source text where the pair of tests was not. Taken deliberately, and it is why the names come back whole rather than counted: this filter takes work off a person's list and the only way to trust it is to read what it took.";
  let common_set = list_unique_set(common_words);
  function name_is(row) {
    let word = property_get(row, "word");
    let lower = text_lower_to(word);
    let never_lower = set_includes_not(common_set, lower);
    return never_lower;
  }
  let names = list_filter(rows, name_is);
  let words = list_filter_not(rows, name_is);
  let r = {
    names,
    words,
  };
  return r;
}
