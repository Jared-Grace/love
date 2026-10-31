import { greater_than } from "./greater_than.mjs";
export function word_root_e_drop(cut) {
  "A root with its trailing e taken off, where more than three letters would be left.";
  "Love, loves and loved would otherwise reach love, love and lov, so the one form that lost its e to an ending would fail to meet its own word. Both sides of every comparison lose it together, so dropping it costs nothing - and a root read from the irregular list has to lose it too, or give would never meet giveth, which reaches giv by its ending.";
  if (cut.endsWith("e") && greater_than(cut.length, 3)) {
    let shorter = cut.slice(0, -1);
    return shorter;
  }
  return cut;
}
