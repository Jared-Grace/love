import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_proper_name_numbers_cache } from "./bible_glyph_proper_name_numbers_cache.mjs";
import { bible_glyph_divine_numbers } from "./bible_glyph_divine_numbers.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { not } from "./not.mjs";
import { bible_glyph_name_letters_or_null } from "./bible_glyph_name_letters_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { english_joining_words } from "./english_joining_words.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { bible_glyph_divine_letters } from "./bible_glyph_divine_letters.mjs";
export async function bible_glyph_chapter_names_in_letters(chapter_code) {
  "Every place ONE authored picture Bible chapter spells a proper name in plain English letters where the original has one, said one verse at a time.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a chapter to read and nothing that runs.";
  "A NAME IS THE ONE WORD THIS BIBLE WILL NEVER DRAW, and until the name badge was bought a reader had no way of being told so. Undrawn English on the page means a word waiting for a picture, so Abraham in letters reads as somebody not having got round to him. Nobody ever will - drawing a name would be translating it - and the badge is how the page says the letters ARE the answer rather than a gap in it.";
  "IT MATCHES ON THE ENGLISH AND THAT IS WHY THE GUARDS ARE WHERE THEY ARE. The interlinear says which numbers are names and the authored verse is readable English, and nothing lines one up against the other word for word. So the join is made on the spelling: the name the interlinear's gloss carries has to stand in the authored verse, in letters, spelled the same. Four guards keep that honest, and the fourth was bought by a verse the first three all passed.";
  "THE FIRST GUARD IS THE CAPITAL, and it is doing almost all the work. Several Hebrew names are ordinary English words - On is a city in Genesis, No is a city in the prophets, Dan and Gad are sons - and matching on the letters alone would put a badge on every preposition that happened to share a name's spelling. An English Bible capitalises a name wherever it stands and an ordinary word only at the start of a sentence, so requiring the capital in the authored verse costs nothing real and removes that whole class.";
  "THE SECOND GUARD IS THE LITTLE-WORD LIST, kept because the capital does not reach the start of a sentence. A verse opening with On the third day would otherwise hand its first word a badge, and the name it was matched against would be a city nobody mentioned. The list is the same one the other drawing pass guards itself with, and it is the only place either of them looks.";
  "THE THIRD GUARD IS THAT A NUMBER WITH A PICTURE IS NOT A NAME WAITING FOR ONE, and leaving it out was the first fault this reading was run to find. The covenant name is parsed proper by the interlinear, because it IS a name, so the first run put a badge on twenty one LORDs and two GODs standing in letters - words whose whole picture, the infinity sign, was bought two days earlier for exactly them. The word God went the same way. A badge there would say a name stands here about a word that has a mark of its own, and would quietly stop it ever getting that mark.";
  "THE FOURTH GUARD HOLDS OUT THE ENGLISH WORDS THAT NAME GOD, and it exists because the other three all passed on one verse and it was still wrong. At the eighth of the thirty second of Deuteronomy the Hebrew word printed is yisrael and the interlinear glosses it of God, following the reading sons of God - so the number was a real name, the capital was there, and the badge would have stood in front of the word God. The join lands on the English, so one guard has to stand on the English.";
  "THE NAMES OF GOD THAT HAVE NO PICTURE YET ARE HELD OUT BY NAME, because the third guard cannot reach them. Shaddai has no mark, so nothing about it looks different from Nineveh, and the badge would have landed on the Almighty the same way it lands on Pharaoh. The list it is held out by is kept next door with its reasons, and a gate there empties it as each of those names is drawn.";
  "THE NUMBER TRAVELS OUT BESIDE THE LETTERS AND IT IS WHAT MAKES A WRONG MATCH TRACEABLE. The answer is a list of English words, and an English word on its own cannot be argued with - a badge on Almighty looks like a badge on a name until somebody can see it came from shaddai. Carrying the number turns every entry into something that can be checked against the original rather than agreed with.";
  "IT TRAVELS WITH ITS OWN NAME AND NOT IN A TABLE BESIDE THEM, and the first draft got that wrong in the way a table always does. The numbers were filed under the English word for a whole chapter at a time, so two different Hebrew words glossed the same English kept only the last one, and every earlier match was then reported under a number that belonged to somebody else. Nothing went red, because the match itself was still right - only the evidence for it was wrong, which is the worse of the two faults.";
  "IT REPORTS AND DOES NOT DRAW, because the two questions are different sizes. How many names stand in letters is worth knowing before a single one is marked, and a reading that also wrote would have to be trusted before it could be measured.";
  "IT IS ASKED PER CHAPTER BECAUSE A CHAPTER IS WHAT GETS WRITTEN AND COMMITTED. One chapter is one file and one message, and its names are independent of every other chapter's, so the drawing pass wants exactly this answer for exactly one chapter at a time. Asking the whole Bible and then slicing the answer would make the commit unit and the reading unit disagree, and the commit unit is the one that is fixed.";
  arguments_assert(arguments, 1);
  let both = await bible_glyph_chapter_rows_filed(chapter_code);
  let testament_name = both.testament_name;
  let told = await bible_glyph_proper_name_numbers_cache(testament_name);
  let found_numbers = told.numbers;
  let held_out = [];
  for (let row of bible_glyph_divine_numbers()) {
    let side = bible_chapter_testament_name(row.testament_chapter);
    let mine = equal(side, testament_name);
    if (mine) {
      list_add(held_out, row.strong);
    }
  }
  let names_by_verse = {};
  for (let row of both.rows) {
    let names = [];
    for (let word of row.words) {
      let item = String(word.strong);
      let ordinary = list_includes_not(found_numbers, item);
      if (ordinary) {
        continue;
      }
      let divine = list_includes(held_out, item);
      if (divine) {
        continue;
      }
      if (bible_glyph_gloss_placeholder_is(word.gloss)) {
        continue;
      }
      let b = equal(word.glyph, "");
      let drawn = not(b);
      if (drawn) {
        continue;
      }
      let letters = bible_glyph_name_letters_or_null(word.gloss);
      let unreadable = null_is(letters);
      if (unreadable) {
        continue;
      }
      list_add(names, {
        letters,
        strong: item,
      });
    }
    property_set(names_by_verse, row.verse_number, names);
  }
  let offenders = [];
  let walked = 0;
  let parsed = bible_glyph_chapter(chapter_code);
  for (let verse of parsed.verses) {
    let verse_number = verse.verse_number;
    walked = add(walked, 1);
    let found = property_get_or_null(names_by_verse, verse_number);
    let unfiled = null_is(found);
    if (unfiled) {
      continue;
    }
    for (let word of verse.words) {
      let plain = equal(typeof word, "string");
      if (not(plain)) {
        continue;
      }
      let letters = bible_glyph_name_letters_or_null(word);
      let unreadable = null_is(letters);
      if (unreadable) {
        continue;
      }
      let list = english_joining_words();
      let item2 = text_lower_to(letters);
      let little = list_includes(list, item2);
      if (little) {
        continue;
      }
      let list2 = bible_glyph_divine_letters();
      let named = list_includes(list2, letters);
      if (named) {
        continue;
      }
      let strong = null;
      for (let name of found) {
        let same = equal(name.letters, letters);
        if (same) {
          strong = name.strong;
        }
      }
      let unnamed = null_is(strong);
      if (unnamed) {
        continue;
      }
      list_add(offenders, {
        chapter_code,
        verse_number,
        word,
        letters,
        strong,
      });
    }
  }
  let r = {
    chapter_code,
    testament_name,
    walked,
    offenders,
  };
  return r;
}
