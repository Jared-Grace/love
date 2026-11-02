import { reply_choice } from "./reply_choice.mjs";
export function reply_titles_preaching() {
  let titles = reply_choice(["apostle", "evangelist", "pastor", "preacher"]);
  return titles;
}
