import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_verses } from "./bible_chapter_verses.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { facebook_bible_chapter_name } from "./facebook_bible_chapter_name.mjs";
export async function facebook_bible_chapter_post_text(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("The words of a facebook post for one chapter of the Berean Standard Bible: its name on the first line, then every verse on a line of its own, starting with its number.");
  ("★ THE FIRST LINE ALSO FINDS THE POST AFTERWARDS. It ends in ' (BSB)' so 'Matthew 1' cannot be taken for 'Matthew 11'.");
  ("★ A CHAPTER WITH NO VERSES THROWS, so a failed read of the bible can never go out as a post holding only a heading.");
  let bible_folder = ebible_folder_english();
  let verses = await bible_chapter_verses(bible_folder, chapter_code);
  if (equal(verses.length, 0)) {
    throw new Error("no verses in " + chapter_code);
  }
  function verse_line(verse) {
    let line = verse.verse_number + " " + verse.text;
    return line;
  }
  let heading = facebook_bible_chapter_name(chapter_code) + " (BSB)";
  let v = verses.map(verse_line);
  let lines = [heading, ""].concat(v);
  let r = lines.join("\n");
  return r;
}
