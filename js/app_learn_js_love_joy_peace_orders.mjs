import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_love_joy_peace_orders() {
  arguments_assert(arguments, 0);
  ("six lists of words from the fruits of the Spirit, three words three times and four words three times, shuffled: a set of questions for a lesson about the words of a string or an array");
  function input_sized(size) {
    let list = fruits_of_the_spirit();
    let items = list_shuffle_take(list, size);
    return items;
  }
  let inputs = list_map([3, 3, 3, 4, 4, 4], input_sized);
  let shuffled = list_shuffle_take(inputs, 6);
  return shuffled;
}
