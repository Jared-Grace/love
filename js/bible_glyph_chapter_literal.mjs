import { equal } from "./equal.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_glyph_word_false_god_is } from "./bible_glyph_word_false_god_is.mjs";
export async function bible_glyph_chapter_literal(
  chapter_code,
  testament_name,
) {
  "One chapter drawn in pictures and nothing else, word for word from the original, in the order the original puts its words.";
  "$plain chapter_code";
  "$plain testament_name";
  "THE WRITTEN CHAPTERS ARE ENGLISH SENTENCES WITH PICTURES SET INTO THEM, and that shape cannot pass about a third pictures, because the words it leaves in English are exactly the small ones - and, the, to, of, his - and they are most of any verse. This builds the other shape: every original word is a picture, and so is every piece the original welds onto a word, so nothing is left for letters to carry except a root that has no seat yet.";
  "A HEBREW WORD IS DRAWN AS ITS PIECES, each piece its own word on the page: what is welded on in front, then the word, then the ending. The joined alternative - one group holding every piece with pluses - was set aside, because the root pictures are already joined groups, and a group of groups reads as one bigger picture whose seams nobody can find.";
  "THE PIECES IN FRONT WEAR THE PICTURE OF THE WORD THEY ARE SHORT FOR. The b- in front of a word is the same in as the standalone bemo, so it is the tray going in; the k- is kemo, likeness; the m- is min, the tray coming out; the l- is lemow, toward and the gift. The article is the pin, which is the picture the Greek article already wears, and the Hebrew table holds the bare pin free.";
  "AND IS THE PLUS AND THE HOOK. Plus alone was set aside because gam, also, already wears it; the hook alone because it is the tabernacle hook, the very word vav; the link because it is there is. The plus says and, the hook says which and, and together they are a sequence nothing else wears.";
  "THE RELATIVE SHE- IS THE FINGER POINTING BACK AND THE FLASHLIGHT, set beside asher's back and flashlight, because they do the same work and are not the same word, and two words never share one sequence. The question he- is the question and the exclamation, because the question alone is to ask.";
  "AN ENDING IS ITS PERSON: me for the first person, you for the second, the finger pointing back for the third. The paragogic nun stands for no word at all, so it is the one piece drawn as nothing. A piece with no picture yet is left as its parsing code, so the gap is seen rather than hidden.";
  "A PREPOSITION THE INTERLINEAR NAMES ONLY AS A PREPOSITION is read off its own first letter. To him, to me, in it and for you come with no root number and no letter in their parsing - lo, li, bo, lakem - so the lamed, bet, kaf or mem that opens the word, after any and, is what says which of the four it is, and it is drawn as that one. A pronoun standing with no root number is drawn as its person, the same way an ending is.";
  "ORIGINAL ORDER AND NOT ENGLISH ORDER, because a picture belongs to no language and the order is the one thing the original fixes; the English order is a translation's choice laid on top.";
  let prefixes = {
    "Conj-w": "plus+hook",
    Art: "pin",
    "Prep-b": "tray_in",
    "Prep-k": "likeness",
    "Prep-m": "tray_out",
    "Prep-l": "toward+gift",
    Pr: "pointing_back+flashlight",
    "Pro-r": "pointing_back+flashlight",
    Pg: "question+exclamation",
  };
  let suffixes = {
    "1cs": "me",
    "1cp": "me",
    "1cse": "me",
    "1cp2": "me",
    "1cpe": "me",
    "2ms": "you",
    "2mp": "you",
    "2fs": "you",
    "2fp": "you",
    "2fs2": "you",
    "2ms2": "you",
    "3ms": "pointing_back",
    "3mp": "pointing_back",
    "3fs": "pointing_back",
    "3fp": "pointing_back",
    Pn: "",
  };
  let letters = {
    ל: "Prep-l",
    ב: "Prep-b",
    כ: "Prep-k",
    מ: "Prep-m",
  };
  function preposition_code(original, front) {
    let consonants = original.replace(/[^א-ת]/g, "");
    let and = front.includes("Conj-w") && consonants.startsWith("ו");
    if (and) {
      consonants = consonants.slice(1);
    }
    let code = letters[consonants[0]];
    if (equal(code, undefined)) {
      let r3 = "Prep";
      return r3;
    }
    return code;
  }
  function pieces_draw(text, table, words, original, front) {
    for (let code of text.split(",")) {
      code = code.trim();
      if (equal(code, "Prep")) {
        code = preposition_code(original, front);
      }
      let mark = table[code];
      if (equal(mark, undefined)) {
        words.push(code);
        continue;
      }
      if (equal(mark, "")) {
        continue;
      }
      words.push("$" + mark);
    }
  }
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let rows = [];
  let verse_number = 0;
  for (let verse of verses) {
    verse_number = verse_number + 1;
    let words = [];
    for (let word of verse.words) {
      function lambda(part) {
        let r = part.trim();
        return r;
      }
      let parts = word.parsing.split("|").map(lambda);
      let front = "";
      let ending = "";
      let main = parts[0];
      if (equal(parts.length, 3)) {
        front = parts[0];
        main = parts[1];
        ending = parts[2];
      }
      if (equal(parts.length, 2)) {
        let last_is_ending = /^([123][mfc][sp]|Pn)/.test(parts[1]);
        if (last_is_ending) {
          ending = parts[1];
        } else {
          front = parts[0];
          main = parts[1];
        }
      }
      if (not_equal(front, "")) {
        pieces_draw(front, prefixes, words, word.original, front);
      }
      let rootless = equal(word.strong, "");
      if (rootless && equal(main, "Prep")) {
        pieces_draw(main, prefixes, words, word.original, front);
        if (not_equal(ending, "")) {
          pieces_draw(ending, suffixes, words, word.original, front);
        }
        continue;
      }
      if (rootless && main.startsWith("Pro-")) {
        let v = main.slice(4);
        pieces_draw(v, suffixes, words, word.original, front);
        if (not_equal(ending, "")) {
          pieces_draw(ending, suffixes, words, word.original, front);
        }
        continue;
      }
      let glyph = drawn[word.strong];
      let entry = {
        gloss: word.gloss,
        strong: word.strong,
      };
      if (bible_glyph_word_false_god_is(chapter_code, verse_number, entry)) {
        glyph = "moai";
      }
      if (equal(glyph, undefined)) {
        words.push(word.gloss);
      } else {
        words.push("$" + glyph);
      }
      if (not_equal(ending, "")) {
        pieces_draw(ending, suffixes, words, word.original, front);
      }
    }
    rows.push({
      verse_number,
      words,
    });
  }
  let r2 = {
    chapter_code,
    verses: rows,
  };
  return r2;
}
