import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export function app_code_lesson_decoy_lines_reversed(question, answer) {
  arguments_assert(arguments, 2);
  ("the one tempting wrong answer for a lesson about order: the right answer with its lines the other way round");
  ("A question whose answer stands on several lines teaches two things at once - what each line says, and what order they come in. Left to itself a quiz offers the other questions' answers as the wrong ones, and those differ on their first line, so the whole question can be settled by reading one line and the order half is never asked. The reversed answer differs from the right one in nothing but its order, so it can only be turned down by reading to the end.");
  ("The question is not looked at. What makes this decoy is a property of the answer alone, and a wrong answer built from the question would be a different idea wearing the same name.");
  let lines = text_split_newline(answer);
  let reversed = list_copy_reverse(lines);
  let text = list_join_newline(reversed);
  let decoys = [text];
  return decoys;
}
