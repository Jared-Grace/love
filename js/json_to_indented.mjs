import { arguments_assert } from "./arguments_assert.mjs";
export function json_to_indented(object) {
  arguments_assert(arguments, 1);
  ("$plain object");
  ("Writes a value out as JSON a line at a time, indented, for a file a person is going to open as well as a program.");
  ("★ IT IS A SECOND ATOM RATHER THAN A SETTING ON THE PLAIN ONE, BECAUSE THE CHOICE IS ABOUT WHO OPENS THE FILE AND NOT ABOUT TASTE. A record this repo keeps for itself is written on one line on purpose - nothing reads it but code, and one line is the smaller thing to store. A file handed to a stranger is the opposite case: they open it to see what they have been given, and one line of fifteen hundred characters is a file that cannot be looked at. Two atoms let each caller say which of those it is, where one atom with a flag would let a caller forget to say.");
  ("Two spaces, because that is the indent nearly every JSON anybody has seen is written in, and an indent is only worth having if it reads as one.");
  let json = JSON.stringify(object, null, 2);
  return json;
}
