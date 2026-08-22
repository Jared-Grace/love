import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_language_write_source } from "./bible_glyph_chapters_language_write_source.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { function_source_overwrite } from "./function_source_overwrite.mjs";
import { not } from "./not.mjs";
import { function_source_new } from "./function_source_new.mjs";
export async function bible_glyph_chapters_language_write_report(
  chapters,
  bible_folder,
  written_name,
  language_word,
  language_code,
) {
  arguments_assert(arguments, 5);
  let gathered = [];
  let empty = [];
  let source = await bible_glyph_chapters_language_write_source(
    chapters,
    bible_folder,
    empty,
    gathered,
    written_name,
    language_word,
  );
  let found = await function_exists(written_name);
  let exists = property_get(found, "exists");
  if (exists) {
    await function_source_overwrite(written_name, source);
  }
  if (not(exists)) {
    await function_source_new(written_name, source);
  }
  let report = {
    language_code,
    written_name,
    bible_folder,
    written: gathered.length,
    empty,
  };
  return report;
}
