import { reply_choice } from "./reply_choice.mjs";
export function reply_cities() {
  let v = ["bungoma", "lahore"];
  let fn = reply_choice(v);
  return fn;
}
