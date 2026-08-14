import { fn_name } from "./fn_name.mjs";
export function text_url_decode(word) {
  ("Read one word back out of an address, undoing the spelling ",
    fn_name("text_url_encode"),
    " gave it.");
  ("$plain word");
  ("the word is a piece of an address being read, not a path and not anything that runs. It is turned into text and handed back; nothing here reads or writes a file.");
  ("Paired with ",
    fn_name("text_url_encode"),
    " so that a round trip can be asked about at all. An encoder alone can only be checked by eye against a table of characters, which is the check that missed the plus.");
  let decoded = decodeURIComponent(word);
  return decoded;
}
