import { arguments_assert } from "./arguments_assert.mjs";
export function storage_session_specify_get(storage_session_key) {
  "Reads back, from the store this tab keeps to itself, whatever is held under a word given whole.";
  "The word is given whole rather than being built here from an app and a name, because the words already published under this door were built elsewhere and cannot be changed now without every browser already holding one losing what it holds.";
  "What comes back is the text as it was put in. Nothing is unwrapped, because nothing was wrapped: this is the door for a value that was written as plain text, and reading it as anything else would turn a word somebody stored into a reason to fail.";
  arguments_assert(arguments, 1);
  let held = sessionStorage.getItem(storage_session_key);
  return held;
}
