import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_array_from_inputs() {
  arguments_assert(arguments, 0);
  ("six questions for a lesson that searches an array from an index: each is an array of four or five words with joy twice, and from, the index the search starts at");
  ("2026-11-22, at the human's asking, shared by Where is joy from an index? and Index of from an index. The two joys are never side by side, so from can sit between them. Three questions put from between the two joys, so the second joy is the answer; one puts it on the first joy and one on the second, so a search is seen to include where it starts; one puts it past the second joy, so the answer is -1.");
  let places_by_size = [
    [4, 0, 2],
    [4, 0, 3],
    [4, 1, 3],
    [5, 0, 2],
    [5, 0, 3],
    [5, 1, 3],
    [5, 1, 4],
    [5, 2, 4],
    [5, 0, 4],
  ];
  function input_of(kind) {
    let places = list_random_item(places_by_size);
    let size = places[0];
    let first = places[1];
    let second = places[2];
    let count = subtract(size, 2);
    let others = list_shuffle_take(
      ["love", "peace", "patience", "kindness"],
      count,
    );
    let items = [];
    let other_index = 0;
    for (let i = 0; less_than(i, size); i++) {
      if (equal(i, first) || equal(i, second)) {
        items.push("joy");
      } else {
        items.push(others[other_index]);
        other_index = other_index + 1;
      }
    }
    let from = first + 1;
    if (equal(kind, "first")) {
      from = first;
    }
    if (equal(kind, "second")) {
      from = second;
    }
    if (equal(kind, "past")) {
      from = second + 1;
    }
    let input = {
      items,
      from,
    };
    return input;
  }
  let kinds = ["between", "between", "between", "first", "second", "past"];
  let inputs = list_map(kinds, input_of);
  let shuffled = list_shuffle_take(inputs, 6);
  return shuffled;
}
