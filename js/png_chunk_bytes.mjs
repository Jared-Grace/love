import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export function png_chunk_bytes(buffer_png, type_text) {
  "hand back one whole chunk of a PNG - its length, its name, what it holds and its checksum, exactly as they sit on disk - or nothing at all when the picture carries no chunk of that name";
  "the whole chunk is handed back rather than only what it holds, because the caller putting one into another picture must not have to build the four bytes of length and the four of checksum back up again - the bytes that were valid where they came from are valid where they are going";
  "a PNG is eight bytes of signature and then a run of chunks, each one four bytes of length, four of name, that many bytes, and four of checksum. Nothing here decodes a picture: the run is walked and the names are read, so a chunk holding something this repo has no reader for is still reachable";
  "the walk stops at the end marker rather than running to the end of the file, because anything written after it is not part of the picture";
  "A FILE THAT IS NOT A PNG IS ANSWERED WITH NOTHING RATHER THAN A THROW, because this is now reached from every picture rewrite in the repo and not only from a caller that knew what it was holding. The walk reads a length out of four bytes it has not checked are there, so a truncated or foreign file would have thrown a range error from inside a step that was only carrying credentials across - a failure with nothing to do with what the caller had asked for. A real PNG always has its eight bytes of header waiting at the start of every chunk, so the check costs a valid picture nothing.";
  let position = 8;
  while (less_than(position, buffer_png.length)) {
    if (less_than(buffer_png.length, position + 8)) {
      return null;
    }
    let chunk_size = buffer_png.readUInt32BE(position);
    let type_found = buffer_png.toString("latin1", position + 4, position + 8);
    let position_next = position + 12 + chunk_size;
    if (equal(type_found, type_text)) {
      let found = buffer_png.subarray(position, position_next);
      return found;
    }
    if (equal(type_found, "IEND")) {
      return null;
    }
    position = position_next;
  }
  return null;
}
