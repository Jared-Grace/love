import { bible_glyph_roots_marks_edges } from "./bible_glyph_roots_marks_edges.mjs";
import { bible_glyph_chapters_marks_edges } from "./bible_glyph_chapters_marks_edges.mjs";
import { list_concat } from "./list_concat.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_marks_free_for_groups() {
  "The pictures this Bible can write that no word ever ends with and no word ever begins with - the only pool a new group of pictures can safely be seated out of - with what the artwork set calls each one.";
  "A GROUP IS SAFE ONLY IF ONE OF ITS HALVES CANNOT REACH A WORD EDGE. Pictures side by side are the whole of the writing system and a group has no mark of its own, so a group of two can be spelled by accident wherever some word ends in its first picture and some word begins with its second. Nothing can put a word in front of a picture no word ends with, and nothing behind a picture no word begins with. Every one of the ninety four pictures the tables already seat is both, so a safe group has to reach outside them, and this is what is out there.";
  "IT ASKS THE WRITTEN CHAPTERS AS WELL AS THE TABLES, and that is the half a reading of the tables alone would get wrong. A verse can put a picture into a word directly, without any root being seated on it, and that picture is then standing at a word edge on a page whatever the tables say. A pool built from the tables alone would hand back a picture that is already unsafe and would do it silently - which is the exact shape of the mistake this whole family of readings exists to catch.";
  "BOTH ENDS DISQUALIFY, rather than only the end that matters for the half being chosen. Keeping the two apart would be more precise and would be false comfort: a picture free at one end today is one seated word away from being free at neither, and a pool that has to be re-derived every time somebody seats an ordinary word is a pool nobody will trust. A picture that reaches no edge at all stays safe whichever half of a group it is put in.";
  "WHAT THE ARTWORK SET CALLS IT TRAVELS WITH IT, because a picture with no artwork decision cannot be seated without turning a gate red, and a pool that made somebody look each name up one at a time would be half an answer. A picture the set has no name for still belongs here - it is free, and what it costs is a drawing rather than a rethink - so the missing name is reported rather than the picture being dropped.";
  "IT COUNTS THE EDGES IT FOUND beside the pool, so a full pool can be told from an empty walk. Every picture in the vocabulary comes back as free the moment the walk stops reaching the tables and the chapters, and that answer reads as good news - a large pool of safe choices - while meaning the opposite.";
  arguments_assert(arguments, 0);
  let table_edges = bible_glyph_roots_marks_edges();
  let chapter_edges = bible_glyph_chapters_marks_edges();
  let edges = list_concat(table_edges, chapter_edges);
  let edges_count = list_size(edges);
  let edges_seen = {};
  for (let edge of edges) {
    property_set(edges_seen, edge, true);
  }
  let artwork = {};
  for (let entry of bible_glyph_artwork_names()) {
    let glyph_name = property_get(entry, "glyph");
    let set_name = property_get(entry, "asset");
    property_set(artwork, glyph_name, set_name);
  }
  let characters = bible_glyph_characters();
  let free = [];
  for (let character of characters) {
    let name = property_get(character, "name");
    let at_an_edge = property_exists(edges_seen, name);
    if (at_an_edge) {
      continue;
    }
    list_add(free, {
      name,
      character: property_get(character, "character"),
      artwork_name: property_get_or_null(artwork, name),
    });
  }
  let r = {
    vocabulary: list_size(characters),
    edges_count,
    free_count: list_size(free),
    free,
  };
  return r;
}
