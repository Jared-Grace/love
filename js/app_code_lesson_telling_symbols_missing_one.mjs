import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_family_telling_bank } from "./app_code_lesson_family_telling_bank.mjs";
import { property_get } from "./property_get.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
import { app_code_lesson_source_symbols } from "./app_code_lesson_source_symbols.mjs";
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
  ("Which files are the telling and which are the bank is decided in one place and asked for here, so the finer check that holds the SHAPE of a line against the telling is looking at exactly the same two halves this one holds symbols against.");
  ("A telling that comes out with no symbols at all is left in the answer rather than dropped, because the two things it can mean are opposite. Either the lesson really shows no operator, or this could not find where its telling is - and a lesson quietly counted as clean because nothing was found to check is the one failure that would make the whole check worthless. The caller separates them and the gate says how many there are.");
  let sides = await app_code_lesson_family_telling_bank(root, roots, names);
  let telling_names = property_get(sides, "telling");
  let bank_names = property_get(sides, "bank");
  let telling = [];
  for (let name of telling_names) {
    let source = await repo_love_function_read(name);
    let symbols = await app_code_lesson_source_symbols(source, source_names);
    list_add_multiple(telling, symbols);
  }
  let bank = [];
  for (let name of bank_names) {
    let source = await repo_love_function_read(name);
    let symbols = await app_code_lesson_source_symbols(source, source_names);
    list_add_multiple(bank, symbols);
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
