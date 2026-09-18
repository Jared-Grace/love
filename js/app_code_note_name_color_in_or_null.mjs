import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_note_name_color_in_or_null(colors, names, name) {
  arguments_assert(arguments, 3);
  ("the colour a given list of colours lends to a name, taken by where that name stands in the lesson's own list of names, and nothing when the name is not one of them");
  ("THE ORDER OF THE NAMES DECIDES, AND THE LIST OF COLOURS ONLY SAYS WHAT THE ORDER LOOKS LIKE. That is what lets one name be red on a black chip and a darker red on a pale card: the same question is asked twice with a different list of colours, and both times the answer comes from the same place in the same order, so both times it is the same name being spoken about.");
  ("A name the lesson never listed gets nothing rather than a colour, because every word in a program is asked about here - console and let among them - and a colour on one of those would say it was one of the names being followed.");
  ("Asked before it is looked up, because looking up a name that is not there throws rather than answering.");
  ("NOTHING IS SAID AS A PLAIN null AND NEVER AS ",
    fn_name("null_get"),
    "(), WHICH IS NOT THE VALUE BUT A FUNCTION THAT HANDS IT OVER WHEN ASKED. Both lines were here, and a function is true, so every caller's test of the answer passed for names that had no colour at all - console and log were handed the name ink and drawn in near-black on a black chip, which is to say not drawn. Nothing threw and nothing went red; the only witness was two words missing from a picture.");
  if (list_includes_not(names, name)) {
    return null;
  }
  ("A lesson naming more than the list has colours for leaves the rest plain. Giving out a colour twice would say two names were one name, which is the one thing this exists to say truthfully.");
  let index = list_index_of(names, name);
  let count = list_size(colors);
  if (less_than(index, count)) {
    let color = colors[index];
    return color;
  }
  return null;
}
