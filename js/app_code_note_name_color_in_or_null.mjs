import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { null_get } from "./null_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_note_name_color_in_or_null(colors, names, name) {
  arguments_assert(arguments, 3);
  ("the colour a given list of colours lends to a name, taken by where that name stands in the lesson's own list of names, and nothing when the name is not one of them");
  ("THE ORDER OF THE NAMES DECIDES, AND THE LIST OF COLOURS ONLY SAYS WHAT THE ORDER LOOKS LIKE. That is what lets one name be red on a black chip and a darker red on a pale card: the same question is asked twice with a different list of colours, and both times the answer comes from the same place in the same order, so both times it is the same name being spoken about.");
  ("A name the lesson never listed gets nothing rather than a colour, because every word in a program is asked about here - console and let among them - and a colour on one of those would say it was one of the names being followed.");
  ("Asked before it is looked up, because looking up a name that is not there throws rather than answering.");
  if (list_includes_not(names, name)) {
    let nothing = null_get();
    return nothing;
  }
  ("A lesson naming more than the list has colours for leaves the rest plain. Giving out a colour twice would say two names were one name, which is the one thing this exists to say truthfully.");
  let index = list_index_of(names, name);
  let count = list_size(colors);
  if (less_than(index, count)) {
    let color = colors[index];
    return color;
  }
  let nothing2 = null_get();
  return nothing2;
}
