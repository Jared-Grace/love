import { reply_cant } from "./reply_cant.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_cant_or_cannot() {
  "Somebody saying they cannot do something: can't, cant or cannot.";
  "★ READING CANT THIS WAY COSTS A LITTLE. When the same letters can also be the end of an address, the address costs nothing and so is the reading taken. Alone it still answers, because a cost only ranks two readings of the same letters and never refuses one.";
  function dearer(possibilities) {
    for (let possibility of possibilities) {
      possibility.cost = (possibility.cost || 0) + 1;
    }
  }
  let cant = reply_cant();
  let cant_dearer = reply_on_match(cant, [dearer]);
  let cannot = reply_sequence(["can", "no", "t"]);
  let either = reply_choice([cant_dearer, cannot]);
  return either;
}
