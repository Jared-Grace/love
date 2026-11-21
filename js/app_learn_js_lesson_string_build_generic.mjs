import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_string_build_program } from "./app_learn_js_string_build_program.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_string_build_generic(
  name_id,
  right,
  wrongs,
  extra,
  above,
) {
  arguments_assert(arguments, 5);
  ("a lesson on a string built one piece at a time, as in Copying a string: right is the loop taught, wrongs the loops a learner gets wrong, each {start, condition, update, added}; extra(word) gives more wrong outputs; above(root, context, program_of) draws the explanation");
  ("The words are love, joy, peace, kind and good, as in Every letter of a string, none of them the same backwards. A set is four questions, each a different word. Reading forwards, the wrong answers are what the wrong loops write out, then extra's, each kept only if it differs from the answer. Reading backwards, the wrong programs are the wrong loops.");
  let words = ["love", "joy", "peace", "kind", "good"];
  function program_way(word, way) {
    let code = app_learn_js_string_build_program(
      word,
      way.start,
      way.condition,
      way.update,
      way.added,
    );
    return code;
  }
  function program_of(word) {
    let code = program_way(word, right);
    return code;
  }
  function wrong_programs(word) {
    function lambda(way) {
      let r = program_way(word, way);
      return r;
    }
    let programs = list_map(wrongs, lambda);
    return programs;
  }
  function batch_get() {
    "four programs, each over a different word";
    let chosen = list_shuffle_take(words, 4);
    let codes = list_map(chosen, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function word_of(code) {
    "the word a holds, read off the first line: let a = \"joy\";";
    let lines = text_split_newline(code);
    let head = list_first(lines);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let word = json_from(after);
    return word;
  }
  function decoys(question, answer) {
    "what the wrong loops write out, then extra's; each once, never the answer";
    let word = word_of(question);
    let list = wrong_programs(word);
    let outputs = list_map(list, eval_console_log_lines);
    let b = extra(word);
    let all = list_concat(outputs, b);
    let found = list_without(all, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the wrong loops";
    let word = word_of(answer);
    let r2 = wrong_programs(word);
    return r2;
  }
  function above_drawn(root, context) {
    above(root, context, program_of);
  }
  let lesson = app_learn_js_lesson_code_logged({
    above: above_drawn,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
