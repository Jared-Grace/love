import { divide_floor } from "./divide_floor.mjs";
import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { midi_bytes_variable_length } from "./midi_bytes_variable_length.mjs";
export function midi_bytes_event_body(bytes, offset, status, tick) {
  "reads one midi event standing after its status byte and answers the event plus where the next one starts";
  "an event nothing here reads answers as nothing so the walk above can step past it without knowing what it was";
  let at = offset;
  let left = divide_floor(status, 16);
  let high = multiply(left, 16);
  let channel = modulo(status, 16);
  if (equal(status, 255)) {
    let meta_type = bytes[at];
    let counted = midi_bytes_variable_length(bytes, at + 1);
    let data_start = counted.offset_next;
    let data_end = data_start + counted.value;
    let v = bytes.subarray(data_start, data_end);
    let numbers = Array.from(v);
    let event = {
      tick,
      kind: "meta",
      meta_type,
      numbers,
    };
    let r = {
      event,
      offset_next: data_end,
    };
    return r;
  }
  if (equal(status, 240) || equal(status, 247)) {
    let counted = midi_bytes_variable_length(bytes, at);
    let r2 = {
      event: null,
      offset_next: counted.offset_next + counted.value,
    };
    return r2;
  }
  if (equal(high, 144) || equal(high, 128)) {
    let pitch = bytes[at];
    let velocity = bytes[at + 1];
    let sounding = equal(high, 144) && greater_than(velocity, 0);
    let kind = sounding ? "note_on" : "note_off";
    let event = {
      tick,
      kind,
      channel,
      pitch,
      velocity,
    };
    let r3 = {
      event,
      offset_next: at + 2,
    };
    return r3;
  }
  if (equal(high, 192) || equal(high, 208)) {
    let r4 = {
      event: null,
      offset_next: at + 1,
    };
    return r4;
  }
  let r5 = {
    event: null,
    offset_next: at + 2,
  };
  return r5;
}
