import { reply_choice } from "./reply_choice.mjs";
export function reply_names() {
  let names = ["dilshad", "khan", "yaqoob"];
  let fn = reply_choice(names);
  return fn;
}
