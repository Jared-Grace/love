import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";

export function eval_console_log_lines(code) {
  arguments_assert(arguments, 1);
  (
    "what a program wrote out, as the text a person would see it as: one line for every line that wrote something, in the order they ran"
  );
  (
    "Its twin hands back a list of what each writing-out was given, which is the honest shape of the thing and the wrong shape to show anybody. A list of lists drawn on a screen arrives as its commas, so a program writing out two numbers reads as one answer with a comma in it rather than as two answers, and a learner is being shown a thing the machine never did."
  );
  (
    "One writing-out given several things is joined by a space, because that is what a real console puts between them. A program in these lessons hands over one thing at a time, so today the space is never reached; it is here because the alternative is a join that is right only while nobody writes the line that needs it."
  );
  let logs = eval_console_log_to_list(code);
  let lines = list_map(logs, list_join_space);
  let text = list_join_newline(lines);
  return text;
}
