import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { error } from "./error.mjs";
import { midi_bytes_variable_length } from "./midi_bytes_variable_length.mjs";
import { midi_bytes_event_body } from "./midi_bytes_event_body.mjs";
export function midi_bytes_track_events(bytes, offset_start) {
  "reads one MTrk chunk beginning at the given offset and answers its events stamped with absolute ticks";
  "a status byte under 128 is the running status shorthand meaning the event repeats the kind of the one before it";
  let tag = bytes.toString("ascii", offset_start, offset_start + 4);
  if (not_equal(tag, "MTrk")) {
    error("expected a MTrk track chunk and found something else");
  }
  let length = bytes.readUInt32BE(offset_start + 4);
  let at = offset_start + 8;
  let offset_end = at + length;
  let tick = 0;
  let status_running = 0;
  let events = [];
  while (less_than(at, offset_end)) {
    let delta = midi_bytes_variable_length(bytes, at);
    tick = tick + delta.value;
    at = delta.offset_next;
    let status = bytes[at];
    if (less_than(status, 128)) {
      status = status_running;
    } else {
      at = at + 1;
    }
    if (greater_than_equal(status, 128) && less_than(status, 240)) {
      status_running = status;
    }
    let read = midi_bytes_event_body(bytes, at, status, tick);
    at = read.offset_next;
    if (not_equal(read.event, null)) {
      events.push(read.event);
    }
  }
  let r = {
    events,
    offset_next: offset_end,
  };
  return r;
}
