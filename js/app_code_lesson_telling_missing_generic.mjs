import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_family_telling_bank } from "./app_code_lesson_family_telling_bank.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_names_marks } from "./app_code_lesson_names_marks.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_unique } from "./list_unique.mjs";
export async function app_code_lesson_telling_missing_generic(
  root,
  roots,
  names,
  source_read,
) {
  arguments_assert(arguments, 4);
  ("whatever one lesson's question bank writes and its telling never shows, or null when the telling shows it all.");
  ("A learner is told one thing and then asked about another. What is held against what does not change with how finely it is being read: split the lesson into the half that tells and the half that asks, read the same mark out of every file on both sides, and report the marks the asking half writes that the telling half never wrote.");
  ("How to read a file is the one thing the caller brings, and it is the whole of the difference between the coarse reading and the fine one - operators, or the way a line is shaped. Both were once written out in full, so a lesson could be judged differently by two checks that were meant to be looking at the same two halves, and improving one of them left the other where it was.");
  ("A telling that comes out with no marks at all is left in the answer rather than dropped, because the two things it can mean are opposite. Either the lesson really shows none, or the telling was not found - and a lesson quietly counted as clean because nothing was found to check is the one failure that would make the whole check worthless. The caller separates them.");
  let sides = await app_code_lesson_family_telling_bank(root, roots, names);
  let telling_names = property_get(sides, "telling");
  let bank_names = property_get(sides, "bank");
  let telling = await app_code_lesson_names_marks(telling_names, source_read);
  let bank = await app_code_lesson_names_marks(bank_names, source_read);
  let missing = [];
  for (let mark of bank) {
    let told = list_includes_not(telling, mark);
    if (told) {
      list_add_unique(missing, mark);
    }
  }
  let none = list_empty_is(missing);
  if (none) {
    return null;
  }
  let telling_unique = list_unique(telling);
  let bank_unique = list_unique(bank);
  let report = {
    lesson: root,
    telling: telling_unique,
    bank: bank_unique,
    missing,
  };
  return report;
}
