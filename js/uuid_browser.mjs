import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
export function uuid_browser() {
  "A fresh identifier, from the browser's own randomness.";
  "crypto.randomUUID exists ONLY in a SECURE CONTEXT - https, or localhost. Reached over plain http on a home network, which is how a phone opens the dev site (a phone has no localhost to develop from), it is simply not there, and calling it throws before anything is drawn. That is not a phone quirk to be worked around at the one place it was noticed: the page dies the same way on any http address, so the door itself answers in both worlds.";
  "crypto.getRandomValues has no such restriction, so the fallback is as random as the first path - the same source, read one byte at a time and shaped into a version 4 identifier by hand. The shape is walked as text rather than assembled from bits so that no part of this reads as clever; an x is any hex digit, the 4 is the version, and a y is the two bits every version 4 identifier fixes, which the four letters 8 9 a b spell out.";
  let ready = crypto.randomUUID;
  if (ready) {
    let v = crypto.randomUUID();
    return v;
  }
  let shape = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let hex = "0123456789abcdef";
  let variants = "89ab";
  let rolls = new Uint8Array(shape.length);
  crypto.getRandomValues(rolls);
  let built = "";
  for (let place = 0; less_than(place, shape.length); place++) {
    let mark = shape[place];
    let roll = rolls[place];
    if (equal(mark, "x")) {
      built = built + hex[modulo(roll, hex.length)];
      continue;
    }
    if (equal(mark, "y")) {
      built = built + variants[modulo(roll, variants.length)];
      continue;
    }
    built = built + mark;
  }
  return built;
}
