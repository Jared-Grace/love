import { multiply } from "./multiply.mjs";
export function sword_block_bounds(blocks_bytes, block) {
  "$plain blocks_bytes";
  "$plain block";
  "Where one compressed block of a Sword module sits in the file that holds them all, and how many bytes of it there are.";
  "A module keeps its text as a few dozen compressed blocks laid end to end, one per book, and a separate list saying where each begins. Twelve bytes per block: where it starts, how long it is compressed, and how long it comes out. The third is not needed to read it - undoing the compression answers that - so it is not taken out here.";
  "A BLOCK IS UNDONE ONCE AND ITS VERSES CUT OUT OF THE RESULT. Undoing it again per verse would be a few dozen decompressions turned into thirty one thousand, which is the difference between a reading that takes a moment and one that takes minutes.";
  let at = multiply(block, 12);
  let offset = blocks_bytes.readUInt32LE(at);
  let compressed = blocks_bytes.readUInt32LE(at + 4);
  let r = {
    offset: offset,
    compressed: compressed,
  };
  return r;
}
