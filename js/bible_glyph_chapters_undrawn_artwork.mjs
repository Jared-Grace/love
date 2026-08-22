import { bible_glyph_chapters_undrawn_artwork_carries } from "./bible_glyph_chapters_undrawn_artwork_carries.mjs";
import { bible_glyph_chapters_undrawn_artwork_words } from "./bible_glyph_chapters_undrawn_artwork_words.mjs";
import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { bible_glyph_chapters_undrawn_commonest } from "./bible_glyph_chapters_undrawn_commonest.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_artwork_names_available } from "./bible_glyph_artwork_names_available.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_take } from "./list_take.mjs";
import { text_words } from "./text_words.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_undrawn_artwork(count) {
  "$plain count";
  "the count is how many words to weigh. It is a number and nothing that runs.";
  "The commonest words this picture Bible still leaves in English, each one told apart by whether the artwork set already holds a picture that could draw it.";
  "IT SORTS A CANDIDATE LIST INTO TWO KINDS OF WORK, and they are not the same size. A word the set already has a picture for is somebody choosing between a handful of names for ten minutes; a word it has nothing for waits on a picture being drawn, which nobody here can do. Ranked together they read as one list of equal jobs, and the second kind quietly makes the first look slower than it is.";
  "IT IS HERE BECAUSE THE LOOKUP WAS BEING DONE BY HAND AND WENT WRONG. Two glyphs were written into the vocabulary without anyone asking the set whether it held them, and the artwork gate went red - a mark that would have rendered from the reader's own device font while every neighbouring mark came from repo artwork. The check costs one listing for the whole list, which is cheaper than doing it once per word and far cheaper than not doing it.";
  "IT ASKS THE SET ONCE AND MATCHES THE REST HERE, rather than asking per word. The neighbourhood search next door reads the whole listing every time it is called, which is right for one word typed at a command line and is a listing per candidate when a list of forty is being weighed.";
  "IT SAYS WHICH MATCHES ARE ALREADY SEATED IN THIS REPO, because that changes what the row means. A picture this Bible already draws for another word is a picture the reader has already met, so seating it for a second word costs them nothing new to learn - and reusing a mark a reader knows is worth more than a mark that is merely available.";
  "A MATCH IS A LEAD AND NEVER AN ANSWER. The set is searched for the English the interlinear happened to print, so a word whose picture is obvious under another name comes back empty, and a word that shares a syllable with a fruit comes back with the fruit. What this rules out is the expensive mistake - writing a glyph the set cannot draw - and it does not rule in anything.";
  "IT CARRIES THE WORD'S OWN NUMBER AND ITS TESTAMENT, which the reading upstairs already knows and this used to drop. A row of this report is read by somebody about to write a row into a root table, and that row is keyed by the number - so dropping it made every seating start with a lookup by hand, which is the exact move whose going wrong is written two paragraphs up. The testament travels with it because the two numberings collide, and a number without one names two different words.";
  let report = await bible_glyph_chapters_undrawn_commonest(count);
  let candidates = property_get(report, "commonest");
  let names = await bible_glyph_artwork_names_available();
  let bridged = {};
  for (let entry of bible_glyph_artwork_names()) {
    let property_name = text_lower_to(entry.asset);
    property_set(bridged, property_name, entry.glyph);
  }
  let lowered_names = [];
  for (let name of names) {
    let lowered = text_lower_to(name);
    list_add(lowered_names, {
      name,
      lowered,
      words: text_words(lowered),
    });
  }
  let weighed = [];
  for (let candidate of candidates) {
    let gloss = property_get(candidate, "gloss");
    let words = bible_glyph_chapters_undrawn_artwork_words(gloss);
    let assets = [];
    let seated = [];
    for (let entry of lowered_names) {
      let carries = bible_glyph_chapters_undrawn_artwork_carries(
        entry.words,
        words,
      );
      if (not(carries)) {
        continue;
      }
      list_add(assets, entry.name);
      let glyph = property_or_null(bridged, entry.lowered);
      let already = null_is(glyph);
      if (not(already)) {
        list_add(seated, glyph);
      }
    }
    list_add(weighed, {
      gloss,
      strong: property_get(candidate, "strong"),
      testament: property_get(candidate, "testament"),
      original: property_get(candidate, "original"),
      occurrences: property_get(candidate, "occurrences"),
      chapters: property_get(candidate, "chapters"),
      assets: list_take(assets, 6),
      assets_found: assets.length,
      seated,
    });
  }
  let drawable = [];
  let needs_drawing = [];
  for (let row of weighed) {
    let none = property_list_empty_is(row, "assets");
    if (none) {
      list_add(needs_drawing, row);
      continue;
    }
    list_add(drawable, row);
  }
  let r = {
    weighed: weighed.length,
    drawable_count: drawable.length,
    needs_drawing_count: needs_drawing.length,
    drawable,
    needs_drawing,
  };
  return r;
}
