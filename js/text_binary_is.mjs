import { text_includes } from "./text_includes.mjs";
export function text_binary_is(text) {
  "Whether what was read is a picture or a program rather than writing, told by the one character writing never holds.";
  "A file is read as writing whatever is in it, and a picture read that way comes back as text that looks like nothing but is perfectly happy to be written back out - as a picture that no longer opens. Nothing goes red for that, because a broken picture is still a file, so the question has to be asked before the writing rather than after.";
  let nothing = String.fromCharCode(0);
  let holds = text_includes(text, nothing);
  return holds;
}
