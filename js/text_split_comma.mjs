import { text_split } from "./text_split.mjs";
export function text_split_comma(t) {
  "Cuts one piece of text into its parts wherever a comma stands, which is how a list handed to a command as a single word is taken apart again.";
  let split = text_split(t, ",");
  return split;
}
