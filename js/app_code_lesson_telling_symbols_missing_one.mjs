import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_family_file_names } from "./app_code_lesson_family_file_names.mjs";
import { function_read } from "./function_read.mjs";
import { app_code_lesson_source_symbols } from "./app_code_lesson_source_symbols.mjs";
import { equal } from "./equal.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { ternary } from "./ternary.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_unique } from "./list_unique.mjs";
export async function app_code_lesson_telling_symbols_missing_one(
  root,
  roots,
  names,
  source_names,
) {
  arguments_assert(arguments, 4);
  ("the operator symbols one lesson's question bank writes and its telling never shows, or null when the telling shows them all.");
  ("A learner is told one shape of line and then asked about another. The lesson that started this showed a bracketed comparison over on the left and asked about an unbracketed one over on the right; two more like it were found the same afternoon. A symbol is the coarsest thing that goes wrong this way and the only one a machine can hold the two halves against, so it is the thing checked: whatever the bank can write, the telling has to have shown at least once.");
  ("The telling is the file itself plus whatever it hands the lesson maker as its above, found by looking for that handing over in its own source. Naming the telling by a suffix was tried first and was wrong twice over: this run spells one _above and one _intro, and four lessons keep their telling as a function inside the lesson file where no suffix can reach it.");
  ("A title and a gate belong to neither half. A title holds a lesson's words and a gate holds the lines it refuses, and counting either as the bank would have the lesson answering for symbols it never asks anybody about.");
  let family = app_code_lesson_family_file_names(root, roots, names);
  let root_source = await function_read(root);
  let telling = await app_code_lesson_source_symbols(root_source, source_names);
  let bank = [];
  for (let name of family) {
    let itself = equal(name, root);
    let aside = text_ends_with_any(name, ["_title_name_id", "_gate_run"]);
    let counted = not(or(itself, aside));
    if (counted) {
      let source = await function_read(name);
      let symbols = await app_code_lesson_source_symbols(source, source_names);
      let handed = text_combine("above: ", name);
      let tells = text_includes(root_source, handed);
      let half = ternary(tells, telling, bank);
      list_add_multiple(half, symbols);
    }
  }
  let missing = [];
  for (let symbol of bank) {
    let told = list_includes_not(telling, symbol);
    if (told) {
      list_add_unique(missing, symbol);
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
