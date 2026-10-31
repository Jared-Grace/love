import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { word_root_irregulars } from "./word_root_irregulars.mjs";
import { property_exists } from "./property_exists.mjs";
export function word_root_est_past_or_null(letters) {
  "The root of an old second-person past - thou sentest, thou toldest, thou madest - or null where the word is not one.";
  "The King James Bible puts est on the past as well as on the present, and a past that changes shape has no ending left to cut once the est is gone: sentest loses its est and leaves sent, which only the irregular list knows belongs to send. So what is left is looked up there, as it stands, with an e put back (madest is made), and with a doubled letter undone (begannest is began).";
  "Only est is read this way and never eth. Thou foundest is the past of find, but he foundeth is the present of found, and a past never takes eth.";
  "Six letters at least, so that what is left is three letters long, because words like rest and lest would otherwise be asked about r and l.";
  let b = letters.endsWith("est");
  if (not(b) || less_than(letters.length, 6)) {
    return null;
  }
  let stem = letters.slice(0, -3);
  let tries = [stem, stem + "e"];
  let left = stem.slice(-1);
  let right = stem.slice(-2, -1);
  if (equal(left, right)) {
    let v = stem.slice(0, -1);
    tries.push(v);
  }
  let irregulars = word_root_irregulars();
  function known(t) {
    let r = property_exists(irregulars, t);
    return r;
  }
  let found = tries.find(known);
  if (found) {
    let r2 = irregulars[found];
    return r2;
  }
  return null;
}
