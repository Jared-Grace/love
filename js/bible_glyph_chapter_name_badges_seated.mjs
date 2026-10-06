import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_proper_name_numbers_cache } from "./bible_glyph_proper_name_numbers_cache.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_name_letters_or_null } from "./bible_glyph_name_letters_or_null.mjs";
import { bible_glyph_text_capital_words } from "./bible_glyph_text_capital_words.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_glyph_name_badge_entry } from "./bible_glyph_name_badge_entry.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export async function bible_glyph_chapter_name_badges_seated(chapter_code) {
  "Every name badge in ONE written picture Bible chapter that stands for a name the table now draws, said one verse at a time with the entry that draws it.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a chapter to read and nothing that runs.";
  "A NAME BADGE WAS THE ANSWER WHILE A NAME HAD NO PICTURE, AND A COMMON NAME NOW HAS ONE. The human ruled on 2026-10-05 that common names may have their own sequence, so David, Moses, Judah and the rest are seated in the tables. The badges written before that still spell the letters behind the tag, and this finds the ones whose name the verse's original carries with a picture now - so the page can draw them instead of telling the reader the letters are the answer.";
  "IT MATCHES THE LETTERS BEHIND THE BADGE AGAINST THE NAMES THE VERSE'S ORIGINAL CARRIES, the same join the badge was made with, so it can only undo a badge that join once wrote. A possessive keeps its ending - David's becomes the picture with the apostrophe and s behind it - and any other ending is refused, so Levi cannot claim the badge on Levites.";
  "IT ALSO TAKES A SEATED NAME STILL STANDING IN BARE LETTERS, and the first run left those out. The badge drawer never matched a possessive - David's has the letters Davids, which is no name - so the possessives stayed bare, and once David had a picture the verse drew one David and left the other in letters, which the underdrawn gate named. The same match draws both, with the same refusal of any other ending.";
  "IT DRAWS NO MORE OF A NAME THAN THE VERSE'S ORIGINAL HOLDS, AND WHEN THE WORDS IT COULD DRAW OUTNUMBER THE ONES STILL MISSING IT DRAWS NONE. Matching bare letters made two faults the badge-only match never had. A name the interlinear glosses as He or And matched every He and And in the verse, so Joshua was drawn over a He that meant God. And a badge kept by hand, because the English says Moses twice where the original says it once, was drawn again on the next run. Counting both sides stops both: a verse already drawn in full is left alone, and where there are more candidates than gaps, which one the original means is a reading this cannot make, so the words stay as they are for a person to choose. Rejected: matching only names whose gloss is the table's own spelling, which would also refuse the pronouns the original really does name.";
  "A GLOSS WITH A BRACKET NEVER MATCHES BARE LETTERS. The interlinear writes a name the English turned into a pronoun as So [he] or When [his], and the one capital word in that is the joining word, not the name - so the count-limited run still drew So and When as David and Moses and left the he standing. The name is on the bracketed pronoun, and which he in the verse it is cannot be read off the spelling, so those wait for a person. Rejected: matching the bracketed word instead, which would claim every he in the verse.";
  "A POSSESSIVE GLOSS READS AS ITS NAME, AND A GLOSS WITH TWO CAPITALS TAKES THE ONE THE CHAPTER ALREADY SPELLS THE NAME WITH, 2026-10-06. The gloss Pharaoh’s read as the letters Pharaohs, which is no name, so an authored Pharaoh's never matched and a badge spelled Pharaohs was drawn with its ending lost. And But Pharaoh, which the interlinear writes when a joining word opens the verse, has two capitals and was refused, so about a hundred Pharaohs stayed in letters. The spelling comes from the chapter's own glosses for the same number that hold one capital and no bracket, so the joining word is never one of them. Rejected: a list of joining words to skip, which is a guess about English that the chapter's own glosses already answer; and taking the last capital, which would draw the second of two names.";
  "IT REPORTS AND DOES NOT DRAW, so the count of badges waiting can be had before a single one is touched.";
  arguments_assert(arguments, 1);
  let both = await bible_glyph_chapter_rows_filed(chapter_code);
  let told = await bible_glyph_proper_name_numbers_cache(both.testament_name);
  let glossed = [];
  let spellings = {};
  for (let row of both.rows) {
    for (let word of row.words) {
      let item = String(word.strong);
      let b = told.numbers.includes(item);
      if (not(b)) {
        continue;
      }
      if (equal(word.glyph, "")) {
        continue;
      }
      let gloss = word.gloss.replace(/['’]s\b/g, "");
      let bracketed = word.gloss.includes("[");
      let single = bible_glyph_name_letters_or_null(gloss);
      glossed.push({
        verse_number: row.verse_number,
        gloss,
        single,
        bracketed,
        glyph: word.glyph,
        strong: item,
      });
      if (bracketed || equal(single, null)) {
        continue;
      }
      spellings[item] ??= [];
      spellings[item].push(single);
    }
  }
  let names_by_verse = {};
  for (let g of glossed) {
    let letters = g.single;
    if (equal(letters, null)) {
      let spelled = spellings[g.strong] ?? [];
      function lambda6(w) {
        let r4 = spelled.includes(w);
        return r4;
      }
      let known = bible_glyph_text_capital_words(g.gloss).filter(lambda6);
      if (not_equal(known.length, 1)) {
        continue;
      }
      letters = known[0];
    }
    names_by_verse[g.verse_number] ??= [];
    names_by_verse[g.verse_number].push({
      letters,
      bracketed: g.bracketed,
      glyph: g.glyph,
      strong: g.strong,
    });
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
    let found = [];
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
        if (not(badged) && name.bracketed) {
          continue;
        }
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
        found.push({
          verse_number: verse.verse_number,
          word,
          entry: "$" + name.glyph + suffix,
          strong: name.strong,
        });
        break;
      }
    }
    for (let name of names) {
      let glyph_entry = "$" + name.glyph;
      function lambda2(n) {
        let eq2 = equal(n.strong, name.strong);
        return eq2;
      }
      let original = names.filter(lambda2).length;
      function lambda3(w) {
        let r2 =
          equal(typeof w, "string") &&
          w.startsWith(glyph_entry) &&
          not(/^[+\w]/.test(w.slice(glyph_entry.length)));
        return r2;
      }
      let drawn = verse.words.filter(lambda3).length;
      function lambda4(f) {
        let eq3 = equal(f.strong, name.strong);
        return eq3;
      }
      let waiting = found.filter(lambda4);
      function lambda5(o) {
        let r3 =
          equal(o.verse_number, verse.verse_number) &&
          equal(o.strong, name.strong);
        return r3;
      }
      let already = offenders.some(lambda5);
      if (already || greater_than(waiting.length, subtract(original, drawn))) {
        continue;
      }
      offenders.push(...waiting);
    }
  }
  let r = {
    chapter_code,
    offenders,
  };
  return r;
}
