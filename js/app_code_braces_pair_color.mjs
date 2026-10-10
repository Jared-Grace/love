import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_pair_index } from "./app_code_braces_pair_index.mjs";
import { modulo } from "./modulo.mjs";
export function app_code_braces_pair_color(code, index, colors) {
  arguments_assert(arguments, 3);
  ("the colour the brace at index wears out of colors, one colour to a pair, taken in the order the pairs open and going round again after the last");
  let pair = app_code_braces_pair_index(code, index);
  let color = colors[modulo(pair, colors.length)];
  return color;
}
