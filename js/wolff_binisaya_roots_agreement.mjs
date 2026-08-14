import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
import { object_values } from "./object_values.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { wolff_word_find } from "./wolff_word_find.mjs";
export async function wolff_binisaya_roots_agreement() {
  "How often the roots one Cebuano dictionary gives are words the other one carries - counted over every root already gathered, with a sample of the ones the second book does not answer.";
  "This is asked before anything treats a silence from the second book as a finding. A book saying nothing about a word only means something if the book usually says something, and how usually is a number nobody has. Measured high, an absence is worth looking at; measured low, an absence is the ordinary case, and a check built on it would report the ordinary case as an error.";
  "The roots are counted once each rather than once per word built on them, because the question is about the two books and not about which root happens to be common. Counted per word, a handful of frequent roots would decide the answer.";
  let known = await binisaya_words_known();
  let entries = object_values(known);
  function analysed_is(entry) {
    let analysed = property_get(entry, "analysed");
    if (not(analysed)) {
      return false;
    }
    let root = property_get(entry, "root");
    let blank = text_empty_is(root);
    return not(blank);
  }
  let rooted = list_filter(entries, analysed_is);
  function root_read(entry) {
    let root = property_get(entry, "root");
    return root;
  }
  let named = list_map(rooted, root_read);
  let roots = list_unique(named);
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
  let asked = await list_map_async(roots, root_find);
  let carried = list_filter_property(asked, "carried", true);
  let absent = list_filter_property(asked, "carried", false);
  let sample = list_take(absent, 40);
  let unanswered = list_map(sample, root_read);
  let r = {
    roots: list_size(roots),
    carried: list_size(carried),
    absent: list_size(absent),
    unanswered,
  };
  return r;
}
