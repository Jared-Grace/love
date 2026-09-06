import { list_includes_not } from "./list_includes_not.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { binisaya_analysis_word_contradicted_is } from "./binisaya_analysis_word_contradicted_is.mjs";
import { and } from "./and.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
export function gloss_words_rows_names_apart(rows, spelled) {
  "Word rows split in two: the borrowed names an outside dictionary appears to have forced through Cebuano word-building, and everything a person could actually sit down and write a gloss for.";
  "Moises comes back as mo- + isi + -s, Omega as um inside ig with -a after it, Efeso as i- + peso. None of those roots exists; the site has run a Hebrew or Greek name through its machinery and reported whatever fell out. Filed among the words whose glosses say nothing about their root, hundreds of sightings of them sit on top of the list and hide the real work underneath.";
  "Two tests, and a row is a name only when both say so, because each one alone is wrong on cases already known. Never met in lower case anywhere in the store catches every name, and also drops Ginoong, Pangumustaha and Kaloy-i, which are capitalised only because of where they stand in a sentence. Its own breakdown rebuilding a different word drops Moises and Omega and Efeso, and also drops denaryo, diosnon, higera and alawiton, whose breakdowns are simply lossy. Together, each covers the other's mistake: a word met in lower case is protected whatever its breakdown says, and a word whose breakdown rebuilds it is protected however it is capitalised.";
  "Measured over 388 words: 47 taken out, every one of them a borrowed name, and not one ordinary word among them. It is deliberately the strict side of the trade - Jacob, Saulo, Solomon and Juda stay in, because their breakdowns rebuild them and this refuses to drop what it cannot show.";
  function name_is(row) {
    let word = property_get(row, "word");
    let lower = text_lower_to(word);
    let never_lower = list_includes_not(spelled, lower);
    let root = property_get(row, "root");
    let affixes = property_get(row, "affixes");
    let contradicted = binisaya_analysis_word_contradicted_is(
      word,
      root,
      affixes,
    );
    let both = and(never_lower, contradicted);
    return both;
  }
  let names = list_filter(rows, name_is);
  let words = list_filter_not(rows, name_is);
  let r = {
    names,
    words,
  };
  return r;
}
