import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { dictionary_values } from "./dictionary_values.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { wolff_word_find } from "./wolff_word_find.mjs";
export async function wolff_binisaya_roots_agreement() {
  "How often the roots one Cebuano dictionary gives are words the other one carries - counted over every root already gathered, with a sample of the ones the second book does not answer.";
  "This is asked before anything treats a silence from the second book as a finding. A book saying nothing about a word only means something if the book usually says something, and how usually is a number nobody has. Measured high, an absence is worth looking at; measured low, an absence is the ordinary case and a check built on it would report noise as error.";
  "The roots are counted once each rather than once per word built on them, because the question is about the books and not about which root happens to be common. Counting them per word would let a handful of frequent roots decide the answer.";
  let known = await binisaya_words_known();
  let entries = dictionary_values(known);
  let roots = {};
  function root_gather(entry) {
    let analysed = property_get(entry, "analysed");
    if (not(analysed)) {
      return;
    }
    let root = property_get(entry, "root");
    let blank = text_empty_is(root);
    if (blank) {
      return;
    }
    let seen = property_exists(roots, root);
    if (seen) {
      return;
    }
    property_set(roots, root, true);
  }
  each(entries, root_gather);
  let names = [];
  function name_add(name) {
    list_add(names, name);
  }
  each(Object.keys(roots), name_add);
  async function root_find(root) {
    let answer = await wolff_word_find(root);
    let found = property_get(answer, "found");
    let carried = not(equal(found, "none"));
    let item = {
      root,
      carried,
    };
    return item;
  }
  let found = await list_map_async(names, root_find);
  let carried = list_filter_property(found, "carried", true);
  let absent = list_filter_property(found, "carried", false);
  function root_read(item) {
    let root = property_get(item, "root");
    return root;
  }
  let unanswered = list_map(list_take(absent, 40), root_read);
  let r = {
    roots: list_size(names),
    carried: list_size(carried),
    absent: list_size(absent),
    unanswered,
  };
  return r;
}
