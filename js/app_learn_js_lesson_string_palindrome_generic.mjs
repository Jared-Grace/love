import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_palindrome_generic(
  name_id,
  above,
  condition,
) {
  arguments_assert(arguments, 3);
  ("a lesson asking whether a word is the same backwards: let same = true; for (let i = 0; condition; i++) { if (w[i] !== w[w.length - 1 - i]) { same = false; } } console.log(same);. Shared by the two palindrome lessons of 2026-11-21, every letter (i < w.length) and the first half (i < w.length / 2), which differ only in the loop's condition and the screen above. above draws the lesson's own boxes and hands back the box the example, level, goes in.");
  ("A set is six questions: three palindromes and three words that are not, shuffled.");
  ("The wrong programs are a[a.length - i] (one past the mirror, so a palindrome says false), let same = false; (always false), same = true; inside the if (never changes, always true), and === in place of !== (false at any pair that matches).");
  function program_with(word, start, other, test_op, set_to) {
    "let w = word; let same = start; for (let i = 0; condition; i++) { if (w[i] test_op other) { same = set_to; } } console.log(same);";
    let head = [
      "let w = " + json_to(word) + ";",
      "let same = " + start + ";",
      "for (let i = 0; " + condition + "; i++) {",
      "  if (w[i] " + test_op + " " + other + ") {",
      "    same = " + set_to + ";",
    ];
    let lines = list_concat(head, ["  }", "}", "console.log(same);"]);
    let code = list_join_newline(lines);
    return code;
  }
  let mirror = "w[w.length - 1 - i]";
  function program_of(word2) {
    let code2 = program_with(word2, "true", mirror, "!==", "false");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, "true", "w[w.length - i]", "!==", "false");
    let v2 = program_with(word3, "false", mirror, "!==", "false");
    let v3 = program_with(word3, "true", mirror, "!==", "true");
    let v4 = program_with(word3, "true", mirror, "===", "false");
    let programs = [v, v2, v3, v4];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "three palindromes and three words that are not, shuffled";
    let palindromes = [
      "level",
      "noon",
      "radar",
      "kayak",
      "refer",
      "civic",
      "wow",
    ];
    let others = ["love", "peace", "joy", "hope", "faith", "kind"];
    let a = list_shuffle_take(palindromes, 3);
    let b = list_shuffle_take(others, 3);
    let taken = list_concat(a, b);
    let inputs = list_shuffle_take(taken, 6);
    return inputs;
  }
  function above_example(root, context) {
    "the lesson's own boxes, then level checked in the last of them";
    let box = above(root, context);
    let code3 = program_of("level");
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box, lines2, value);
  }
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above: above_example,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
