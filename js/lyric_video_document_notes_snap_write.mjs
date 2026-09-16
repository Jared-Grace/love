import { numbers_apart } from "./numbers_apart.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { floor } from "./floor.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { ardour_session_route_note_starts } from "./ardour_session_route_note_starts.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_last } from "./list_last.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { numbers_nearest_in_order } from "./numbers_nearest_in_order.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { list_filter } from "./list_filter.mjs";
export async function lyric_video_document_notes_snap_write(path_document) {
  "$plain path_document";
  "Moves the moment each word of a song's timing document begins onto a note of the song's melody, read from the Ardour session the song was made in, and writes the document back.";
  "★ WHICH SESSION AND WHICH TRACKS FOLLOW THE SINGER ARE WRITTEN IN THE DOCUMENT, NOT GUESSED. A session holds many MIDI tracks, and a busy accompaniment lies near every word as often as the melody does, so no count of near notes tells them apart. A person who made the song knows in a moment, so the document holds it as ardour: { session, tracks }, and a document without it is refused.";
  "★ ONLY WHERE A WORD BEGINS IS MOVED. A note says where the singer strikes it but not how long it is held, so each word keeps the end the aligner heard, pushed later only when it would otherwise end before it begins.";
  "★ THE WORDS COME FIRST FROM THE ALIGNER, WHICH IS WHAT THIS CORRECTS. The aligner hears roughly where each word is; the melody says exactly where a word can be, so each word goes to the note nearest what was heard while every word keeps a note of its own and the order they are sung in.";
  "★ A MELODY THAT DOES NOT FOLLOW THE WORDS IS REFUSED. When the words have to move a quarter of a second or more on the middle word to find notes, the tracks named are not the singer's, and a document quietly moved onto them would light words up at the wrong moments.";
  "Several tracks may be named, such as the melody doubled at another octave, and their notes are taken together; notes struck within thirty milliseconds of each other are one moment.";
  "Running it again changes nothing, because words already on notes are already as near them as they can be.";
  arguments_assert(arguments, 1);
  let document = await file_read_json(path_document);
  let ardour = document.ardour;
  if (equal(ardour, undefined)) {
    error(
      "this song's document does not say its Ardour session and melody tracks; add ardour: { session, tracks }",
    );
  }
  let starts_all = [];
  for (let name_route of ardour.tracks) {
    let starts = await ardour_session_route_note_starts(
      ardour.session,
      name_route,
    );
    list_add_multiple(starts_all, starts);
  }
  list_sort_number(starts_all);
  let notes = [];
  for (let start of starts_all) {
    let left = list_size(notes);
    let apart =
      equal(left, 0) || greater_than(subtract(start, list_last(notes)), 0.03);
    if (apart) {
      notes.push(start);
    }
  }
  let words = [];
  for (let line of document.lines) {
    if (equal(line.words, undefined)) {
      let f_name = fn_name("lyric_video_document_words_write");
      error(
        text_combine_multiple([
          "a line of this song has no words timed yet, which ",
          f_name,
          " gives it: ",
        ]) + line.text,
      );
    }
    list_add_multiple(words, line.words);
  }
  let left2 = list_size(words);
  if (equal(left2, 0)) {
    error("this song's document has no words to move");
  }
  let heard = list_map_property(words, "start");
  let placed = numbers_nearest_in_order(heard, notes);
  let shifts = [];
  function word_place(word, index) {
    let start = placed[index];
    let screens = numbers_apart(start, word.start);
    shifts.push(screens);
    word.start = start;
    if (less_than(word.end, start)) {
      word.end = start;
    }
  }
  words.forEach(word_place);
  list_sort_number(shifts);
  let top = list_size(shifts);
  let p = divide(top, 2);
  let middle = shifts[floor(p)];
  if (greater_than_equal(middle, 0.25)) {
    error(
      "the middle word would move " +
        middle +
        " seconds, so these tracks do not follow the singer: " +
        ardour.tracks.join(", "),
    );
  }
  document.words_from = "notes";
  await file_overwrite_json(path_document, document);
  function over(seconds) {
    let b = greater_than(seconds, 0.2);
    return b;
  }
  let list = list_filter(shifts, over);
  let value = list_last(shifts);
  let r = {
    path_document,
    words: list_size(words),
    notes: list_size(notes),
    shift_middle: number_round_places(middle, 3),
    shifts_over_fifth_second: list_size(list),
    shift_largest: number_round_places(value, 3),
  };
  return r;
}
