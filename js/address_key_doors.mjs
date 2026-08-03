import { hash_key_doors } from "./hash_key_doors.mjs";
import { query_key_doors } from "./query_key_doors.mjs";
import { list_concat } from "./list_concat.mjs";
export function address_key_doors() {
  "Every call that takes the name of a field of a page address first and does something with it there - both halves of an address, the part after the hash and the part after the question mark.";
  "The two halves are read by different walks and each names its own doors, so they are joined here rather than written out together. What is asked of a door is the same question for both, and asking it of a joined list is what stops the answer being had for one half and quietly never asked for the other.";
  "The field stands first in every one of them today. That is why they can be asked about together at all, and it is the thing to check before adding a fourth - a door taking the field somewhere else would need its place carried alongside its name.";
  let hash = hash_key_doors();
  let query = query_key_doors();
  let doors = list_concat(hash, query);
  return doors;
}
