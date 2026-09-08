import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_get } from "./list_get.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function app_ceb_bible_gloss_roots_dictionary_arbiter_control() {
  "How often the dictionary on this disk disagrees with the Cebuano gloss store where the store never disagrees with itself, set beside how often it disagrees where the store does, so that using it to settle arguments can be priced instead of assumed.";
  "★ EVERY READING BEFORE THIS ONE USED THE DICTIONARY AS THE ARBITER AND NONE OF THEM ASKED WHETHER IT DESERVES TO BE. Two hundred and eighty-seven contradictions were called settled because the dictionary named one of the two roots, and that is only worth something if the dictionary is right about roots in general. The population that answers it is the one those readings threw away on purpose: the words every chapter already agrees on. There the store has no argument to settle, so any disagreement is the dictionary standing alone, and how often that happens is the error rate of the arbiter.";
  "A control has to be the same kind of measurement as the thing it controls or it says nothing. So the same roots are read from the same sentences by the same reader, folded the same way, and handed to the same relation reader; the only thing that changes is whether the store speaks with one voice about the word. If the two rates come out alike, the dictionary is disagreeing with the store at a rate that owes nothing to the store being wrong, and a settlement is worth much less than it looked.";
  "Apart is the number to compare and the others are not. A dictionary stopping one affix short of where an explanation went is not it being wrong, and that difference is common in both populations for reasons that have nothing to do with either side being mistaken. Two roots with nothing in common is the case where somebody has to be wrong.";
  "Measured: of 5612 words every chapter already agrees on, the dictionary stands apart from the store on 10, which is 0.178 per cent. Of the 288 words the store argues with itself about, there is not one where the dictionary is apart from every root it was given. So the arbiter that settled 287 contradictions earns it - where the store has no argument to make, the dictionary almost never picks a fight, and where the store does argue, the dictionary always lands on something related to at least one side.";
  "The two rates are not the same shape and saying so matters more than the comparison. A unanimous word has one root, so apart means that root; an arguing word has two or more, and apart here means apart from all of them, which is a harder thing to be. The 0.178 per cent is therefore a real rate and the zero is a weaker claim than it looks - it says the dictionary was never a total outsider, not that it was always right.";
  "Reading the 10 says who is wrong, and it is mostly not the store. At least five are the dictionary handing back an affixed form instead of a root: ilhon under pagailhon where the store said ila, kinatumyan under kinatumyang where it said tumoy, busgon under pagabusgon where it said busog, pinili under piniling where it said pili, pinalangga under pinalanggang. Two are the store wrong - ibt is not a word where ibot is, and sulob is not one where subo is. One is the dictionary simply elsewhere, lala against ila for pag-ila. This is the same shape as the third-root rows found earlier, and it has a cause: an entry looked up under an inflected word can answer with that word.";
  "Nothing is asked of the site and nothing is written. The dictionary answers were fetched long ago and are read off the disk.";
  "The same reader, the same folding and the same relation reader is what the control paragraph promises, and the walk over the store is now shared as well, which is the same promise kept one layer further down: the population being compared cannot differ by an accident of how the two passes were written out.";
  "The word is read off the entry with the reader that throws when it is absent, and that is this reading's own choice rather than the shared walk's: the walk hands the whole entry over precisely so that each reading keeps the reader it had.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let said = {};
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let claimed = property_get(found, "claimed");
    let count = list_size(claimed);
    let empty = equal(count, 0);
    if (empty) {
      return;
    }
    let word = property_get(entry, word_key);
    let lowered = text_lower_to(word);
    let first = list_get(claimed, 0);
    let root = text_lower_to(first);
    let roots = property_initialize_list(said, lowered);
    list_add_if_not_includes(roots, root);
  }
  await gloss_chapters_roots_claimed_entries_generic(fn, entry_read);
  let known = await binisaya_words_known();
  let said_words = object_property_names(said);
  let unanimous = {
    asked: 0,
    apart: 0,
    rows: [],
  };
  let arguing = {
    asked: 0,
    apart: 0,
    rows: [],
  };
  function word_read(word) {
    let roots = property_get(said, word);
    let held = property_get_or_null(known, word);
    let none = null_is(held);
    if (none) {
      return;
    }
    let given = property_get(held, "root");
    let bare = equal(given, "");
    if (bare) {
      return;
    }
    let ways = list_size(roots);
    let one = equal(ways, 1);
    let side = one ? unanimous : arguing;
    let left = property_get(side, "asked");
    let value = add(left, 1);
    property_set(side, "asked", value);
    function relation_of(root) {
      let relation = gloss_root_claimed_relation(given, root);
      return relation;
    }
    let relations = list_map(roots, relation_of);
    function apart_is(relation) {
      let is = equal(relation, "apart");
      return is;
    }
    let aparts = list_filter(relations, apart_is);
    let apart_count = list_size(aparts);
    let all_apart = equal(apart_count, ways);
    if (all_apart) {
      let left2 = property_get(side, "apart");
      let value2 = add(left2, 1);
      property_set(side, "apart", value2);
      let rows = property_get(side, "rows");
      list_add(rows, {
        word: word,
        roots: roots,
        dictionary: given,
      });
    }
  }
  each(said_words, word_read);
  let r = {
    unanimous_asked: property_get(unanimous, "asked"),
    unanimous_apart: property_get(unanimous, "apart"),
    arguing_asked: property_get(arguing, "asked"),
    arguing_apart: property_get(arguing, "apart"),
    unanimous_rows: property_get(unanimous, "rows"),
    arguing_rows: property_get(arguing, "rows"),
  };
  return r;
}
