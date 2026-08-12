import { folder_user } from "./folder_user.mjs";
export function gloss_write_folder() {
  "Absolute folder the gloss authoring loop hands files through - each passage's authored word explanations are written here as a file, and read back from here into the store.";
  "The explanations are nested JSON carrying braces, quote marks and apostrophes, so they are handed over as a file rather than as words on a command line, where the quoting would decide what survived.";
  let folder = folder_user("storage/gloss_write");
  return folder;
}
