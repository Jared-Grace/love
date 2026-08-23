import { arguments_assert } from "./arguments_assert.mjs";
export function word_picture_folder_parts(word) {
  "$plain word";
  "The steps from the top of the repo down to the folder holding one taught word's pictures, as a list of names.";
  "IT IS A LIST RATHER THAN A PATH BECAUSE TWO DIFFERENT KINDS OF ADDRESS ARE BUILT FROM IT. One is a place on this machine and one is an address a phone asks the local server for, and they agree about every step of the way down and disagree only about what stands above it. Written out twice they were already two decisions wearing one layout, and nothing would have gone wrong the day one of them was moved - the folder would simply have been written in one place and looked for in another, with no complaint from either.";
  "THE LAST STEP IS WHERE THE FILING IS DECIDED, and today it is the taught word itself. That is worth saying out loud because the word is english and most of these pictures are not: a drawing of a cross is the same drawing for a reader of any language, and it is filed here under one language's spelling of it. Changing that means changing this line and moving what is already on disk in the same breath, and the reason it is one line is so that the first half of that is not also a hunt.";
  arguments_assert(arguments, 1);
  let parts = ["gitignore", "word_pictures", word];
  return parts;
}
