import { folder_user } from "./folder_user.mjs";
export function gloss_write_root_folder() {
  "Absolute folder the gloss authoring handover lives under - one folder per store sits inside it, and nothing else belongs here.";
  "It is asked for by name rather than spelled again beside the store's own folder, because the two are read by different things: one is written to and one is checked for anything sitting loose. Spelled twice, a later move would take one of them and leave the other checking a folder nobody writes to, which reports clean forever.";
  let folder = folder_user("storage/gloss_write");
  return folder;
}
