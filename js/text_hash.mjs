import { sha256_hash } from "./sha256_hash.mjs";
export function text_hash(text) {
  "$plain text";
  "one short fixed word standing for the whole of a piece of writing, so a record of what something was can be kept and compared without keeping the thing itself";
  "the same writing always gives the same word and different writing practically never gives the same one, which is the only property anything reading this record relies on";
  "the making of the word is the shared ending it and the file reader both used to spell out, and it stands under its own name now; what is left here is the one thing this one decides, which is that it is handed the writing already rather than opening anything";
  let r = sha256_hash(text);
  return r;
}
