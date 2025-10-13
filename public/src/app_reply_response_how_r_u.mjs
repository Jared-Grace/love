import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { emoji_100 } from "../../../love/public/src/emoji_100.mjs";
import { string_the_servant_of_god_is } from "../../../love/public/src/string_the_servant_of_god_is.mjs";
import { emoji_ok } from "../../../love/public/src/emoji_ok.mjs";
export function app_reply_response_how_r_u() {
  let v2 =
    emoji_ok() +
    " " +
    string_the_servant_of_god_is() +
    " doing good " +
    emoji_100() +
    " through the grace of God, because " +
    emoji_book_open() +
    " all things work together for good to them that love God and are called according to the purpose of God! (Romans 8:28) However please pray that the servant of God will stop hearing demons" +
    emoji_pray();
  return v2;
}
