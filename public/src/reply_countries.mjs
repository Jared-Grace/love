import { marker } from "../../../love/public/src/marker.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_countries() {
  marker("1");
  let v = ["kenya", "pakistan"];
  let countries = reply_choice(v);
  return countries;
}
