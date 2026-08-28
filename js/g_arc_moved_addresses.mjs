import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function g_arc_moved_addresses(moved) {
  "Just the addresses out of a moved-lines report - every line that changed, vanished or appeared, named and nothing more.";
  "THE THREE ARE ONE LIST HERE BECAUSE A READER TREATS THEM AS ONE. What a second reading needs is where to look, and a line that vanished needs looking at exactly as much as one that was reworded. The report keeps them apart because judging them differs; asking where to look does not.";
  "IT DOES NOT COUNT, it names. A count answers how much is left and nothing about what, and the caller that wanted a count can take the size of this - whereas a caller handed a number can never get the addresses back.";
  let addresses = [];
  let groups = ["changed", "vanished", "appeared"];
  for (let group of groups) {
    let lines = property_get(moved, group);
    for (let line of lines) {
      let address = property_get(line, "address");
      list_add(addresses, address);
    }
  }
  return addresses;
}
