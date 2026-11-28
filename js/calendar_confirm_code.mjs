import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
export function calendar_confirm_code(id) {
  arguments_assert(arguments, 1);
  ("The short code a guest sends the host from their own WhatsApp to prove the number they booked with is theirs, read off the meeting's random id, so nothing else has to be drawn or stored to make it: PRAY- and 4 letters or digits.");
  ("The signs leave out 0, O, 1 and I, which are misread when typed from a phone screen.");
  ('★ NO CODE SPELLS A WORD (human, 2026-11-28: "do the confirm code numbers exclude bad words or names? EVIL 3V1L DEVI DMON ... or all recognizable english?"): every vowel is left out - A, E, U and Y with I and O - and so are 3 and 4, which read as E and A. An English word needs a vowel, so none can be spelled, bad or good, and neither can a name.');
  ("Two waiting meetings sharing one only matter if they also share the guest's number, since a code confirms only together with the number it came from. A code is stored when it is made, so a code handed out under the old signs still confirms.");
  ('NO 666 EITHER (human, 2026-11-28: "what about 666?"): 6 is left out altogether, so the number cannot be spelled anywhere in a code. 25 signs to the fourth is about 390 thousand codes.');
  let signs = "25789BCDFGHJKLMNPQRSTVWXZ";
  let hex = String(id)
    .replace(/[^0-9a-fA-F]/g, "")
    .slice(0, 6);
  let left = parseInt(hex, 16);
  let code = "PRAY-";
  for (let i = 0; less_than(i, 4); i++) {
    code += signs[modulo(left, signs.length)];
    let p = divide(left, signs.length);
    left = floor(p);
  }
  return code;
}
