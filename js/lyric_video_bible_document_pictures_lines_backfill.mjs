import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { list_add } from "./list_add.mjs";
import { path_basename } from "./path_basename.mjs";
import { path_extension_replace } from "./path_extension_replace.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_bible_document_pictures_lines_backfill(
  version,
  book_code,
  chapter_number,
  seconds_lead,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "$plain seconds_lead";
  "Reads back, out of the times a person already typed against each picture of a passage, the one authored fact underneath them - which line that picture comes up on - and writes it down so the times need never be typed again.";
  "★ IT RUNS BACKWARDS THROUGH THE DERIVATION THE WRITER RUNS FORWARDS, WHICH IS WHAT MAKES IT CHECKABLE. The psalms drawn before this carry the seconds themselves, copied off their lines by hand. Every one of those seconds is some line's start with the lead taken off it, so the line can be found again by looking for the second - and once it is written down, running the forward pass must reproduce exactly the file that was already there. A migration that cannot be checked is a migration that gets believed; this one either lands on the same numbers or names the picture it could not place.";
  "★ THE LEAD HAS TO BE HANDED IN BECAUSE IT DIFFERS BETWEEN PSALMS AND NOTHING RECORDS IT. Psalm 121 was written with each picture changing on its line; Psalm 148 was written with each picture four tenths of a second ahead of it, every time. Neither document says so anywhere - the lead only exists as a constant difference between two columns of numbers. So it is found by trying a lead and seeing whether every picture lands, which is a thing a person does once per psalm and never again.";
  "★ NOTHING IS WRITTEN UNLESS EVERY PICTURE IS PLACED. A picture whose second matches no line is a picture whose window was never on a line at all, or a lead that is not this psalm's lead, and both are worth being told about rather than rounded away. Guessing here would write a number that looks authored and was invented.";
  "THE FIRST PICTURE IS ALLOWED TO BEGIN BEFORE ITS LINE DOES. It is written to come up at nothing so that the video does not open on black, and nothing is rarely any line's start once the lead is taken off, so it alone is placed at the opening line rather than by its second.";
  "THE NAME IS TAKEN OFF THE PICTURE'S OWN FILE, because that is where it has been kept until now. The path was typed by hand and the last part of it is the name somebody chose; lifting it out is what lets the path become worked out from the name instead of the other way round.";
  arguments_assert(arguments, 4);
  let lead = Number(seconds_lead);
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let there = await file_exists(path_document);
  if (not(there)) {
    let undrafted = {
      path_document,
      pictures: 0,
      written: false,
      unplaced: [],
      why: "this passage has no lyric video document yet",
    };
    return undrafted;
  }
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let none = list_empty_is(pictures);
  if (none) {
    let bare = {
      path_document,
      pictures: 0,
      written: false,
      unplaced: [],
      why: "this document asks for no pictures",
    };
    return bare;
  }
  let lines = document.lines;
  let unplaced = [];
  let found = [];
  let count = pictures.length;
  for (let index = 0; less_than(index, count); index += 1) {
    let picture = pictures[index];
    let first = equal(index, 0);
    let at = -1;
    for (let number = 0; less_than(number, lines.length); number += 1) {
      let value = subtract(lines[number].start, lead);
      let wanted = number_round_places(value, 3);
      let same = equal(wanted, picture.start);
      if (same) {
        at = number;
      }
    }
    let opening = 0;
    let missed = equal(at, -1);
    let placed = first && missed ? opening : at;
    let lost = equal(placed, -1);
    if (lost) {
      list_add(unplaced, picture);
    }
    list_add(found, placed);
  }
  let b = list_empty_is(unplaced);
  let missing = not(b);
  if (missing) {
    let unfinished = {
      path_document,
      pictures: count,
      written: false,
      seconds_lead: lead,
      unplaced,
      why: "these pictures begin at a second that is no line's start once the lead is taken off",
    };
    return unfinished;
  }
  for (let index = 0; less_than(index, count); index += 1) {
    let picture = pictures[index];
    let base = await path_basename(picture.path);
    picture.name = path_extension_replace(base, "");
    picture.line = found[index];
  }
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    pictures: count,
    written: true,
    seconds_lead: lead,
    unplaced,
    lines_found: found,
    why: null,
  };
  return r;
}
