import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_glyph_chapters_seat_split_planned } from "./bible_glyph_chapters_seat_split_planned.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { bible_glyph_name_character_is } from "./bible_glyph_name_character_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapters_seat_split_redraw(glyphs_comma) {
  "$plain glyphs_comma";
  "the glyphs are the bare pictures whose words were just moved onto groups, joined by commas, spelled as the character table spells them. They name pictures to look for and nothing that runs.";
  "Redraws every bare mark the written chapters still carry for a picture whose words were just moved onto groups of their own, so each mark on the page becomes the mark the table now seats under it.";
  "IT REFUSES TO WRITE ANYTHING WHILE ANY VERSE OF THOSE PICTURES IS UNDECIDED, for the reason the collision redraw gives: a page half redrawn spells one word two ways with nothing to say which lines were reached. The undecided verses come back in the refusal, so the next step is to read them, not to rerun this.";
  "IT READS THE SHORTHAND THE WAY THE PARSER DOES, ONE QUOTED WORD AT A TIME. A dollar opens a mark and the mark runs while the letters are name letters; a doubled dollar is a dollar and nothing else. Searching the raw text for a dollar and the name would be wrong in a way that passes every quick look: a mark closed by a dollar and followed by English spells the English straight after a dollar, so a verse writing the proper name mark before the word light would read as drawing the light.";
  "A WORD MAY BE WRITTEN IN EITHER QUOTE. The formatter writes a word that holds a double quote, such as the start of someone speaking, inside single quotes, and Exodus 4:21 has one. Reading only the double quoted strings went wrong without any error: it paired the quote inside that word with the next word's opening quote, so it read the spaces between words as a word and missed the mark.";
  "IT COUNTS WHAT IT FINDS AGAINST WHAT THE PLAN COUNTED BEFORE WRITING A VERSE, because the plan read a parsed chapter and this reads the file's text, two readings of one thing. A verse whose text holds a different number of that bare mark stops everything.";
  arguments_assert(arguments, 1);
  let glyphs = text_split_comma(glyphs_comma);
  let plan = await bible_glyph_chapters_seat_split_planned(glyphs);
  let undecided = plan.undecided;
  let b = equal(undecided.length, 0);
  assert_json(b, {
    undecided: undecided.length,
    first: undecided.slice(0, 10),
    hint: "some verses cannot say which word a bare mark was drawn for, so nothing is redrawn - read those verses, or keep that picture unsplit",
  });
  let by_chapter = {};
  for (let entry of plan.decided) {
    by_chapter[entry.chapter_code] ??= {};
    by_chapter[entry.chapter_code][entry.verse_number] ??= {};
    by_chapter[entry.chapter_code][entry.verse_number][entry.glyph] =
      entry.order;
  }
  function word_redraw(word, orders, seen) {
    let out = "";
    let inside = false;
    let index = 0;
    while (less_than(index, word.length)) {
      let here = word[index];
      if (not_equal(here, "$")) {
        out += here;
        index += 1;
        if (inside && not(bible_glyph_name_character_is(here))) {
          inside = false;
        }
        continue;
      }
      if (equal(word[index + 1], "$")) {
        out += "$$";
        index += 2;
        continue;
      }
      out += "$";
      index += 1;
      if (inside) {
        inside = false;
        continue;
      }
      inside = true;
      let end = index;
      while (
        less_than(end, word.length) &&
        bible_glyph_name_character_is(word[end])
      ) {
        end += 1;
      }
      let name = word.slice(index, end);
      let order = orders[name];
      if (equal(order, undefined)) {
        continue;
      }
      let taken = order[seen[name] ?? 0];
      seen[name] = (seen[name] ?? 0) + 1;
      out += taken;
      index = end;
    }
    return out;
  }
  let chapters_written = 0;
  let redrawn = 0;
  let writes = [];
  for (let chapter_code of object_property_names(by_chapter)) {
    let f_path =
      "js/bible_glyph_chapter_" + chapter_code.toLowerCase() + ".mjs";
    let before = await file_read(f_path);
    let pieces = before.split("verse_number:");
    let written = [pieces[0]];
    for (let i = 1; less_than(i, pieces.length); i++) {
      let piece = pieces[i];
      let found = piece.match(/^\s*(\d+)/);
      let b2 = not_equal(found, null);
      assert_json(b2, {
        f_path,
        hint: "a verse block does not open with its number, so its marks cannot be attributed to a verse",
      });
      let verse_number = Number(found[1]);
      let orders = by_chapter[chapter_code][verse_number];
      if (equal(orders, undefined)) {
        written.push(piece);
        continue;
      }
      let seen = {};
      function lambda(quoted, word_double, word_single) {
        if (equal(word_double, undefined)) {
          let r3 = "'" + word_redraw(word_single, orders, seen) + "'";
          return r3;
        }
        let r2 = '"' + word_redraw(word_double, orders, seen) + '"';
        return r2;
      }
      let rebuilt = piece.replace(
        /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g,
        lambda,
      );
      for (let glyph of object_property_names(orders)) {
        let b3 = equal(seen[glyph] ?? 0, orders[glyph].length);
        assert_json(b3, {
          f_path,
          verse_number,
          glyph,
          text_marks: seen[glyph] ?? 0,
          plan_marks: orders[glyph].length,
          hint: "the file's text holds a different number of that bare mark than the plan counted, so the two readings disagree about the page and nothing is redrawn",
        });
        redrawn += orders[glyph].length;
      }
      written.push(rebuilt);
    }
    writes.push({
      f_path,
      contents: written.join("verse_number:"),
    });
  }
  for (let write of writes) {
    await file_overwrite(write.f_path, write.contents);
    chapters_written += 1;
  }
  let r = {
    glyphs,
    chapters_written,
    redrawn,
  };
  return r;
}
