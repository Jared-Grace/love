import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_confirm_code(id) {
  arguments_assert(arguments, 1);
  ("The short code a guest sends the host from their own WhatsApp to prove the number they booked with is theirs, read off the meeting's random id, so nothing else has to be drawn or stored to make it: PRAY- and 4 letters or digits.");
  ("The 32 signs leave out 0, O, 1 and I, which are misread when typed from a phone screen. 4 signs is about a million codes; two waiting meetings sharing one only matter if they also share the guest's number, since a code confirms only together with the number it came from.");
  let signs = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  let hex = String(id)
    .replace(/[^0-9a-fA-F]/g, "")
    .slice(0, 5);
  let bits = parseInt(hex, 16);
  let code = "PRAY-";
  for (let i = 0; less_than(i, 4); i++) {
    let right = multiply(i, 5);
    code += signs[(bits >> subtract(15, right)) & 31];
  }
  return code;
}
