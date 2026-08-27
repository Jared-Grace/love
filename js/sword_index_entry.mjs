import { multiply } from "./multiply.mjs";
export function sword_index_entry(index_bytes, position) {
  "$plain index_bytes";
  "$plain position";
  "Where one verse of a Sword module is kept: which block holds it, how far into that block it starts, and how long it is.";
  "A Sword module does not name its verses. It writes one fixed ten-byte record per verse, in the order the King James numbering puts them, and the reader is expected to know that order. So a position here is a place in that numbering rather than anything a person would call a verse, and turning a position into a name is somebody else's job.";
  "TEN BYTES, AND THE LAST TWO ARE A SHORT RATHER THAN A WORD. The block and the start are four bytes each and the length is two, which is the whole record - so a reader that treated the length as four bytes would read two bytes of the next verse's block number into it and ask for a verse tens of thousands of characters long.";
  "Little end first, because that is what the format writes and it does not follow the machine it is read on.";
  let at = multiply(position, 10);
  let block = index_bytes.readUInt32LE(at);
  let start = index_bytes.readUInt32LE(at + 4);
  let size = index_bytes.readUInt16LE(at + 8);
  let r = {
    block: block,
    start: start,
    size: size,
  };
  return r;
}
