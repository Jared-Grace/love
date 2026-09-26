import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_decoy_lines_each_everywhere(question, answer) {
  arguments_assert(arguments, 2);
  ("the tempting wrong answers for a screen where one name is written out more than once: each line of the right answer, standing on every line");
  ("The mistake they catch is reading a name as holding one thing for the whole program - either what it was first given, or what it ends up holding. Each is right about one writing-out and wrong about the other, so it can only be turned down by working out what the name holds at each line.");
  ("The question is not looked at. What makes these decoys is a property of the answer alone.");
  let lines = text_split_newline(answer);
  function everywhere(line) {
    "the one line of the answer, standing where each line of the answer stands";
    function this_line() {
      return line;
    }
    let repeated = list_map(lines, this_line);
    let text = list_join_newline(repeated);
    return text;
  }
  let decoys = list_map(lines, everywhere);
  return decoys;
}
