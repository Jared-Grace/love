import { folder_user } from "./folder_user.mjs";
export function gloss_write_folder(fn) {
  "Absolute folder the gloss authoring loop hands files through - each passage's authored word explanations are written here as a file, and read back from here into the store.";
  "The explanations are nested JSON carrying braces, quote marks and apostrophes, so they are handed over as a file rather than as words on a command line, where the quoting would decide what survived.";
  "Each store hands its files through a folder of its own, named after the store, because a passage is named by its chapter and its verses and two stores explain the same chapter in different languages. Shared, the Greek explanations of a verse and the Cebuano explanations of the same verse are one file name, and whichever is written second is the one that is read back - into whichever store asked for it. That failure is silent and it is wrong in the worst way available here, since the file that arrives is real explanations of the right verse in the wrong language.";
  let folder = folder_user("storage/gloss_write/" + fn.name);
  return folder;
}
