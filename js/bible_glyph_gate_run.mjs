import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { list_is } from "./list_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { bible_glyph_referents } from "./bible_glyph_referents.mjs";
import { bible_glyph_characters_orthodox } from "./bible_glyph_characters_orthodox.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
export function bible_glyph_gate_run() {
  "QA gate: prove the picture Bible's glyph tables agree with each other, so a root, a referent rule or a tradition naming a glyph that does not exist fails the build instead of rendering as a blank where a picture should be.";
  "The tables are three separate files on purpose - the vocabulary of glyphs, the roots that use them, and the traditions that swap one - and separating them is what lets a tradition be added without touching a single verse. The cost of that separation is that nothing but this gate holds the names together. A misspelled glyph name is invisible everywhere else: the survey happily reports it as missing, the renderer happily draws nothing, and the reader is the first to notice.";
  "A word may belong to only ONE root, and that is checked too. A Strong's number appearing under two roots would give the same word two glyphs with nothing to say which wins, and the winner would then depend on the order the table happens to be written in - a bug that looks like an opinion.";
  "EVERY GLYPH AN AUTHORED CHAPTER NAMES is checked the same way, and that check earned itself the day it was written: the first chapter authored by hand spelled God followed by a full stop as one run, so five of its six verses stored a glyph named fire with a full stop welded on. Nothing failed. The verse simply drew the name in angle brackets where the picture should have been, and the only reader who could ever have caught it is a person looking at the page.";
  "A tradition may only REPLACE, never invent. An Orthodox cross is the same word drawn differently, so its name has to be a name the base vocabulary already carries; a tradition naming a new one would be a glyph no verse could ever reference, since verses are written against the base names.";
  let characters = bible_glyph_characters();
  let known = {};
  for (let character of characters) {
    let repeated = property_exists(known, character.name);
    let b = not(repeated);
    assert_json(b, {
      name: character.name,
      hint: "two glyphs share one name, so the later one silently wins - rename one of them",
    });
    property_set(known, character.name, character.character);
  }
  let roots = bible_glyph_roots();
  let seated = {};
  for (let root of roots) {
    for (let word of root.words) {
      let drawn = property_exists(known, word.glyph);
      let f_name = fn_name("bible_glyph_characters");
      assert_json(drawn, {
        root: root.root,
        strong: word.strong,
        glyph: word.glyph,
        hint: text_combine_multiple([
          "a root names a glyph the vocabulary does not carry - add it to ",
          f_name,
          " or fix the spelling",
        ]),
      });
      let taken = property_exists(seated, word.strong);
      let b2 = not(taken);
      let value = property_get_or_null(seated, word.strong);
      assert_json(b2, {
        strong: word.strong,
        roots: [value, root.root],
        hint: "one word is seated under two roots, so which glyph it gets depends on table order - give the word to one root",
      });
      property_set(seated, word.strong, root.root);
    }
  }
  let referents = bible_glyph_referents();
  for (let referent of referents) {
    let named = property_exists(seated, referent.strong);
    assert_json(named, {
      strong: referent.strong,
      hint: "a referent rule overrides a word no root seats, so there is nothing to override - seat the word first",
    });
    for (let glyph of referent.glyphs) {
      let drawn = property_exists(known, glyph);
      let f_name2 = fn_name("bible_glyph_characters");
      assert_json(drawn, {
        strong: referent.strong,
        glyph,
        hint: text_combine_multiple([
          "a referent rule names a glyph the vocabulary does not carry - add it to ",
          f_name2,
          " or fix the spelling",
        ]),
      });
    }
    let by_verses = property_exists(referent, "verses");
    let by_phrase = property_exists(referent, "phrase");
    let one = not_equal(by_verses, by_phrase);
    assert_json(one, {
      strong: referent.strong,
      hint: "a referent rule says WHERE it applies by naming verses or by naming a phrase, and must name exactly one of the two",
    });
  }
  let chapters = bible_glyph_chapters();
  for (let chapter of chapters) {
    let parsed = bible_glyph_chapter(chapter.chapter_code);
    for (let verse of parsed.verses) {
      for (let word of verse.words) {
        let group = list_is(word);
        if (not(group)) {
          continue;
        }
        for (let piece of word) {
          let piece_group = list_is(piece);
          if (not(piece_group)) {
            continue;
          }
          for (let name of piece) {
            let drawn = property_exists(known, name);
            let f_name3 = fn_name("bible_glyph_characters");
            assert_json(drawn, {
              chapter_code: chapter.chapter_code,
              verse_number: verse.verse_number,
              name,
              hint: text_combine_multiple([
                "an authored verse names a glyph the vocabulary does not carry, so it draws as its own name in angle brackets - add it to ",
                f_name3,
                " or fix the spelling",
              ]),
            });
          }
        }
      }
    }
  }
  let orthodox = bible_glyph_characters_orthodox();
  for (let character of orthodox) {
    let replaces = property_exists(known, character.name);
    assert_json(replaces, {
      name: character.name,
      hint: "a tradition may only redraw a glyph the base vocabulary already names, because verses are written against the base names",
    });
  }
}
