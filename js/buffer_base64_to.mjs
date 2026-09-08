import { arguments_assert } from "./arguments_assert.mjs";
export function buffer_base64_to(buffer) {
  "the bytes of a file written out as base64 text, so that a picture can be carried inside a json body instead of being fetched from an address";
  "IT IS NOT THE SAME AS THE TEXT ONE BESIDE IT AND THE DIFFERENCE IS SILENT. Turning text into base64 first reads the text as utf-8, and a png read that way is corrupted before it is encoded - every byte above 127 becomes two. Nothing throws; what arrives is simply not a picture. That is why this is its own function rather than an argument to that one.";
  arguments_assert(arguments, 1);
  let b = Buffer.from(buffer).toString("base64");
  return b;
}
