import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_array_pairs_overlap() {
  arguments_assert(arguments, 0);
  ("six inputs [a, b] for the lessons that ask one array whether it holds the items of another: a and b each four or five different numbers from 1 to 9, sharing some but not all, so a has items b does not, b has items a does not, and some items are in both. Every wrong program of In both, In a, not in b and In either then writes out something other than the answer, with no input tried again.");
  function pair_sized(shape) {
    "[size of a, size of b, how many they share], each array shuffled";
    let size_a = shape[0];
    let size_b = shape[1];
    let shared_count = shape[2];
    let total = subtract(size_a + size_b, shared_count);
    let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], total);
    let shared = list_take(numbers, shared_count);
    let rest = list_skip(numbers, shared_count);
    let count = subtract(size_a, shared_count);
    let only_a = list_take(rest, count);
    let skip_count = subtract(size_a, shared_count);
    let only_b = list_skip(rest, skip_count);
    let a_all = list_concat(shared, only_a);
    let b_all = list_concat(shared, only_b);
    let count2 = list_size(a_all);
    let a = list_shuffle_take(a_all, count2);
    let count3 = list_size(b_all);
    let b = list_shuffle_take(b_all, count3);
    let pair = [a, b];
    return pair;
  }
  let shapes = [
    [4, 4, 2],
    [4, 5, 2],
    [5, 4, 2],
    [4, 4, 1],
    [5, 5, 3],
    [4, 4, 3],
  ];
  let pairs = list_map(shapes, pair_sized);
  let shuffled = list_shuffle_take(pairs, 6);
  return shuffled;
}
