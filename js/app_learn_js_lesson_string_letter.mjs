import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_size } from "./text_size.mjs";
import { range } from "./range.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_find } from "./list_find.mjs";
import { list_without } from "./list_without.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_string_letter() {
  arguments_assert(arguments, 0);
  ('one letter of a string read by its index: let s = "joy"; console.log(s[1]); writes out o');
  ("2026-11-13, at the human's asking: the first step of the string lessons, on the way to .includes - one letter by its index, then a loop over the letters, the index of a letter, whether a letter is there, .includes, and counting the words of an array that hold a letter");
  ("Any index from the first, since the array lessons before it already taught that counting starts at 0; the one new fact is that a string is read the same way an array is. The words are the fruits of the Spirit, as in the array lessons.");
  ("A question only asks for a letter that is in its word once, so two programs never write out the same thing: in peace, s[1] and s[4] are both e, and a wrong program in the backwards quiz would then be right too. Not picked: only love and joy, the two fruits whose letters are all different, which would give two words to learn on");
  ("A builder of its own rather than a string mode in the array index lessons' builder: that one serves ten lessons and is about arrays throughout, a name a, a head of items, i++ steps; a string lesson shares none of those but the index");
  let name = "s";
  function head_line(word) {
    let json = json_to(word);
    let line = js_code_let_statement(name, json);
    return line;
  }
  function index_line(index) {
    let json2 = json_to(index);
    let read = js_code_index(name, json2);
    let line2 = js_code_console_log_statement(read);
    return line2;
  }
  function program_head(head, index2) {
    let v = index_line(index2);
    let code = list_join_newline([head, v]);
    return code;
  }
  function indexes_of(word2) {
    let size = text_size(word2);
    let all = range(size);
    return all;
  }
  function indexes_once(word3) {
    "the indexes of the letters that are in the word only once";
    let letters = text_split_empty(word3);
    function once_is(index3) {
      let letter = list_get(letters, index3);
      function same(other) {
        let e = equal(other, letter);
        return e;
      }
      let found = list_filter(letters, same);
      let one = equal(found.length, 1);
      ("only a letter, never the - of self-control, and only among the first five, so counting to the index stays short in a first lesson; faithfulness would otherwise ask for s[9]");
      let letter_is = /[a-z]/.test(letter);
      let near = less_than(index3, 5);
      let kept_is = one && letter_is && near;
      return kept_is;
    }
    let all2 = indexes_of(word3);
    let kept = list_filter(all2, once_is);
    return kept;
  }
  function batch_get() {
    "four programs, each a word and the index of a letter in it once";
    let words = fruits_of_the_spirit();
    let codes = [];
    for (let i = 0; less_than(i, 4); i++) {
      let word4 = list_random_item(words);
      let indexes = indexes_once(word4);
      let index4 = list_random_item(indexes);
      let head2 = head_line(word4);
      let v2 = program_head(head2, index4);
      codes.push(v2);
    }
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function others(code3) {
    "the index the program asks for, and the same word with each other index";
    let lines = text_split_newline(code3);
    let head3 = list_first(lines);
    let word5 = eval_console_log_lines(head3 + "\nconsole.log(" + name + ");");
    let all3 = indexes_of(word5);
    function is_it(index5) {
      let left = program_head(head3, index5);
      let same2 = equal(left, code3);
      return same2;
    }
    let index6 = list_find(all3, is_it);
    let rest = list_without(all3, index6);
    function program_other(index7) {
      let code4 = program_head(head3, index7);
      return code4;
    }
    let programs = list_map(rest, program_other);
    let found2 = {
      index: index6,
      programs,
    };
    return found2;
  }
  function decoys(question, answer) {
    "the word's other letters - one of them the answer of counting from 1 - and the index itself; each once, never the answer";
    let got = others(question);
    let programs2 = property_get(got, "programs");
    let index8 = property_get(got, "index");
    let outs = list_map(programs2, eval_console_log_lines);
    let json3 = json_to(index8);
    let candidates = list_concat(outs, [json3]);
    let found3 = list_without(candidates, answer);
    let unique = list_unique(found3);
    return unique;
  }
  function backwards_decoys(question, answer) {
    "the same word with each other index that writes out a different letter";
    let got2 = others(answer);
    let programs3 = property_get(got2, "programs");
    let out_answer = eval_console_log_lines(answer);
    function differs(program) {
      let out2 = eval_console_log_lines(program);
      let ne = not_equal(out2, out_answer);
      return ne;
    }
    let kept2 = list_filter(programs3, differs);
    return kept2;
  }
  let example_word = "joy";
  let example_index = 1;
  function example(root) {
    "the example program and what it writes out";
    let head4 = head_line(example_word);
    let code5 = program_head(head4, example_index);
    let lines2 = text_split_newline(code5);
    let out = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines2, out);
  }
  function walk(root) {
    "the example's letters counted from 0 up to its index, then the one written out";
    let letters2 = text_split_empty(example_word);
    for (let index9 = 0; less_than_equal(index9, example_index); index9++) {
      let letter2 = list_get(letters2, index9);
      let json4 = json_to(index9);
      let written = js_code_index(name, json4);
      let item = json_to(letter2);
      app_learn_js_div_cycle_code(root, ["", written, " is ", item]);
    }
    let letter3 = list_get(letters2, example_index);
    app_learn_js_div_cycle_output(root, ["So ", letter3, " is written out"]);
  }
  function above(root) {
    "a string read as an array is, one letter at each index";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_one, [
      "A string is read like an array of its letters. Each letter has an index, counting from ",
      "0",
      ", the same as the items of an array.",
    ]);
    app_learn_js_div_cycle_code(box_one, ["", 'let s = "joy";']);
    app_learn_js_div_cycle_code(box_one, [
      "Here ",
      "s[0]",
      " is ",
      '"j"',
      ", ",
      "s[1]",
      " is ",
      '"o"',
      " and ",
      "s[2]",
      " is ",
      '"y"',
      ".",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "So here's the code to write out the second letter of a string:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "One letter of a string",
    "s[1]",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
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
