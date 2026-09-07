import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_roots_self_disagreeing } from "./app_ceb_bible_gloss_words_roots_self_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
export async function app_ceb_bible_gloss_roots_self_disagreeing_settled() {
  "The places the Cebuano gloss store gives one word two different roots, sorted by what the dictionary already sitting on this disk says about them: the ones where it names one of the two, the ones where it names a third root neither sentence gave, and the ones it has nothing to say about.";
  "★ NOTHING IS ASKED OF THE SITE HERE AND NOTHING NEEDS TO BE. The answers were fetched long ago and are held word by word; the disagreements were found without leaving the store. Setting the two against each other is a join between two things already on the disk, and it turns a pile of places needing a judgment into a much smaller pile, at the cost of one pass and no waiting at all.";
  "The three answers are different kinds of thing and are kept apart rather than counted together. Where the dictionary names one of the two roots, the disagreement is over - the other sentence is the wrong one and no judgment is needed. Where it names a third root, both sentences are wrong and the word is worse off than the disagreement suggested. Where it says nothing, the judgment is still owed to somebody.";
  "The words are folded before they are set equal, the same folding the relation reader uses, because Cebuano writes one sound two ways and matuod against matuor would otherwise read as two roots when they are one.";
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_words_roots_self_disagreeing();
  let rows = property_get(measured, "rows");
  let known = await binisaya_words_known();
  let settled = [];
  let neither = [];
  let silent = [];
  function row_read(row) {
    let word = property_get(row, "word");
    let held = property_get_or_null(known, word);
    let none = null_is(held);
    if (none) {
      list_add(silent, row);
      return;
    }
    let root = property_get(held, "root");
    let bare = equal(root, "");
    if (bare) {
      list_add(silent, row);
      return;
    }
    let folded = gloss_word_folded(root);
    let claimed = property_get(row, "roots");
    function matches_is(named) {
      let named_folded = gloss_word_folded(named);
      let same = equal(named_folded, folded);
      return same;
    }
    let hits = list_filter(claimed, matches_is);
    let count = list_size(hits);
    let missed = equal(count, 0);
    let told = {
      chapter: property_get(row, "chapter"),
      word: word,
      roots: claimed,
      dictionary: root,
    };
    if (missed) {
      list_add(neither, told);
      return;
    }
    list_add(settled, told);
  }
  each(rows, row_read);
  let r = {
    disagreeing: list_size(rows),
    settled: list_size(settled),
    neither: list_size(neither),
    silent: list_size(silent),
    settled_rows: settled,
    neither_rows: neither,
  };
  return r;
}
