import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
export function reply_titles_ministry() {
  let fn = reply_choice([
    "apostle",
    "evangelist",
    "pastor",
    "preacher",
    "teacher",
  ]);
  return fn;
}
