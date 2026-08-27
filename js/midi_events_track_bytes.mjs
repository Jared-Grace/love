import { midi_text_meta_bytes } from "./midi_text_meta_bytes.mjs";
import { midi_number_variable_length } from "./midi_number_variable_length.mjs";
export function midi_events_track_bytes(events, name) {
  "writes one whole midi track chunk from events that each carry the tick they happen at and the bytes they are made of";
  "events are put in tick order and an event carrying a lower order number goes first at the same tick which is how a note ends before the next one starts";
  let ordered = events.slice();
  ordered.sort(function events_earliest_first(one, two) {
    return one.tick === two.tick ? one.order - two.order : one.tick - two.tick;
  });
  let body = [0].concat(midi_text_meta_bytes(3, name));
  let tick_before = 0;
  for (let event of ordered) {
    body = body.concat(
      midi_number_variable_length(event.tick - tick_before),
      event.bytes,
    );
    tick_before = event.tick;
  }
  body = body.concat([0, 255, 47, 0]);
  let head = Buffer.alloc(8);
  head.write("MTrk", 0, "ascii");
  head.writeUInt32BE(body.length, 4);
  return Buffer.concat([head, Buffer.from(body)]);
}
