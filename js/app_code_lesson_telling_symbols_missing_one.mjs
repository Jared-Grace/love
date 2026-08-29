import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_source_symbols } from "./app_code_lesson_source_symbols.mjs";
import { app_code_lesson_telling_missing_generic } from "./app_code_lesson_telling_missing_generic.mjs";
export async function app_code_lesson_telling_symbols_missing_one(
  root,
  roots,
  names,
  source_names,
) {
  arguments_assert(arguments, 4);
  ("the operator symbols one lesson's question bank writes and its telling never shows, or null when the telling shows them all.");
  ("A learner is told one shape of line and then asked about another. The lesson that started this showed a bracketed comparison over on the left and asked about an unbracketed one over on the right; two more like it were found the same afternoon. A symbol is the coarsest thing that goes wrong this way and the only one a machine can hold the two halves against, so it is the thing checked: whatever the bank can write, the telling has to have shown at least once.");
  ("Which files are the telling and which are the bank is decided in one place, and the holding of one against the other is done in one place too, so the finer check that holds the SHAPE of a line against the telling is looking at exactly the same two halves this one holds symbols against.");
  async function source_symbols_read(source) {
    let symbols = await app_code_lesson_source_symbols(source, source_names);
    return symbols;
  }
  let report = await app_code_lesson_telling_missing_generic(
    root,
    roots,
    names,
    source_symbols_read,
  );
  return report;
}
