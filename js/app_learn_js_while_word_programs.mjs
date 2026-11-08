import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_while_word_programs(program_get) {
  arguments_assert(arguments, 1);
  ("three programs, running one, two and three times, each writing out a word chosen at random; program_get is given (start, bound, word) and returns the program's text");
  let fruits = fruits_of_the_spirit();
  let groups = [
    [
      [0, 1],
      [4, 5],
    ],
    [
      [0, 2],
      [3, 5],
    ],
    [
      [0, 3],
      [1, 4],
    ],
  ];
  let pairs = list_shuffle_take_map(groups, 3, list_random_item);
  function program_of(pair) {
    let first = list_get(pair, 0);
    let second = list_get(pair, 1);
    let chosen = list_random_item(fruits);
    let code = program_get(first, second, chosen);
    return code;
  }
  let codes = list_map(pairs, program_of);
  return codes;
}
