import { arguments_assert } from "./arguments_assert.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { list_map } from "./list_map.mjs";
import { json_from } from "./json_from.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
export function app_code_lesson_statement_name_join_decoys(question, answer) {
  arguments_assert(arguments, 2);
  ("the tempting wrong answers for a question that joins the text two names hold: the two joined the other way round, joined with a space between them, and the answer with quotes around it");
  ("Without these the wrong answers are the other questions' answers, which each begin with a different word, so the right one is found by reading the first name's word and never working out the join. The first two here begin with the right word or hold both right words, so the whole join has to be read: which name comes first, and that a plus adds no space.");
  ("The quoted one is the mistake the lesson on joining two pieces of text already catches: quotes are how text is written in code, not part of what it holds.");
  ("The words are read off the question's quoted text, in the order the names are given them, which is the order a plus b joins them.");
  let quoted = text_regex_match(question, /"[^"]*"/g);
  let texts = list_map(quoted, json_from);
  let first = list_first(texts);
  let last = list_last(texts);
  let reversed = text_combine(last, first);
  let spaced = text_combine_multiple([first, " ", last]);
  ("An answer is what each writing-out was handed - a list of lines, each a list of values - so each wrong answer is shaped the same way: one line holding one piece of text.");
  let line = list_first(answer);
  let written = list_first(line);
  let quoted_answer = app_code_string_code(written);
  let texts_wrong = [reversed, spaced, quoted_answer];
  function logged_once(text) {
    "one writing-out of one piece of text, in the shape an answer has";
    let args = [text];
    let logs = [args];
    return logs;
  }
  let decoys = list_map(texts_wrong, logged_once);
  return decoys;
}
