import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_walked } from "./bible_glyph_chapters_collision_marks_walked.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapters_collision_marks_root_redraw(
  glyph,
  root,
  glyph_after,
) {
  "Moves one of the two roots that share a picture onto a picture of its own, and redraws every mark already standing on the written chapters so the mark on the page says which of the two words it was drawn for.";
  "$plain glyph";
  "the glyph is the shared mark's own name, spelled as the root table spells it. It names a picture to look for and nothing that runs.";
  "$plain root";
  "the root is which of the two words moves, spelled as its row in the root table spells it. It names a word and nothing that runs.";
  "$plain glyph_after";
  "the glyph_after is the picture that word is moving to, already a name in the character table. It names a picture to write and nothing that runs.";
  "SPLITTING THE SEAT IS ONE LINE AND REDRAWING THE PAGES IS THREE THOUSAND, which is why this is a command rather than an afternoon. A mark already on a page records the picture and never the word, so the moment two words stop sharing a picture every one of those marks is a question. The collision walk answers all of them from the interlinear - which of the two roots actually stands in that verse - and this writes its answers back into the chapters.";
  "IT REFUSES TO RUN AT ALL WHILE ANY MARK OF THAT PICTURE IS UNDECIDED, rather than redrawing the ones it knows and leaving the rest. A mark left behind is worse than a mark never moved: the page would then spell one word two ways with nothing recording which lines were reached, and the next reader could not tell a deliberate leftover from a missed one. So the walk's ambiguous and unseated piles are checked first and a single entry stops everything.";
  "THE ORDER IT REDRAWS IN IS THE ORDER THE WALK DECIDED IN, and that is the one assumption worth naming. Where a verse names only one of the two roots every mark in that verse is that root and order does not arise. Where a verse names both, the walk pairs marks to words by position and only when the counts agree exactly, and this takes that pairing as given rather than re-deriving it - so whatever the walk can defend, this writes, and whatever it cannot, this refuses.";
  "IT CHECKS EACH VERSE'S MARKS AGAINST WHAT THE WALK COUNTED BEFORE CHANGING A CHARACTER. The walk reads a parsed chapter and this reads the file's text, which are two readings of one thing and could drift. A verse whose text holds a different number of marks than the walk counted is a disagreement about the page itself, so it stops rather than redrawing by a count it cannot trust.";
  arguments_assert(arguments, 3);
  let walk = await bible_glyph_chapters_collision_marks_walked();
  let undecided = [];
  for (let entry of walk.ambiguous) {
    if (equal(entry.glyph, glyph)) {
      undecided.push(entry);
    }
  }
  for (let entry of walk.unseated) {
    if (equal(entry.glyph, glyph)) {
      undecided.push(entry);
    }
  }
  let b = equal(undecided.length, 0);
  assert_json(b, {
    glyph,
    undecided: undecided.length,
    first: undecided[0],
    hint: "the walk cannot say which word some of those marks were drawn for, so nothing is redrawn - decide those lines first",
  });
  let by_chapter = {};
  let expected_total = 0;
  for (let entry of walk.decided) {
    if (not_equal(entry.glyph, glyph)) {
      continue;
    }
    let order = [];
    for (let i = 0; less_than(i, entry.drew); i++) {
      order.push(entry.roots[0]);
    }
    by_chapter[entry.chapter_code] = by_chapter[entry.chapter_code] || {};
    by_chapter[entry.chapter_code][entry.verse_number] = order;
    expected_total += entry.drew;
  }
  for (let entry of walk.aligned) {
    if (not_equal(entry.glyph, glyph)) {
      continue;
    }
    let b2 = equal(entry.order.length, entry.drew);
    assert_json(b2, {
      entry,
      hint: "a paired verse must name exactly as many words as the page drew marks, or the marks cannot be paired to the words by position",
    });
    by_chapter[entry.chapter_code] = by_chapter[entry.chapter_code] || {};
    by_chapter[entry.chapter_code][entry.verse_number] = entry.order;
    expected_total += entry.drew;
  }
  let mark_before = text_combine("$", glyph);
  let mark_after = text_combine("$", glyph_after);
  let chapters_written = 0;
  let redrawn = 0;
  let left = 0;
  for (let chapter_code of object_property_names(by_chapter)) {
    let lower = text_lower_to(chapter_code);
    let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
    let before = await file_read(f_path);
    let pieces = before.split("verse_number:");
    let written = [pieces[0]];
    let chapter_changed = false;
    for (let i = 1; less_than(i, pieces.length); i++) {
      let piece = pieces[i];
      let found = piece.match(/^\s*(\d+)/);
      let b3 = not_equal(found, null);
      assert_json(b3, {
        f_path,
        hint: "a verse block does not open with its number, so its marks cannot be attributed to a verse",
      });
      let verse_number = Number(found[1]);
      let order = by_chapter[chapter_code][verse_number];
      if (equal(order, undefined)) {
        written.push(piece);
        continue;
      }
      let seen = 0;
      let rebuilt = "";
      let rest = piece;
      while (true) {
        let at = rest.indexOf(mark_before);
        if (equal(at, -1)) {
          rebuilt += rest;
          break;
        }
        let taken = order[seen];
        seen += 1;
        rebuilt += rest.slice(0, at);
        let moves = equal(taken, root);
        rebuilt += moves ? mark_after : mark_before;
        if (moves) {
          redrawn += 1;
          chapter_changed = true;
        } else {
          left += 1;
        }
        rest = rest.slice(at + mark_before.length);
      }
      let b4 = equal(seen, order.length);
      assert_json(b4, {
        f_path,
        verse_number,
        text_marks: seen,
        walk_marks: order.length,
        hint: "the file's own text holds a different number of that mark than the collision walk counted, so the two readings disagree about the page and nothing is redrawn",
      });
      written.push(rebuilt);
    }
    if (chapter_changed) {
      let contents = written.join("verse_number:");
      await file_overwrite(f_path, contents);
      chapters_written += 1;
    }
  }
  let r = {
    glyph,
    root,
    glyph_after,
    expected_total,
    chapters_written,
    redrawn,
    left,
  };
  return r;
}
