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
  "A PREPOSITION WITH NO LETTER OF ITS OWN IS DRAWN AS NOTHING, like the paragogic nun, because no word stands under it. The interlinear splits a place name such as Bethel, Beersheba or Kiriath-jearim into two words and marks the second half with the preposition the first half carries, so the el of in Bethel is parsed as if it held the in. The in is written on the first half and drawn there; drawing it again on the second half would picture a word the original says once. Measured 2026-10-30, 165 Old Testament words, nearly all of them these second halves. Rejected: repeating the first half's preposition, which doubles it; leaving the parsing code showing, which marks as missing a piece that is not there.";
  "TEN WORDS THE INTERLINEAR PARSES WRONGLY ARE CORRECTED BY HAND, each keyed by chapter, verse and transliteration, and each drawn as the pieces or root numbers its letters actually hold. Measured 2026-10-31, they were ten of the last twelve Old Testament words left in letters. Five little words carry no root number and a parsing that does not fit their letters: lahem twice and lahen are to them, li is to me, and the lone ha- is the question. The lo of 1 Samuel 2:16 is the negative, marked 3808 everywhere else in the interlinear. Pd and Pi are codes the interlinear never explains, its long reading only repeats them: the Pd of Ruth 3:17 sits on a plain verb, so the verb stands alone; the Pd of 2 Kings 15:10 hides the people of qabal-am, before the people; the Pi of Ecclesiastes 4:10 hides the to-him of ilo, woe to him. Beshel of Ecclesiastes 8:17 is in and the relative she-, which the interlinear parses as a relative pronoun the drawing reads as a person. Rejected: drawing the bare codes as nothing, which drops the people and the to-him; a rule guessing a preposition from the first letter of any rootless word, because a rule fitted to ten words would reach words it was never checked against; correcting the interlinear's own copy, because it is regenerated from its source and would lose the fix.";
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
    Prep: "",
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
  let corrections = {
    "DEU05:29:lā·hem": "Prep-l,3mp",
    "DEU32:6:hă-": "Pg",
    "1SA02:16:lō": "3808",
    "RUT03:17:tā·ḇō·w·’î": "935",
    "2KI15:10:qā·ḇā·lə·‘ām": "6905,5971",
    "1CH12:39:lā·hem": "Prep-l,3mp",
    "JOB30:24:lā·hen": "Prep-l,3fp",
    "JOB31:35:lî": "Prep-l,1cs",
    "ECC04:10:wə·’î·lōw": "Conj-w,337,Prep-l,3ms",
    "ECC08:17:bə·šel": "Prep-b,Pr",
  };
  function correction_mark(item) {
    if (/^\d+$/.test(item)) {
      let r4 = drawn[item];
      return r4;
    }
    let mark = prefixes[item];
    if (equal(mark, undefined)) {
      mark = suffixes[item];
    }
    return mark;
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
      let correction =
        corrections[chapter_code + ":" + verse_number + ":" + word.translit];
      if (not_equal(correction, undefined)) {
        for (let item of correction.split(",")) {
          let mark = correction_mark(item);
          if (equal(mark, undefined)) {
            words.push(item);
            continue;
          }
          words.push("$" + mark);
        }
        continue;
      }
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
