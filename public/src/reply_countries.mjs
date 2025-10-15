import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_countries() {
  marker("1");
  let v = ["kenya", "pakistan"];
  let countries = reply_sequence(v);
  return countries;
}
