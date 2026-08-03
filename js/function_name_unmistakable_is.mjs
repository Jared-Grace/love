import { text_includes } from "./text_includes.mjs";
export function function_name_unmistakable_is(word) {
  "Whether a word could only be one of this repo's function names, and never an ordinary word standing in a sentence. Read-only, pure.";
  "An underscore settles it. Names here are everyday words joined by underscores, so a name carrying one cannot also be written by accident in prose, while a name that is a single word - not, add, each, and, or, equal, identity - is an English word first and a function second.";
  "Read as a whole word, not as a spelling rule: what is being asked is whether finding this word in a sentence is evidence about the function of that name. For a single word it is not, and the mistake it prevents is an ordinary sentence being read as an accusation against code it was never about.";
  let has = text_includes(word, "_");
  return has;
}
