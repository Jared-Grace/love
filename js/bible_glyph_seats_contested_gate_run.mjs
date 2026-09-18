import { bible_glyph_seats_contested } from "./bible_glyph_seats_contested.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_seats_contested_gate_run() {
  "Checks that the record of contested seats still describes the root tables it is a record of - the picture it says a word wears is the picture the table actually seats it under, and every alternative picture it names is one the vocabulary really has.";
  "A RECORD OF A DECISION GOES STALE THE DAY THE DECISION IS CHANGED, AND NOTHING ELSE WOULD SAY SO. The root table is live code and somebody may reseat a word in it years from now; this file is prose about that seat and no page reads it. So a word could quietly come to wear one picture while the only written account of why says it wears another, and the reader that account was written for would be handed a false premise with no way to tell.";
  "THE READER IT PROTECTS IS THE ONE WHO DISAGREES. The whole point of writing the rejected readings down was that a person who objects starts from the alternatives rather than from nothing, and an objection argued against the wrong current seat is worse than no record - it wastes the one reader who was willing to do the work.";
  "AN ALTERNATIVE MAY BE BLANK ON PURPOSE AND A BLANK IS NOT A FAULT. A reading nobody has drawn a picture for is still a reading worth listing, and it is listed with no picture precisely to say so. The group splitter drops blanks by itself, so a blank alternative simply contributes no name to check and needs no test of its own.";
  "A NAMED ALTERNATIVE IS A CLAIM THAT THE PICTURE EXISTS, which is why it is checked as hard as the seated one. Offering somebody a picture the vocabulary does not have is offering them a thing they cannot switch to, and the offer reads as real.";
  "IT PASSES AT ZERO AND HAS NO BASELINE. The record was written the same day this was, so there is nothing to grandfather; a first offender is a genuine first offender and gets refused.";
  let rows = bible_glyph_seats_contested();
  let characters = bible_glyph_characters();
  let known = {};
  for (let character of characters) {
    property_set(known, character.name, true);
  }
  let faults = [];
  let walked = 0;
  for (let row of rows) {
    walked = add(walked, 1);
    let testament_name = bible_chapter_testament_name(row.testament_chapter);
    let roots = bible_glyph_roots_testament_table(testament_name);
    let drawn = bible_glyph_roots_drawn_lookup(roots);
    let seat = property_get_or_null(drawn, row.strong);
    let unseated = null_is(seat);
    if (unseated) {
      let gap = {
        strong: row.strong,
        word: row.word,
        testament_name,
        says: row.seated,
        table: "nothing",
      };
      list_add(faults, gap);
    }
    if (not(unseated)) {
      let agrees = equal(seat, row.seated);
      if (not(agrees)) {
        let moved = {
          strong: row.strong,
          word: row.word,
          testament_name,
          says: row.seated,
          table: seat,
        };
        list_add(faults, moved);
      }
    }
    let offered = [row.seated];
    for (let alternative of row.alternatives) {
      list_add(offered, alternative.glyph);
    }
    for (let field of offered) {
      for (let name of bible_glyph_group_names(field)) {
        let exists = property_exists(known, name);
        if (not(exists)) {
          let absent = {
            strong: row.strong,
            word: row.word,
            glyph: field,
            name,
          };
          list_add(faults, absent);
        }
      }
    }
  }
  let f_name = fn_name("bible_glyph_seats_contested");
  let hint = text_combine_multiple([
    "the record of contested seats no longer matches the root tables - a row whose table field names a different picture is a word that has been reseated since the argument was written, and a row naming a glyph the vocabulary has no character for is offering a reader a picture they cannot have; repair ",
    f_name,
    " so that it describes the seats as they now are, and keep the old reading as an alternative rather than deleting it",
  ]);
  let r = list_empty_is_assert_walked_generic(walked, faults, hint);
  return r;
}
