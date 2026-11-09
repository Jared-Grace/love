import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_sermons_chapters } from "./app_bible_sermons_chapters.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { app_bible_sermons_written_book_codes } from "./app_bible_sermons_written_book_codes.mjs";
import { g_sermon_write_download } from "./g_sermon_write_download.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { g_sermon_generate_download } from "./g_sermon_generate_download.mjs";
import { g_openai_split_property } from "./g_openai_split_property.mjs";
export async function app_bible_sermons_download(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a stored file and nothing that runs.");
  ("One chapter's sermon, but only when that chapter is approved. The same place holds drafts for every other chapter, and a link can name any chapter at all, so the pickers offering approved chapters alone does not keep a draft off the screen - opened with no link, the reader starts at John, and John's draft was shown.");
  ("A chapter that is not approved is refused rather than answered with nothing, because the reader above already treats a refused chapter as one nobody has written yet: the verse stays, and no sermon is laid over it.");
  let approved = await app_bible_sermons_chapters();
  let included = list_includes(approved, chapter_code);
  if (not(included)) {
    error_json({
      chapter_code,
      approved,
    });
  }
  ("Sermons come from two places. A generated one is stored as one run of text with its lines inside it; one written verse by verse in the sermon loop is stored as a list of lines, each with the words of the verse it answers. Which place is decided by the book, never by looking at what came back.");
  ("Both are handed on in the one shape the screen reads - each passage's verse numbers and its lines as plain text - so the screen draws a sermon the same way wherever it came from.");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let written = app_bible_sermons_written_book_codes();
  let written_is = list_includes(written, book_code);
  if (written_is) {
    let value = await g_sermon_write_download(chapter_code);
    let passages_written = property_get(value, "passages");
    function lambda(passage) {
      let verse_numbers = property_get(passage, "verse_numbers");
      let lines_written = property_get(passage, "lines");
      let lines = list_map_property(lines_written, "text");
      let r = {
        verse_numbers,
        lines,
      };
      return r;
    }
    let passages = list_map(passages_written, lambda);
    let r2 = {
      passages,
    };
    return r2;
  }
  let value = await g_sermon_generate_download(chapter_code);
  let passages_generated = property_get(value, "passages");
  function lambda2(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let lines = g_openai_split_property(passage, "sermon");
    let r3 = {
      verse_numbers,
      lines,
    };
    return r3;
  }
  let passages = list_map(passages_generated, lambda2);
  let r4 = {
    passages,
  };
  return r4;
}
