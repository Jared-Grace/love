import { reply_cant } from "./reply_cant.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_cantonment() {
  "A cantonment as written at the end of an address in Pakistan or India: cantonment, cantt or cant.";
  let cant = reply_cant();
  let word = reply_choice([cant, "cantonment", "cantt"]);
  return word;
}
