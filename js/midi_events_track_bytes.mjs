import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { midi_text_meta_bytes } from "./midi_text_meta_bytes.mjs";
import { midi_number_variable_length } from "./midi_number_variable_length.mjs";
export function midi_events_track_bytes(events, name) {
  "writes one whole midi track chunk from events that each carry the tick they happen at and the bytes they are made of";
  "events are put in tick order and an event carrying a lower order number goes first at the same tick which is how a note ends before the next one starts";
  let ordered = events.slice();
  function events_earliest_first(one, two) {
    let r = equal(one.tick, two.tick)
      ? subtract(one.order, two.order)
      : subtract(one.tick, two.tick);
    return r;
  }
  ordered.sort(events_earliest_first);
  let result = midi_text_meta_bytes(3, name);
  let body = [0].concat(result);
  let tick_before = 0;
  for (let event of ordered) {
    let value = subtract(event.tick, tick_before);
    let parts = midi_number_variable_length(value);
    body = body.concat(parts, event.bytes);
    tick_before = event.tick;
  }
  body = body.concat([0, 255, 47, 0]);
  let head = Buffer.alloc(8);
  head.write("MTrk", 0, "ascii");
  head.writeUInt32BE(body.length, 4);
  let v = Buffer.from(body);
  let r2 = Buffer.concat([head, v]);
  return r2;
}
