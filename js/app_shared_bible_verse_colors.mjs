import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gradient_color } from "./app_shared_gradient_color.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_interleave_halves } from "./list_interleave_halves.mjs";
export function app_shared_bible_verse_colors(entries) {
  arguments_assert(arguments, 1);
  ("$plain entries");
  ("the entries are the readings of one verse that will be stacked, one colour each. They are data to count and nothing that runs.");
  ("The colour for each reading of a verse stacked several deep, in the order they are drawn: one gradient from the brand blue to the muted slate, with the halves woven together so that two lines next to each other are never two neighbouring shades.");
  ("IT IS WRITTEN ONCE BECAUSE TWO PAGES STACK READINGS. The bible reader stacks the translations a reader picked and the picture Bible stacks the original under the English, and a reader who meets both should see the same rule telling the lines apart.");
  let count = entries.length;
  function color_get(entry, index) {
    let color = app_shared_gradient_color(index, count);
    return color;
  }
  let list = list_map_index(entries, color_get);
  let colors = list_interleave_halves(list);
  return colors;
}
