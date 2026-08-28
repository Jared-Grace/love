import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_family_file_names } from "./app_code_lesson_family_file_names.mjs";
import { function_read } from "./function_read.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_source_symbols } from "./app_code_lesson_source_symbols.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { or } from "./or.mjs";
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
  ("The telling is the lesson file itself, whatever it hands the lesson maker as its above, and the files this run spells _above and _intro. The handing over is looked for in the lesson's own source, and the two suffixes are there because most lessons keep the telling as a function inside the lesson file and reach the rest of it by calling: following that calling would need the whole family walked, and every walk tried swallowed the bank as well.");
  ("A telling that comes out with no symbols at all is left in the answer rather than dropped, because the two things it can mean are opposite. Either the lesson really shows no operator, or this could not find where its telling is - and a lesson quietly counted as clean because nothing was found to check is the one failure that would make the whole check worthless. The caller separates them and the gate says how many there are.");
  ("A title and a gate belong to neither half. A title holds a lesson's words and a gate holds the lines it refuses, and counting either as the bank would have the lesson answering for symbols it never asks anybody about.");
  let family = app_code_lesson_family_file_names(root, roots, names);
  let root_source = await function_read(root);
  let telling = [];
  let bank = [];
  for (let name of family) {
    let aside = text_ends_with_any(name, ["_title_name_id", "_gate_run"]);
    let counted = not(aside);
    if (counted) {
      let source = await function_read(name);
      let symbols = await app_code_lesson_source_symbols(source, source_names);
      let itself = equal(name, root);
      let named = text_ends_with_any(name, ["_above", "_intro"]);
      let handed = text_combine("above: ", name);
      let given = text_includes(root_source, handed);
      let right = or(named, given);
      let tells = or(itself, right);
      let side = ternary(tells, telling, bank);
      list_add_multiple(side, symbols);
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
