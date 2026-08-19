import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function door43_version_chapter_codes(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("The name of every chapter a Door43 bible carries, in reading order.");
  ("Read off the chapters themselves rather than worked out beside them, so the list of chapters a reader is offered and the chapters that were actually uploaded cannot differ. A bible short of a book then offers no link to it, with nothing written down anywhere saying so.");
  let chapters = await ebible_version_chapters_cache(bible_folder);
  let chapter_codes = list_map_property(chapters, "chapter_code");
  return chapter_codes;
}
