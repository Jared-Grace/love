import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { xml_tags_attributes } from "./xml_tags_attributes.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { error } from "./error.mjs";
import { list_single } from "./list_single.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { ardour_session_tick_seconds } from "./ardour_session_tick_seconds.mjs";
import { ardour_session_start_seconds } from "./ardour_session_start_seconds.mjs";
import { ardour_ticks } from "./ardour_ticks.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { midi_bytes_notes } from "./midi_bytes_notes.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
export async function ardour_session_route_note_starts(
  path_session,
  name_route,
) {
  "$plain path_session";
  "$plain name_route";
  "The second each note of one MIDI track begins in the song exported from an Ardour session, in order and each second once, given the session file and the track's name.";
  "★ ONLY WHERE A NOTE BEGINS IS ANSWERED, NOT HOW LONG IT LASTS. A track written to follow a singer strikes each note where the singer does, but the singer may hold a note longer or shorter than the track does, so the start is the one fact about the singing it can be trusted for.";
  "★ A PART OF A MIDI FILE CUT AWAY IN THE SESSION IS LEFT OUT, and so is a muted part. A region plays only the stretch of its file from where it was trimmed to, so a note outside that stretch is written in the file and never heard.";
  "Two notes struck together, as in a chord, are one moment, so the seconds are rounded to the millisecond and each is kept once.";
  arguments_assert(arguments, 2);
  let text = await file_read(path_session);
  let list = xml_tags_attributes(text, "Route");
  let routes = list_filter_property(list, "name", name_route);
  let left = list_size(routes);
  let b = equal(left, 1);
  if (not(b)) {
    error(
      "this Ardour session has " +
        list_size(routes) +
        " tracks named " +
        name_route,
    );
  }
  let route = list_single(routes);
  let playlist_id = route["midi-playlist"];
  if (equal(playlist_id, undefined)) {
    error("this Ardour track is not a MIDI track: " + name_route);
  }
  let opening = '<Playlist id="' + playlist_id + '"';
  let from = text.indexOf(opening);
  let until = text.indexOf("</Playlist>", from);
  let playlist = text.slice(from, until);
  let regions = xml_tags_attributes(playlist, "Region");
  let sources = xml_tags_attributes(text, "Source");
  let list2 = xml_tags_attributes(text, "Session");
  let session = list_single(list2);
  let folder_session = await path_dirname(path_session);
  let folder_midi = path_join([
    folder_session,
    "interchange",
    session.name,
    "midifiles",
  ]);
  let tick_seconds = ardour_session_tick_seconds(text);
  let start_seconds = ardour_session_start_seconds(text);
  let starts = [];
  for (let region of regions) {
    if (equal(region.muted, "1")) {
      continue;
    }
    let trimmed = ardour_ticks(region.start);
    let [length_text, position_text] = region.length.split("@");
    let length = ardour_ticks(length_text);
    let position = ardour_ticks(position_text);
    let list3 = list_filter_property(sources, "id", region["source-0"]);
    let source = list_single(list3);
    let file_path = path_join([folder_midi, source.name]);
    let bytes = await file_read_buffer(file_path);
    let song = midi_bytes_notes(bytes);
    let file_ticks = divide(1920, song.division);
    for (let track of song.tracks) {
      for (let note of track.notes) {
        let tick = multiply(note.start, file_ticks);
        let before = less_than(tick, trimmed);
        let b2 = add(trimmed, length);
        let after = greater_than_equal(tick, b2);
        if (before || after) {
          continue;
        }
        let left2 = add(position, tick);
        let ticks_from_zero = subtract(left2, trimmed);
        let left3 = multiply(ticks_from_zero, tick_seconds);
        let heard = subtract(left3, start_seconds);
        let back = number_round_places(heard, 3);
        starts.push(back);
      }
    }
  }
  let unique = list_unique(starts);
  list_sort_number(unique);
  return unique;
}
