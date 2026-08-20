import { arguments_assert } from "./arguments_assert.mjs";
export function storage_session_specify_set(storage_session_key, value) {
  "Keeps a piece of text, under a word given whole, in the store this tab keeps to itself - so two tabs of the same page each hold their own.";
  "The text is kept as it stands rather than being wrapped up first, because it is read back the same way. A wrapping added on one side only is the shape that reads back as the letters of a wrapper rather than as what was meant.";
  arguments_assert(arguments, 2);
  sessionStorage.setItem(storage_session_key, value);
}
