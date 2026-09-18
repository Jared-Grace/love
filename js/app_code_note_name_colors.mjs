import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_note_name_colors() {
  arguments_assert(arguments, 0);
  ("the colours a lesson's program lends to the names inside it, one per name, taken in the order the names are first marked in a note");
  ("EACH COLOUR IS A DIFFERENT BRIGHTNESS AS WELL AS A DIFFERENT HUE, AND THE BRIGHTNESS IS THE PART THAT MUST BE READ. A reader who cannot tell two hues apart still sees three different shades, so the pairing between a name in a note and the same name in the code reaches them too. A hue is not a slower copy of that: three shades have to be compared, three hues are known at a glance, so the reader who has both gets the faster signal and nobody is left with none.");
  ("They climb between the note's own grey and the white the code is written in, and touch neither. Darker than the note and a name would sink into the words around it; as bright as the code and it would stop being a name inside a note and start reading as a line of code. The steps are about ten of lightness apart, where two is already tellable, so the three stay apart on a phone in daylight.");
  ("Three, because three is what the cup lessons hand out. A program naming more than three gives the rest no colour at all rather than starting the list again - a colour used twice would say two different names were the same name, which is the one thing this exists to say truthfully.");
  let gold = "#f6edc2";
  let green = "#a6dcc2";
  let blue = "#9db2e2";
  let colors = [gold, green, blue];
  return colors;
}
