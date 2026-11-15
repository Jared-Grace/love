import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function eval_console_log_lines(code) {
  arguments_assert(arguments, 1);
  ("what a program wrote out, as the text a person would see it as: one line for every line that wrote something, in the order they ran");
  ("Its twin hands back a list of what each writing-out was given, which is the honest shape of the thing and the wrong shape to show anybody. A list of lists drawn on a screen arrives as its commas, so a program writing out two numbers reads as one answer with a comma in it rather than as two answers, and a learner is being shown a thing the machine never did.");
  ("One writing-out given several things is joined by a space, because that is what a real console puts between them. A program in these lessons hands over one thing at a time, so today the space is never reached; it is here because the alternative is a join that is right only while nobody writes the line that needs it.");
  ("2026-11-15, for the lesson on reading past the end of an array: each thing written out is made text before the join, because a join writes undefined and null as nothing, where a real console writes the words undefined and null. Every other value already joined as its own text, so only those two change.");
  let logs = eval_console_log_to_list(code);
  function line_of(log) {
    let texts = list_map(log, String);
    let line = list_join_space(texts);
    return line;
  }
  let lines = list_map(logs, line_of);
  let text = list_join_newline(lines);
  return text;
}
