import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export function app_learn_js_wrong_programs_wrong_say(
  programs,
  question,
  choice,
) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output that one of the lesson's wrong programs writes out: the lines where that program differs from the one asked about, as parts that take turns between words and code. null when no wrong program writes out the pick.");
  ("2026-11-25, at the human's choosing, for the code lessons that said nothing on a wrong pick: their wrong programs already hold the mistake each wrong answer comes from, so naming the lines that differ says what was misread. Not picked: a sentence written per lesson, 52 of them, nor showing the whole wrong program, which leaves the learner to find the difference.");
  ("The difference is the run of lines left once the lines both programs start with and end with are set aside; each line is trimmed of its indent and the run joined with spaces, so it reads as one piece of code.");
  let found = null;
  for (let program of programs) {
    function output_get() {
      let out = eval_console_log_lines(program);
      return out;
    }
    let out = catch_null(output_get);
    if (equal(out, choice)) {
      found = program;
      break;
    }
  }
  if (null_is(found)) {
    return null;
  }
  let right_lines = text_split_newline(question);
  let wrong_lines = text_split_newline(found);
  let start = 0;
  while (
    less_than(start, right_lines.length) &&
    less_than(start, wrong_lines.length) &&
    equal(right_lines[start], wrong_lines[start])
  ) {
    start++;
  }
  let end_right = right_lines.length;
  let end_wrong = wrong_lines.length;
  while (
    greater_than(end_right, start) &&
    greater_than(end_wrong, start) &&
    equal(
      right_lines[subtract(end_right, 1)],
      wrong_lines[subtract(end_wrong, 1)],
    )
  ) {
    end_right--;
    end_wrong--;
  }
  function joined(lines) {
    function lambda(line) {
      let r = line.trim();
      return r;
    }
    let trimmed = lines.map(lambda);
    let text = trimmed.join(" ");
    return text;
  }
  let v = right_lines.slice(start, end_right);
  let right_part = joined(v);
  let v2 = wrong_lines.slice(start, end_wrong);
  let wrong_part = joined(v2);
  let words = "Remember: that is what it writes out ";
  if (equal(right_part, "") && equal(wrong_part, "")) {
    return null;
  }
  if (equal(right_part, "")) {
    let added = [words + "with ", wrong_part, " added"];
    return added;
  }
  if (equal(wrong_part, "")) {
    let without = [words + "without ", right_part, ""];
    return without;
  }
  let instead = [words + "with ", wrong_part, " in place of ", right_part, ""];
  return instead;
}
