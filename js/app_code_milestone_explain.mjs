import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_important } from "./emoji_important.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { emoji_repeat } from "./emoji_repeat.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
export function app_code_milestone_explain() {
  arguments_assert(arguments, 0);
  ("what a milestone says to the learner, at its top and again once it is finished: why it is there and that doing it again is the point - asked for by the human 2026-10-23, in nearly these words");
  ("One statement a line and no full stops, as all text a learner reads here. Each line is a list of pieces, and a piece marked code is drawn as a code tile: if, and each brace on its own, at the human's request. The words come from the marks rather than typed, so the line cannot name code the app would not print.");
  ("An emoji leads each line, at the human's request: important for the first, repeat for the second.");
  let left = emoji_important();
  let first = text_combine_middle_space_nb(
    left,
    "Before you go on to new lessons, please practice this milestone if you need to",
  );
  let left2 = emoji_repeat();
  let second = text_combine_middle_space_nb(
    left2,
    "Do it again until programs with ",
  );
  let r = [
    [
      {
        text: first,
        code: false,
      },
    ],
    [
      {
        text: second,
        code: false,
      },
      {
        text: js_keyword_if(),
        code: true,
      },
      {
        text: " and many ",
        code: false,
      },
      {
        text: js_code_brace_left(),
        code: true,
      },
      {
        text: " ",
        code: false,
      },
      {
        text: js_code_brace_right(),
        code: true,
      },
      {
        text: " are easy for you",
        code: false,
      },
    ],
  ];
  return r;
}
