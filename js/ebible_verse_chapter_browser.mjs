import { verse_number_key } from "./verse_number_key.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_verse_merge } from "./ebible_verse_merge.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function ebible_verse_chapter_browser(
  bible_folder,
  chapter_code,
  verse_number,
) {
  "One verse of one bible, read out of the whole chapter rather than out of a file of its own.";
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain verse_number";
  "Every verse is stored twice: once in a file of its own, and once inside its chapter. Asking for the file of its own costs one round trip per verse, and a page here asks for a passage - forty verses in three languages is a hundred and twenty of them. The chapter holds all of those in one file, and this repo's whole-chapter reader already keeps what it reads, so the second verse of a passage and every verse after it arrives without going anywhere.";
  "It is not that the round trips were happening one after another - they go out together, and forty of them finished only a hundred and fifty milliseconds behind ten of them. What they cannot beat is one of them: the wait is what a single request costs, and asking once is the only thing that shortens it. Reading Ruth 2 forty verses at a time waited two and three quarter seconds; the chapter it was reading is one file of twelve hundred bytes.";
  "The two files say the same thing in the same words, because both are written from the same verse - the file of its own is this same merging, done at upload time. So what comes back here is what came back before, down to the shape.";
  "A bible without this verse in it still stops rather than answering, exactly as the missing file did, because finding none of something in a list is an error here. The door above this one catches that and answers nothing, and the reader that shuffles bibles retries with another - both of them were written against a throw and both still get one.";
  let verses = await ebible_verses_browser(bible_folder, chapter_code);
  let property_name = verse_number_key();
  let v = list_find_property(verses, property_name, verse_number);
  let verse = ebible_verse_merge(bible_folder, chapter_code, v);
  return verse;
}
