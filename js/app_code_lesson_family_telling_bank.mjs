import { app_code_lesson_family_telling_bank_itself } from "./app_code_lesson_family_telling_bank_itself.mjs";
import { app_code_lesson_family_telling_bank_asked } from "./app_code_lesson_family_telling_bank_asked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_family_file_names } from "./app_code_lesson_family_file_names.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
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
  let telling = app_code_lesson_family_telling_bank_itself(
    family,
    counted,
    root,
    source,
  );
  let bank = await app_code_lesson_family_telling_bank_asked(
    source,
    counted,
    telling,
  );
  let r = {
    telling,
    bank,
  };
  return r;
}
