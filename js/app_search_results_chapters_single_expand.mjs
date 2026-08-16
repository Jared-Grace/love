import { arguments_assert } from "./arguments_assert.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { list_single } from "./list_single.mjs";
export async function app_search_results_chapters_single_expand(
  chapter_expands,
) {
  arguments_assert(arguments, 1);
  ("a book holding one chapter offers no choice of chapter, so opening the book opens that chapter with it rather than asking for a second click that could only go one way");
  let one = list_size_1(chapter_expands);
  if (not(one)) {
    return;
  }
  let only = list_single(chapter_expands);
  await only();
}
