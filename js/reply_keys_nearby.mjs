import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export function reply_keys_nearby() {
  "Which letters a finger can reach by mistake instead of the one it meant, read straight off the three letter rows of a keyboard. Answers a letter with the set of letters touching it.";
  "★ EACH ROW SITS A LITTLE TO THE RIGHT OF THE ONE ABOVE IT, and getting that offset backwards is silent. The key above this one is at the same place along its row or one further on; the key below is at the same place or one further back. Written the other way round the table says `n` sits under `g` and `f`, and `kejya` stops reading as `kenya` - which is exactly how the mistake was found.";
  "Only the letters are here. Digits are a fourth row and no word in these rules holds one, and the punctuation keys are dropped before a message is ever looked at.";
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let nearby = new Map();
  let r = 0;
  while (less_than(r, rows.length)) {
    let row = rows[r];
    let c = 0;
    while (less_than(c, row.length)) {
      let here = row[c];
      let touching = [];
      if (greater_than(c, 0)) {
        touching.push(row[subtract(c, 1)]);
      }
      if (less_than(c + 1, row.length)) {
        touching.push(row[c + 1]);
      }
      if (greater_than(r, 0)) {
        let above = rows[subtract(r, 1)];
        if (less_than(c, above.length)) {
          touching.push(above[c]);
        }
        if (less_than(c + 1, above.length)) {
          touching.push(above[c + 1]);
        }
      }
      if (less_than(r + 1, rows.length)) {
        let below = rows[r + 1];
        if (less_than(c, below.length)) {
          touching.push(below[c]);
        }
        if (greater_than(c, 0) && less_than(subtract(c, 1), below.length)) {
          touching.push(below[subtract(c, 1)]);
        }
      }
      nearby.set(here, new Set(touching));
      c = c + 1;
    }
    r = r + 1;
  }
  return nearby;
}
