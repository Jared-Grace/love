import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_comment_note_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each is a note, and under it one line writing out what two numbers add up to");
  ("The line under the note is the plainest line a learner knows by now, so the only thing on the screen they have not read before is the note. A program doing anything newer would be asking two questions at once, and only one of them would be this lesson's.");
  ("Two of the notes say what the line below them does and two say what a note is. The pair that describe the code is what notes are for; the pair that describe themselves is the fact this screen teaches, standing in the one place it cannot be doubted - a line saying it is skipped, and the answer showing it was.");
  ("No answer is a number written in any of the programs. A question shows one program and offers the answers of all four, so a number that is an answer in one place and a written number in another can be found by looking rather than by adding, and looking is the reading this screen is trying to replace.");
  ("Four different pairs, so the four answers are four different numbers and no question ever offers the same answer twice.");
  let plus = js_operator_plus_symbol();
  let cases = [
    {
      words: "add the two numbers",
      first: 3,
      last: 4,
    },
    {
      words: "write out the answer",
      first: 2,
      last: 6,
    },
    {
      words: "the computer skips this line",
      first: 5,
      last: 6,
    },
    {
      words: "comments are for people to read",
      first: 4,
      last: 9,
    },
  ];
  function program_of(one) {
    "the two lines that write a note, and then write out what two numbers add up to";
    let words = property_get(one, "words");
    let first = property_get(one, "first");
    let last = property_get(one, "last");
    let note = js_code_comment_line(words);
    let added = js_code_binary_spaced_nb(first, plus, last);
    let logged = js_code_console_log_statement(added);
    let lines = [note, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_shuffle_take_map(cases, 4, program_of);
  return codes;
}
