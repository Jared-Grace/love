import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { bible_glyph_chapter_tagalog_verses } from "./bible_glyph_chapter_tagalog_verses.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function bible_glyph_chapter_draft_tagalog(
  chapter_code,
  testament_name,
) {
  "$plain chapter_code";
  "$plain testament_name";
  "the code names one chapter and the testament names which root table to read it against. Both are data and neither runs.";
  "One chapter laid out for somebody about to author its TAGALOG picture line: each verse in plain Tagalog, and beside it every word of the original with the glyph the root table already seats under it.";
  "A PICTURE LINE IS NOT A TRANSLATION OF THE ENGLISH ONE AND CANNOT BE MADE BY REORDERING IT. The English line is marks interleaved into English grammar; Tagalog puts the verb first and marks its subject with ang, so the same marks in the same order read as nothing. Every picture line is authored once against the original, in the grammar of the language carrying it, exactly as the English ones were.";
  "THE GLYPHS ARE NOT THE AUTHOR'S TO CHOOSE HERE EITHER. The root table seats a picture under an original word, so the same word is drawn the same way in every chapter and in every language - which is the whole reason a reader can learn the pictures from one verse and use them in the next. What the author decides is where each picture goes in a readable Tagalog sentence, and which words Tagalog has to carry in plain words because nothing is seated under them.";
  "IT PUTS THE TAGALOG VERSE AND THE WORD TABLE SIDE BY SIDE because they answer different halves of one question. The verse says what the sentence has to mean and how Tagalog would ordinarily say it; the table says which of those words this Bible can draw. An author with only the first invents pictures the table does not have, and an author with only the second writes English word order in Tagalog words.";
  "IT IS AN AID AND NEVER A CHAPTER. Nothing here is scripture and nothing here ships. It is the table an author reads once, in one sitting, and what they write from it is the chapter.";
  "A VERSE WITH NO TAGALOG IS LEFT OUT, because the whole use of this is authoring against the Tagalog and a row without it is a row nobody can act on. It is not an error: a translation reaching only part of a chapter is ordinary, and the verses that ARE covered must stay authorable.";
  let rows = await bible_glyph_chapter_draft_words(
    chapter_code,
    testament_name,
  );
  let tagalog_verses = bible_glyph_chapter_tagalog_verses(chapter_code);
  let drafted = [];
  for (let row of rows) {
    let found = list_find_property_or_null(
      tagalog_verses,
      "verse_number",
      row.verse_number,
    );
    let missing = null_is(found);
    if (missing) {
      continue;
    }
    let entry = {
      verse_number: row.verse_number,
      tagalog: found.text,
      words: row.words,
    };
    list_add(drafted, entry);
  }
  return drafted;
}
