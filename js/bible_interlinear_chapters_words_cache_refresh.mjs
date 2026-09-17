import { arguments_assert } from "./arguments_assert.mjs";
import { invoke_cache_file_refresh } from "./invoke_cache_file_refresh.mjs";
import { bible_interlinear_chapters_words } from "./bible_interlinear_chapters_words.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_interlinear_chapters_words_cache_refresh() {
  "Walks the interlinear table again and puts the answer over the kept copy on disk, handing back how many chapters it now holds.";
  "THE KEPT COPY IS NAMED BY THE FUNCTION AND NOTHING ELSE, so it does not notice when the way a verse is built changes. A fix to how the English of a verse is put together reaches no reader until this runs, and the readers built on it go on printing the old answer with nothing red.";
  "It is slow on purpose rather than by accident: the table underneath is a quarter of a gigabyte, which is why the copy is kept at all.";
  arguments_assert(arguments, 0);
  let chapters = await invoke_cache_file_refresh(
    bible_interlinear_chapters_words,
    [],
  );
  let codes = properties_get(chapters);
  let count = list_size(codes);
  return count;
}
