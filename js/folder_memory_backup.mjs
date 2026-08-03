import { folder_home_backup } from "./folder_home_backup.mjs";
export function folder_memory_backup() {
  "The repo the memory notes really live in, which the folder inside the assistant's own config is only a link to.";
  "It is one of the folders a sweep commits into, so anything asking what a sweep covers has to name it, and the name it is spelled by belongs in one place rather than at each of them.";
  let folder = folder_home_backup("love_claude_memory");
  return folder;
}
