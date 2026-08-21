import { property_get } from "./property_get.mjs";
export function g_arc_lines_by_address(lines) {
  "The lines of one arc keyed by where each one is, so a caller holding an address can reach its writing without walking the list again.";
  "IT HOLDS THE WRITING AND NOT THE LINE, because every caller so far wants the text and the address is already the key. Handing back the whole record would leave each of them reaching one level further in for the only field they came for.";
  let by_address = {};
  for (let line of lines) {
    let address = property_get(line, "address");
    let text = property_get(line, "text");
    by_address[address] = text;
  }
  return by_address;
}
