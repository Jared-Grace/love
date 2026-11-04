import { fn_name } from "./fn_name.mjs";
import { reply_bible_verse_read } from "./reply_bible_verse_read.mjs";
export function reply_bible_1jn_4_8() {
  ("1 John 4:8 said whole, in the wordings written here. Made by ",
    fn_name("reply_bible_verse_function_new"),
    ".");
  let r = reply_bible_verse_read("1JN04", "8", [
    "he that loveth not knoweth not god for god is love",
    "he who has no love has no knowledge of god because god is love",
    "whoever does not love does not know god because god is love",
    "he that loves not has not known god for god is love",
    "he that loveth not knoweth not god for god is charity",
    "hee that loueth not knoweth not god for god is loue",
    "he who doesnt love doesnt know god for god is love",
    "he who is not loving did not know god because god is love",
    "he who does not love does not know god for god is love",
  ]);
  return r;
}
