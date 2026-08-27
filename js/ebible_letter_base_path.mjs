import { arguments_assert } from "./arguments_assert.mjs";
export function ebible_letter_base_path() {
  "Where the letter to eBible is kept, with nothing on the end to say which of its two forms is meant.";
  "The letter exists twice - as the markdown it is written in and as the plain text an email carries - and the two are one file under two endings. Spelling the shared part once is what stops a move of the letter leaving one of them behind.";
  "Written relative to the folder the code is running in, because the gate that reads it runs inside a frozen copy of the repo. An absolute path would send that gate to the living folder instead, and it would then be judging a file nobody froze.";
  arguments_assert(arguments, 0);
  let path = "notes/letters/ebible_letter";
  return path;
}
