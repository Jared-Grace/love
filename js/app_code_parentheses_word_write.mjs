import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_code_parentheses_word_held } from "./app_code_parentheses_word_held.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { app_code_parentheses_word_text } from "./app_code_parentheses_word_text.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_parentheses_word_write() {
  arguments_assert(arguments, 0);
  ("Writes every file of the code app out again with the word brackets replaced by the word for the round pair the app actually draws, and hands back the names it changed.");
  ("It finds its own set rather than being handed one, so it cannot be pointed at a file it should not touch and cannot drift from what is actually still spelled the old way. Run twice it changes nothing the second time, which is also how you check it did the whole job.");
  ("Which files are held back, and why each one is, is said next door rather than here, because that is the part a reader has to be able to check.");
  ("Only the code app is walked. The picture Bible writes square [ ] round a word a translator supplied and calls those brackets, correctly, so a sweep any wider than this would rename the one shape this word is still right for.");
  let f_names = await functions_names();
  let prefix = "app_code_";
  let held = app_code_parentheses_word_held();
  let changed = [];
  for (let f_name of f_names) {
    let chosen = text_starts_with(f_name, prefix);
    let holding = list_includes(held, f_name);
    let skip = not(chosen) || holding;
    if (skip) {
      continue;
    }
    let found = await function_name_to_path_unalias(f_name);
    let f_path = property_get(found, "f_path");
    let before = await file_read(f_path);
    let after = app_code_parentheses_word_text(before);
    let same = equal(before, after);
    if (same) {
      continue;
    }
    await file_overwrite_uncached(f_path, after);
    list_add(changed, f_name);
  }
  return changed;
}
