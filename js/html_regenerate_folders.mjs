import { folder_public } from "./folder_public.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
export function html_regenerate_folders() {
  "The folders holding pages that were generated: the public one people are served from, and the dev one beside it.";
  "Both the writer that puts every page out again and the check that asks whether doing so would settle need the same two, and neither is free to know a folder the other does not - a check that walks fewer folders than the writer writes to is a check that passes on the pages nobody looked at.";
  let dev = app_shared_name_dev_text();
  let folder_dev = folder_public_join(dev);
  let p = folder_public();
  let folders = [p, folder_dev];
  return folders;
}
