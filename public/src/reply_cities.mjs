import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_cities() {
  marker("1");
  let v = ["bungomain", "lahore"];
  let fn20 = reply_choice(v);
  return fn20;
}
