import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { json_equal } from "./json_equal.mjs";
import { bible_glyph_chapters_decided_redraw } from "./bible_glyph_chapters_decided_redraw.mjs";
export async function bible_glyph_chapters_marks_judged_redraw() {
  "Redraws the marks a reader has judged, verse by verse, from data/bible_glyph_marks_judged.json: each entry names a verse, the marks it drew in page order (was), and the marks it should draw instead (now), over the same pictures.";
  "THE JUDGMENTS ARE DATA, because each is a reading of one sentence against its original words, and a later reader should be able to see and correct one without touching how it is applied.";
  "IT IS SAFE TO RUN AGAIN, and that is why each entry carries both sequences. A judgment that swaps two marks leaves every count exactly as it was, so nothing about the counts could tell a run from a rerun - and a rerun would swap them back. Here a verse already reading now is skipped, a verse reading was is redrawn, and a verse reading anything else stops the run before a word is written, because the page has moved since the judgment was made.";
  "Only the pictures an entry names are compared. A verse may draw other marks between them, and those are neither read nor touched.";
  "All of a verse's marks are rewritten at once by the decided writer, rather than one picture after another, because rewriting one picture first would hand the second rewrite marks it never drew.";
  arguments_assert(arguments, 0);
  let judged = await file_read_json("data/bible_glyph_marks_judged.json");
  let decided = [];
  let already = 0;
  let seen = {};
  for (let entry of judged) {
    let key = entry.chapter_code + ":" + entry.verse_number;
    let b = equal(seen[key], undefined);
    assert_json(b, {
      key,
      hint: "a verse is judged twice; join the two into one entry, since the second would be judged against a page the first has changed",
    });
    seen[key] = true;
    let b2 = equal(entry.was.length, entry.now.length);
    assert_json(b2, {
      key,
      hint: "was and now name a different number of marks, so they cannot be read as one mark becoming another",
    });
    let names = new Set([...entry.was, ...entry.now]);
    let parsed = bible_glyph_chapter(entry.chapter_code);
    function lambda(v) {
      let eq = equal(v.verse_number, entry.verse_number);
      return eq;
    }
    let verse = parsed.verses.find(lambda);
    let b3 = not_equal(verse, undefined);
    assert_json(b3, {
      key,
      hint: "the page has no verse by that number",
    });
    let drawn = [];
    for (let word of verse.words) {
      if (equal(typeof word, "string")) {
        continue;
      }
      for (let part of word) {
        if (equal(typeof part, "string")) {
          continue;
        }
        let name = part.join("+");
        if (names.has(name)) {
          drawn.push(name);
        }
      }
    }
    if (json_equal(drawn, entry.now)) {
      already += 1;
      continue;
    }
    let b4 = json_equal(drawn, entry.was);
    assert_json(b4, {
      key,
      drawn,
      was: entry.was,
      now: entry.now,
      hint: "the verse draws neither what was judged nor what it was judged to become, so the page moved after the judgment - read it again",
    });
    let orders = {};
    for (let i = 0; less_than(i, entry.was.length); i++) {
      orders[entry.was[i]] ??= [];
      orders[entry.was[i]].push(entry.now[i]);
    }
    for (let glyph of object_property_names(orders)) {
      decided.push({
        chapter_code: entry.chapter_code,
        verse_number: entry.verse_number,
        glyph,
        order: orders[glyph],
      });
    }
  }
  let written = await bible_glyph_chapters_decided_redraw(decided);
  let r = {
    judged: judged.length,
    already,
    chapters_written: written.chapters_written,
    redrawn: written.redrawn,
  };
  return r;
}
