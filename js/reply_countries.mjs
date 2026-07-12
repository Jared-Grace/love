import { reply_choice } from "./reply_choice.mjs";
export function reply_countries() {
  let v = ["kenya", "pakistan"];
  let countries = reply_choice(v);
  return countries;
}
