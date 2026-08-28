import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_family_file_names } from "./app_code_lesson_family_file_names.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { or } from "./or.mjs";
import { app_code_lesson_source_above_text_or_null } from "./app_code_lesson_source_above_text_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { and } from "./and.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function app_code_lesson_family_telling_bank(root, roots, names) {
  arguments_assert(arguments, 3);
  ("the files of one lesson split into the two halves a learner meets them as: the TELLING, which is everything drawn on the screen before the first question, and the BANK, which is everything the questions are made out of.");
  ("Every check that holds a lesson against itself needs this same split, so it is made once here rather than once per check. What a file shows differs between checks - an operator, the shape of a line - but which side of the lesson the file is on never does.");
  ("The telling is the lesson file itself, the files this run spells _above and _intro, whatever the lesson hands its maker by name, and then everything the handed-over telling REACHES: the file it calls, the file that one calls, and so on to the end. Following the calling is what a first version left out, and leaving it out filed a card as a question: the both-sides parentheses lesson draws its flat line from a card called out of its own above, and a check fine enough to tell a bracketed line from a flat one read that card as something the learner is asked about rather than shown.");
  ("Only the handed-over telling is followed, never the whole lesson file, and that is the difference between this and the walks tried before it. A lesson makes its questions in its own body too, so a walk starting from the whole file reaches the question makers and swallows the bank - measured, it swallowed a line builder in nine lessons of thirty-two.");
  ("A file the telling reaches which the questions ALSO use is counted as telling, and that is right rather than a let-off: if the telling draws it, the learner has seen whatever it can write, whoever else asks for it.");
  ("A title and a gate belong to neither half. A title holds a lesson's words and a gate holds the lines it refuses, and counting either as the bank would have the lesson answering for something it never asks anybody about.");
  let family = app_code_lesson_family_file_names(root, roots, names);
  let source = await repo_love_function_read(root);
  let counted = [];
  for (let name of family) {
    let aside = text_ends_with_any(name, ["_title_name_id", "_gate_run"]);
    let keep = not(aside);
    if (keep) {
      list_add(counted, name);
    }
  }
  let telling = [];
  for (let name of counted) {
    let itself = equal(name, root);
    let named = text_ends_with_any(name, ["_above", "_intro"]);
    let part = text_combine("above: ", name);
    let handed = text_includes(source, part);
    let right = or(named, handed);
    let tells = or(itself, right);
    if (tells) {
      list_add(telling, name);
    }
  }
  let above_text = app_code_lesson_source_above_text_or_null(source);
  let some = null_not_is(above_text);
  if (some) {
    let front = [above_text];
    while (list_empty_not_is(front)) {
      let next = [];
      for (let text of front) {
        for (let name of counted) {
          let already = list_includes(telling, name);
          let fresh = not(already);
          let mentioned = text_includes(text, name);
          let take = and(fresh, mentioned);
          if (take) {
            list_add(telling, name);
            let reached = await repo_love_function_read(name);
            list_add(next, reached);
          }
        }
      }
      front = next;
    }
  }
  let bank = [];
  for (let name of counted) {
    let asked = list_includes_not(telling, name);
    if (asked) {
      list_add(bank, name);
    }
  }
  let r = {
    telling,
    bank,
  };
  return r;
}
