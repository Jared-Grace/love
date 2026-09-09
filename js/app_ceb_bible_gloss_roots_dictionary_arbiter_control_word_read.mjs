import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
export function app_ceb_bible_gloss_roots_dictionary_arbiter_control_word_read(
  said,
  known,
  unanimous,
  arguing,
) {
  arguments_assert(arguments, 4);
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
  return word_read;
}
