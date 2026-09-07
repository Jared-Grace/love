import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_root_word_apart } from "./app_ceb_bible_gloss_root_word_apart.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { gloss_root_claimed_shape } from "./gloss_root_claimed_shape.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_root_word_apart_shaped() {
  "The words whose explanation takes them back to a root sharing nothing with them, split by whether an ordinary shape of Cebuano writing accounts for the difference - so that the pile nobody needs to read is set aside from the pile somebody does.";
  "The reading underneath says a word and its root stand apart wherever neither holds the other and they share no run of four letters, and its own prose says that answer is mostly wrong here: Cebuano drops the vowel out of a root's last syllable when a suffix goes on, so kusgan stands apart from kusog and sulugoon from sugo, both of them correct. It settles that by having somebody read the top of the list. This asks the reader of shapes instead, which was written for exactly that difference and had only ever been shown pairs of roots - two hundred and four sightings of them.";
  "★ THE ONLY THING THIS DECIDES IS WHICH PILE A WORD GOES IN, AND A NAMED SHAPE IS NOT A VERDICT THAT THE EXPLANATION IS RIGHT. A dropped vowel accounts for the spelling and says nothing about whether the root is the one this word was really built from; a made-up root that happens to differ by a vowel would be named a shape and let through. What the shape pile is worth is the other direction - it is the pile nobody needs to read, so that the pile somebody does need to read is what is left.";
  "It asks the reading underneath rather than walking the store itself, which is the difference between four hundred and two pairs and four hundred and forty-seven. Written as its own walk it kept the word as the store spells it, so Tinuod at the opening of a sentence and tinuod inside one were two pairs wherever a book happened to use both. The reading underneath lowers both halves before it gathers them, and every count here is that reading's count with a shape hung on it.";
  "The whole distribution is handed straight back for scale, because a pile of unaccounted words cannot be read without knowing how many words were looked at to find it.";
  arguments_assert(arguments, 0);
  let read = await app_ceb_bible_gloss_root_word_apart();
  let listed = property_get(read, "listed");
  let shape_words = {};
  let shape_entries = {};
  let residue = [];
  let residue_entries = 0;
  function tally(counts, name, value) {
    let before = property_get_or_null(counts, name);
    let first = null_is(before);
    if (first) {
      property_set(counts, name, value);
      return;
    }
    let after = add(before, value);
    property_set(counts, name, after);
  }
  function pair_read(pair) {
    let word = property_get(pair, "word");
    let root = property_get(pair, "root");
    let entries = property_get(pair, "entries");
    let shape = gloss_root_claimed_shape(word, root);
    let unnamed = text_empty_is(shape);
    let named_shape = shape;
    if (unnamed) {
      named_shape = "none";
    }
    property_set(pair, "shape", named_shape);
    tally(shape_words, named_shape, 1);
    tally(shape_entries, named_shape, entries);
    let unaccounted = equal(named_shape, "none");
    if (not(unaccounted)) {
      return;
    }
    list_add(residue, pair);
    residue_entries = add(residue_entries, entries);
  }
  each(listed, pair_read);
  let r = {
    naming_a_root: property_get(read, "naming_a_root"),
    relations: property_get(read, "relations"),
    apart_pairs: property_get(read, "apart_pairs"),
    shape_words,
    shape_entries,
    residue_pairs: list_size(residue),
    residue_entries,
    residue,
  };
  return r;
}
