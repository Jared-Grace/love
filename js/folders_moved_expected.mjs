import { folder_memory_backup } from "./folder_memory_backup.mjs";
import { g_content_backup_folder } from "./g_content_backup_folder.mjs";
export function folders_moved_expected() {
  "Every folder this repo keeps outside itself that has been given a new home, said as where it used to be and where it belongs now.";
  "Only the old place is written down here. The new place is asked of the function that names it, so this list cannot come to disagree with the code about where anything belongs - a folder is renamed by renaming it in one function, and the move follows from that on its own.";
  "The old place is written down rather than asked of anything, because it is history. The code stopped naming it at the moment it changed, and history is the one thing that never needs updating.";
  "A folder that moves twice is said twice. What is looked for is the old place, so an earlier entry finds nothing once its old place has been left behind a second time, and the move in between would go unrepaired if the second one were written as a change to the first rather than as its own line.";
  let expected = [
    {
      before: "/home/j/backup/love_claude_memory",
      after: folder_memory_backup(),
    },
    {
      before: "/home/j/backup/love_g_content",
      after: g_content_backup_folder(),
    },
    {
      before: "/home/j/backup/love/claude_memory",
      after: folder_memory_backup(),
    },
    {
      before: "/home/j/backup/love/g_content",
      after: g_content_backup_folder(),
    },
  ];
  return expected;
}
