import { arguments_assert } from "./arguments_assert.mjs";
import { invoke_cache_global } from "./invoke_cache_global.mjs";
import { bible_glyph_chapter_rows_filed_uncached } from "./bible_glyph_chapter_rows_filed_uncached.mjs";
export async function bible_glyph_chapter_rows_filed(chapter_code) {
  "$plain chapter_code";
  "The interlinear words of one chapter and its testament's root table, read once and then remembered for the rest of the run.";
  "WHICH TESTAMENT, WHICH ROOT TABLE AND WHICH ROOT EACH NUMBER IS FILED UNDER ARE THREE ANSWERS NOBODY WANTS APART. A chapter code decides all three, so three separate readings had spelled the same four lines out word for word, and a fourth would have spelled them again.";
  "THE REMEMBERING BELONGS TO THE READING RATHER THAN TO THE CALLER. Every caller walks a list of entries that names the same chapter many times over, so a caller that forgets to keep the answer pays a whole chapter of interlinear for every single line it prints - and nothing anywhere goes red about it, because the answer is correct either way.";
  "THE ANSWER IS SHARED RATHER THAN COPIED, so nothing may write into it. Every reading that asks for a chapter here only looks at what comes back, and a caller that changed a word of those rows would be changing it for every later caller in the same run - which the separate readings this replaced were safe from by accident, because each of them built its own.";
  arguments_assert(arguments, 1);
  let r = await invoke_cache_global(bible_glyph_chapter_rows_filed_uncached, [
    chapter_code,
  ]);
  return r;
}
