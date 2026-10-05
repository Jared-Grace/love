import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_proper_name_numbers_cache } from "./bible_glyph_proper_name_numbers_cache.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_name_letters_or_null } from "./bible_glyph_name_letters_or_null.mjs";
import { bible_glyph_name_badge_entry } from "./bible_glyph_name_badge_entry.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
export async function bible_glyph_chapter_name_badges_seated(chapter_code) {
  "Every name badge in ONE written picture Bible chapter that stands for a name the table now draws, said one verse at a time with the entry that draws it.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a chapter to read and nothing that runs.";
  "A NAME BADGE WAS THE ANSWER WHILE A NAME HAD NO PICTURE, AND A COMMON NAME NOW HAS ONE. The human ruled on 2026-10-05 that common names may have their own sequence, so David, Moses, Judah and the rest are seated in the tables. The badges written before that still spell the letters behind the tag, and this finds the ones whose name the verse's original carries with a picture now - so the page can draw them instead of telling the reader the letters are the answer.";
  "IT MATCHES THE LETTERS BEHIND THE BADGE AGAINST THE NAMES THE VERSE'S ORIGINAL CARRIES, the same join the badge was made with, so it can only undo a badge that join once wrote. A possessive keeps its ending - David's becomes the picture with the apostrophe and s behind it - and any other ending is refused, so Levi cannot claim the badge on Levites.";
  "IT ALSO TAKES A SEATED NAME STILL STANDING IN BARE LETTERS, and the first run left those out. The badge drawer never matched a possessive - David's has the letters Davids, which is no name - so the possessives stayed bare, and once David had a picture the verse drew one David and left the other in letters, which the underdrawn gate named. The same match draws both, with the same refusal of any other ending.";
  "IT REPORTS AND DOES NOT DRAW, so the count of badges waiting can be had before a single one is touched.";
  arguments_assert(arguments, 1);
  let both = await bible_glyph_chapter_rows_filed(chapter_code);
  let told = await bible_glyph_proper_name_numbers_cache(both.testament_name);
  let names_by_verse = {};
  for (let row of both.rows) {
    let names = [];
    for (let word of row.words) {
      let item = String(word.strong);
      let b = told.numbers.includes(item);
      if (not(b)) {
        continue;
      }
      if (equal(word.glyph, "")) {
        continue;
      }
      let letters = bible_glyph_name_letters_or_null(word.gloss);
      if (equal(letters, null)) {
        continue;
      }
      names.push({
        letters,
        glyph: word.glyph,
        strong: item,
      });
    }
    names_by_verse[row.verse_number] = names;
  }
  let prefix = bible_glyph_name_badge_entry("");
  function lambda(c) {
    let eq = equal(c.chapter_code, chapter_code);
    return eq;
  }
  let stored = bible_glyph_chapters().find(lambda);
  let offenders = [];
  for (let verse of stored.verses) {
    let names = names_by_verse[verse.verse_number] ?? [];
    for (let word of verse.words) {
      if (not_equal(typeof word, "string")) {
        continue;
      }
      let badged = word.startsWith(prefix);
      if (not(badged) && word.startsWith("$")) {
        continue;
      }
      let rest = badged ? word.slice(prefix.length) : word;
      for (let name of names) {
        let b2 = rest.startsWith(name.letters);
        if (not(b2)) {
          continue;
        }
        let suffix = rest.slice(name.letters.length);
        let tail = text_letters_only(suffix);
        let possessive = equal(tail, "s") && /^['’]s/.test(suffix);
        if (not_equal(tail, "") && not(possessive)) {
          continue;
        }
        offenders.push({
          verse_number: verse.verse_number,
          word,
          entry: "$" + name.glyph + suffix,
          strong: name.strong,
        });
        break;
      }
    }
  }
  let r = {
    chapter_code,
    offenders,
  };
  return r;
}
