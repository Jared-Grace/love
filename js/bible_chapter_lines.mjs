import { fn_name } from "./fn_name.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter_verses } from "./bible_chapter_verses.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function bible_chapter_lines(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  ("$plain bible_folder");
  ("$plain chapter_code");
  ("One chapter of a bible as a line of words for each verse, in the order the verses come, with nothing saying which number each one is.");
  ("THE SAME SHAPE THE READ-ALOUD LINES ALREADY HAVE, and that is the whole reason it is worth a name of its own. That shape was reachable only for a chapter somebody had written out for reading aloud, which is a small share of the bibles here - so a caller wanting a chapter divided into verse-sized lines either had the read-aloud files or had to take the verses apart itself. This asks the ordinary reader instead, so every bible answers.");
  ("The numbers are dropped rather than written into the lines. A line's position is already which verse it is - the first line is the first verse - so a number on the line would say a second time what the order says, and a caller who wants the numbers wants the verses rather than the lines and should ask for those.");
  ("A LIST RATHER THAN ONE RUN OF TEXT WITH NEWLINES IN IT, because a list can be joined and a joined text cannot be reliably taken back apart - a verse holding a line break of its own would split into two. Whoever wants it as one text asks ",
    fn_name("list_join_newline"),
    " for that, and the splitting that would otherwise be guessed at never has to happen.");
  let verses = await bible_chapter_verses(bible_folder, chapter_code);
  let lines = list_map_property(verses, "text");
  return lines;
}
