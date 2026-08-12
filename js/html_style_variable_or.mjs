import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_style_variable_or(name, value_without) {
  "the way to write a style value that asks a variable first and falls back to a plain value where nothing set one. So a part can be styled once, and still answer differently inside a container that has something to say about it.";
  arguments_assert(arguments, 2);
  let written = text_combine_multiple(["var(", name, ", ", value_without, ")"]);
  return written;
}
