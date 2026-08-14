import { list_slice_count } from "./list_slice_count.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { add } from "./add.mjs";
export function text_roots_unjoined_tails(unjoined) {
  "The near misses gathered by the letters that separate them - how many pairs each tail accounts for, and a few of the words it accounts for them with.";
  "A list of pairs says which words missed each other; this says WHY, and it is the one of the two worth acting on. Ninety pairs parting on ness is one ending to write down. Ninety pairs parting on ninety different tails is a dictionary, and the answer there is to add nothing.";
  "The examples are carried because a tail alone cannot be judged. Ness looks safe until witness is the word it would cut, and only a word can show that.";
  let counts = {};
  let examples = {};
  let pairs = property_get(unjoined, "pairs");
  function pair_take(pair) {
    let shorter = property_get(pair, "shorter");
    let longer = property_get(pair, "longer");
    let tail = longer.slice(shorter.length);
    if (not(tail in counts)) {
      counts[tail] = 0;
      examples[tail] = [];
    }
    counts[tail] = add(counts[tail], 1);
    let left = add(shorter, " ");
    let item = add(left, longer);
    list_add(examples[tail], item);
  }
  pairs.forEach(pair_take);
  function tail_read(tail) {
    let r = {
      tail,
      count: counts[tail],
      examples: list_slice_count(examples[tail], 0, 4),
    };
    return r;
  }
  let list = object_property_names(counts);
  let read = list_map(list, tail_read);
  function count_of(row) {
    let r2 = -row.count;
    return r2;
  }
  let sorted = list_sort_number_mapper(read, count_of);
  return sorted;
}
