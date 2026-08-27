import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { add } from "./add.mjs";
import { text_replace } from "./text_replace.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_word_draw(chapter_code, word, glyph) {
  "$plain chapter_code";
  "the code names one already-authored picture chapter to edit. It names a stretch of text and nothing that runs.";
  "$plain word";
  "the English word standing in the chapter that is to become a mark. It is matched as letters inside a quoted token and nothing runs it.";
  "$plain glyph";
  "the name of the glyph to draw it as. It is written into the file as a dollar token and nothing runs it.";
  arguments_assert(arguments, 3);
  ("Draws one English word of one already-authored picture chapter as a mark, everywhere that word stands alone as a token, keeping whatever punctuation was attached to it.");
  ("IT EXISTS BECAUSE A MARK IS USUALLY SEATED AFTER THE CHAPTERS ARE WRITTEN. Seating a root is three small edits to three tables, and the moment they land every chapter already authored is out of date: the word the reader could now be shown a picture for is still standing in letters, in as many places as it was ever written. Doing that by hand is one edit repeated once per occurrence, which is the shape of a missing command rather than of a job.");
  ("IT IS SCOPED TO ONE CHAPTER ON PURPOSE AND MUST STAY THAT WAY. English translates several Greek and Hebrew roots with one word - sent is apostello in one verse and pempo in the next - and one sequence may not have many roots. A sweep over every chapter at once would give the second root the first one's mark without anybody reading a line of the original. Naming the chapter forces the author to have checked that chapter's own original first.");
  ("THE COUNT IS THE ANSWER AND NOT THE FILE SIZE, because the author already knows how many occurrences the original has and is checking this against that number. A count one short means a token this did not match - a capital at the start of a sentence, or a word carrying punctuation nothing here lists - and a count one long means the English word is standing for something else somewhere in the chapter.");
  ("RUNNING IT TWICE CHANGES NOTHING, because after the first run no token spells the word any more. That is what makes it safe to run on a chapter nobody is sure about.");
  let punctuations = ["", ".", ",", ";", ":", "!", "?"];
  let f_name = "bible_glyph_chapter_" + text_lower_to(chapter_code);
  let f_path = function_name_to_path_absolute(f_name);
  let before = await file_read(f_path);
  let after = before;
  let drawn = 0;
  for (let mark of punctuations) {
    let from = '"' + word + mark + '",';
    let to = '"$' + glyph + mark + '",';
    let count = text_occurrences_count(after, from);
    drawn = add(drawn, count);
    after = text_replace(after, from, to);
  }
  await file_overwrite(f_path, after);
  let report = {
    chapter_code,
    word,
    glyph,
    f_name,
    drawn,
  };
  return report;
}
