import { not_equal } from "./not_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { error } from "./error.mjs";
export function midi_bytes_header(bytes) {
  "reads the MThd chunk at the front of a midi file and answers what every later read needs";
  "division is ticks per quarter note while it is positive and smpte framing while it is negative which nothing here reads";
  let tag = bytes.toString("ascii", 0, 4);
  if (not_equal(tag, "MThd")) {
    error("this is not a midi file because it does not begin with MThd");
  }
  let format = bytes.readUInt16BE(8);
  let tracks_count = bytes.readUInt16BE(10);
  let division = bytes.readInt16BE(12);
  if (less_than_equal(division, 0)) {
    error(
      "this midi file counts time in smpte frames and only ticks per quarter note are read here",
    );
  }
  let r = {
    format,
    tracks_count,
    division,
  };
  return r;
}
