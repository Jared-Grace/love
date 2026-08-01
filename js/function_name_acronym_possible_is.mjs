import { text_includes_not } from "./text_includes_not.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
export function function_name_acronym_possible_is(f_name) {
  "Answers whether a name could be an acronym at all - which is true only of a name holding no separator.";
  "An acronym here is the first letter of each separated part joined up, so it never holds a separator itself. A name that does hold one can therefore never be a key of the acronym map, and asking that map about it is a guaranteed miss.";
  "That miss was not free. Building the map reads every function file in every repo, which measured about 0.6 seconds, and the resolver ran it for every name it was ever handed - twice per open, since the fn that sets the current fn resolves the name again.";
  let separator = function_name_separator();
  let possible = text_includes_not(f_name, separator);
  return possible;
}
