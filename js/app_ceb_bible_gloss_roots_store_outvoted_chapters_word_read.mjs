import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { list_add } from "./list_add.mjs";
export function app_ceb_bible_gloss_roots_store_outvoted_chapters_word_read(
  said,
  known,
  chapters_touched,
  rows,
) {
  arguments_assert(arguments, 4);
  function word_read(word) {
    let places = property_get(said, word);
    let roots = [];
    function root_hold(place) {
      let root = property_get(place, "root");
      list_add_if_not_includes(roots, root);
    }
    each(places, root_hold);
    let ways = list_size(roots);
    let one = equal(ways, 1);
    if (one) {
      return;
    }
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
    let folded = gloss_word_folded(given);
    function agrees_is(root) {
      let root_folded = gloss_word_folded(root);
      let same = equal(root_folded, folded);
      return same;
    }
    let agreeing = list_filter(roots, agrees_is);
    let agreed = list_size(agreeing);
    let unsupported = equal(agreed, 0);
    if (unsupported) {
      return;
    }
    function place_read(place) {
      let root = property_get(place, "root");
      let matches = agrees_is(root);
      if (matches) {
        return;
      }
      let chapter = property_get(place, "chapter");
      let relation = gloss_root_claimed_relation(given, root);
      list_add_if_not_includes(chapters_touched, chapter);
      list_add(rows, {
        chapter: chapter,
        word: word,
        said: root,
        dictionary: given,
        relation: relation,
      });
    }
    each(places, place_read);
  }
  return word_read;
}
