import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
export function app_learn_js_array_pair_sized(shape) {
  arguments_assert(arguments, 1);
  ("[a, b] from shape [size of a, size of b, how many they share]: different numbers from 1 to 9, each array shuffled");
  let size_a = shape[0];
  let size_b = shape[1];
  let shared_count = shape[2];
  let total = subtract(size_a + size_b, shared_count);
  let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], total);
  let shared = list_take(numbers, shared_count);
  let rest = list_skip(numbers, shared_count);
  let count = subtract(size_a, shared_count);
  let only_a = list_take(rest, count);
  let only_b = list_skip(rest, count);
  let a_all = list_concat(shared, only_a);
  let b_all = list_concat(shared, only_b);
  let count2 = list_size(a_all);
  let a = list_shuffle_take(a_all, count2);
  let count3 = list_size(b_all);
  let b = list_shuffle_take(b_all, count3);
  let pair = [a, b];
  return pair;
}
