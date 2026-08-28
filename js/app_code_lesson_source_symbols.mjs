import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_source_literal_symbols } from "./app_code_lesson_source_literal_symbols.mjs";
import { text_includes } from "./text_includes.mjs";
import { app_code_lesson_symbol_source_symbols } from "./app_code_lesson_symbol_source_symbols.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function app_code_lesson_source_symbols(source, source_names) {
  arguments_assert(arguments, 2);
  ("every operator symbol one file of a lesson SHOWS: the ones it spells in a short quoted piece, and the ones it gets by asking a function that stands for a symbol.");
  ("The symbol-standing functions are handed in rather than found here, because the same list serves every file of every lesson and working it out again per file would run the whole repo's names past the same four tests forty times over.");
  let found = app_code_lesson_source_literal_symbols(source);
  for (let name of source_names) {
    let mentioned = text_includes(source, name);
    if (mentioned) {
      let symbols = await app_code_lesson_symbol_source_symbols(name);
      list_add_multiple(found, symbols);
    }
  }
  let unique = list_unique(found);
  return unique;
}
