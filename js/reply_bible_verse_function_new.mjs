import { reply_bible_verse_wordings } from "./reply_bible_verse_wordings.mjs";
import { equal } from "./equal.mjs";
import { reply_bible_wordings_columns } from "./reply_bible_wordings_columns.mjs";
import { reply_bible_columns_codes } from "./reply_bible_columns_codes.mjs";
import { reply_bible_verse_function_write } from "./reply_bible_verse_function_write.mjs";
export async function reply_bible_verse_function_new(
  chapter_code,
  verse_number,
) {
  "$plain chapter_code";
  "$plain verse_number";
  "Writes a first draft of the rule for one verse from its reference alone, out of the words of the English Bibles nobody owns: a sequence of what they all say, with a choice where they differ. Which shared words and phrases fit is decided afterwards by reading the draft, and that is written over the draft by hand, so a verse that already has a rule is refused rather than written again.";
  let wordings = await reply_bible_verse_wordings(chapter_code, verse_number);
  if (equal(wordings.length, 0)) {
    throw new Error(`no Bible here has ${chapter_code} ${verse_number}`);
  }
  let columns = reply_bible_wordings_columns(wordings);
  let codes = reply_bible_columns_codes(columns);
  let f_name = await reply_bible_verse_function_write(
    chapter_code,
    verse_number,
    codes,
  );
  return f_name;
}
