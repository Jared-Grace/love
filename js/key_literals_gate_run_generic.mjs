import { arguments_assert } from "./arguments_assert.mjs";
import { literals_gate_run_generic } from "./literals_gate_run_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function key_literals_gate_run_generic(walked, part) {
  "QA gate: given a walk over every place one part of a page address is named, no word is written straight into it. Every one of them is held by a function, so it can be frozen. The part is named so the complaint can say which half of the address it is about.";
  "A word in an address is published the moment somebody saves the link or sends it on, and a saved link is on a disk nobody here can reach. Written at the site it looks like nothing: a letter or two, in a line that reads clearly, and rewording it is the sort of tidy-up nobody would think to check. Every link anybody kept then asks for a word the page no longer answers to.";
  "It stands at zero rather than at a line already drawn, because both halves of the address were cleared before this was written. Nothing here is being lived with.";
  "The part after the hash and the part after the question mark ask exactly this, and differ only in which walk hands the sites over.";
  "All this adds to the shared asking next door is the sentence naming an address, which is the only thing an address has that a browser database does not. The rest - what the sites are, the three commands that repair them, and how many files were opened coming back with the verdict - is the same question and is asked in one place.";
  arguments_assert(arguments, 2);
  let complaint = text_combine_multiple([
    "a word is written straight into ",
    part,
    " of a page address",
  ]);
  let r = literals_gate_run_generic(walked, complaint);
  return r;
}
