import { arguments_assert } from "./arguments_assert.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { not } from "./not.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { set_includes } from "./set_includes.mjs";
export function app_ceb_bible_gloss_roots_claimed_unvouched_split_root_read(
  piles,
  counts,
  vouched,
  known,
  vocabulary,
) {
  arguments_assert(arguments, 5);
  function pile_add(name, row) {
    property_initialize_list(piles, name);
    let held = property_get(piles, name);
    list_add(held, row);
    let was = property_get_or_null(counts, name);
    let fresh = null_is(was);
    if (fresh) {
      was = 0;
    }
    let sightings = property_get(row, "sightings");
    let value = add(was, sightings);
    property_set(counts, name, value);
  }
  function root_read(row) {
    let root = property_get(row, "stated_root");
    let folded = gloss_word_folded(root);
    let spoken_for = property_get_or_null(vouched, folded);
    let b = null_is(spoken_for);
    let stands = not(b);
    if (stands) {
      return;
    }
    let entry = binisaya_words_known_get(known, root);
    let b2 = null_is(entry);
    let asked = not(b2);
    let pile = "never_asked";
    if (asked) {
      let analysed = property_get_or_null(entry, "analysed");
      let empty = not(analysed);
      pile = "held_with_nothing";
      if (not(empty)) {
        pile = "held_and_full";
      }
    }
    let named = {
      stated_root: root,
      sightings: property_get(row, "sightings"),
      written_alone: set_includes(vocabulary, root),
      words: property_get(row, "words"),
      chapters: property_get(row, "chapters"),
      explain: property_get(row, "explain"),
    };
    pile_add(pile, named);
  }
  return root_read;
}
