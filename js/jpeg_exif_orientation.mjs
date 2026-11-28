import { less_than_equal } from "./less_than_equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
export function jpeg_exif_orientation(buffer) {
  "$plain buffer";
  "The turn a JPEG's camera note asks for, as the EXIF orientation number: 1 upright, 3 upside down, 6 a quarter turn right, 8 a quarter turn left - or 0 when the file carries no note. A phone often stores its pixels sideways and leaves this note to say how to show them; a page or a site that ignores the note shows the photo sideways.";
  "Read straight from the bytes, walking the file's markers to the EXIF block and its first list of tags, so nothing has to be installed and no picture is decoded.";
  let i = 2;
  while (less_than_equal(i + 4, buffer.length)) {
    if (not_equal(buffer[i], 0xff)) {
      let r = 0;
      return r;
    }
    let marker = buffer[i + 1];
    let length = buffer.readUInt16BE(i + 2);
    if (
      equal(marker, 0xe1) &&
      equal(buffer.toString("ascii", i + 4, i + 8), "Exif")
    ) {
      let start = i + 10;
      let left = buffer.toString("ascii", start, start + 2);
      let little = equal(left, "II");
      function read16(at) {
        let r2 = little ? buffer.readUInt16LE(at) : buffer.readUInt16BE(at);
        return r2;
      }
      function read32(at) {
        let r3 = little ? buffer.readUInt32LE(at) : buffer.readUInt32BE(at);
        return r3;
      }
      let tags = start + read32(start + 4);
      let count = read16(tags);
      for (let k = 0; less_than(k, count); k++) {
        let entry = tags + 2 + multiply(k, 12);
        let left2 = read16(entry);
        if (equal(left2, 0x0112)) {
          let r4 = read16(entry + 8);
          return r4;
        }
      }
      let r5 = 0;
      return r5;
    }
    if (equal(marker, 0xda)) {
      let r6 = 0;
      return r6;
    }
    i = i + 2 + length;
  }
  let r7 = 0;
  return r7;
}
