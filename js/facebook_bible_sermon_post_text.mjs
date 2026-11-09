import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { bible_chapter_verses } from "./bible_chapter_verses.mjs";
import { facebook_bible_chapter_name } from "./facebook_bible_chapter_name.mjs";
export async function facebook_bible_sermon_post_text(chapter_code, passage) {
  arguments_assert(arguments, 2);
  ("$plain chapter_code");
  ("The words of a facebook post for one sermon passage: its name on the first line, then the verses it preaches on, each starting with its number, then the sermon, one line to a line.");
  ("★ THE FIRST LINE ALSO FINDS THE POST AFTERWARDS. It ends in ' (BSB) sermon', so it is never taken for the chapter post of the same chapter, and the verse run ends right before the bracket, so 'Romans 1:1' cannot be taken for 'Romans 1:10'.");
  ("★ THE VERSES ARE THE BIBLE'S, READ FRESH, not the copy a sermon was stored beside - so the words are the same Berean Standard Bible the chapter posts use.");
  ("★ A PASSAGE WITH NO VERSES OR NO SERMON THROWS, so a failed read can never go out as a post holding only a heading.");
  let verse_numbers = passage.verse_numbers.map(String);
  let lines = passage.lines;
  let bible_folder = ebible_folder_english();
  let verses = await bible_chapter_verses(bible_folder, chapter_code);
  function wanted(verse) {
    let v2 = String(verse.verse_number);
    let w = verse_numbers.includes(v2);
    return w;
  }
  let chosen = verses.filter(wanted);
  if (equal(chosen.length, 0)) {
    throw new Error(
      "no verses for " + chapter_code + " " + verse_numbers.join(","),
    );
  }
  if (equal(lines.length, 0)) {
    throw new Error(
      "no sermon for " + chapter_code + " " + verse_numbers.join(","),
    );
  }
  function verse_line(verse) {
    let line = verse.verse_number + " " + verse.text;
    return line;
  }
  let first = verse_numbers[0];
  let last = verse_numbers[subtract(verse_numbers.length, 1)];
  let run = equal(first, last) ? first : first + "-" + last;
  let heading =
    facebook_bible_chapter_name(chapter_code) + ":" + run + " (BSB) sermon";
  let v = chosen.map(verse_line);
  let all = [heading, ""].concat(v, [""], lines);
  let r = all.join("\n");
  return r;
}
