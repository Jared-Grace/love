import { fn_name } from "./fn_name.mjs";
import { reply_bible_verse_read } from "./reply_bible_verse_read.mjs";
export function reply_bible_1jn_4_10() {
  ("1 John 4:10 said whole, in the wordings written here. Made by ",
    fn_name("reply_bible_verse_function_new"),
    ".");
  let r = reply_bible_verse_read("1JN04", "10", [
    "herein is love not that we loved god but that he loved us and sent his son to be the propitiation for our sins",
    "and this is love not that we had love for god but that he had love for us and sent his son to be an offering for our sins",
    "and love consists in this not that we loved god but that he loved us and sent his son as the atoning sacrifice for our sins",
    "herein is love not that we loved god but that he loved us and sent his son a propitiation for our sins",
    "in this is charity not as though we had loved god but because he hath first loved us and sent his son to be a propitiation for our sins",
    "herein is that loue not that we loued god but that he loued vs and sent his sonne to be a reconciliation for our sinnes",
    "in this is love not that we loved god but that he loved us and sent his son to be the propitiation for our sins",
    "in this is love not that we loved god but that he loved us and sent his son as the atoning sacrifice for our sins",
    "in this is the love not that we loved god but that he did love us and did send his son a propitiation for our sins",
  ]);
  return r;
}
