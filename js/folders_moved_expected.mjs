import { folder_drive_user } from "./folder_drive_user.mjs";
import { folder_home_repo } from "./folder_home_repo.mjs";
import { git_mirrors_folder } from "./git_mirrors_folder.mjs";
import { folder_memory_backup } from "./folder_memory_backup.mjs";
import { g_content_backup_folder } from "./g_content_backup_folder.mjs";
export function folders_moved_expected() {
  "Every folder this repo keeps outside itself that has been given a new home, said as where it used to be and where it belongs now.";
  "Only the old place is written down here. The new place is asked of the function that names it, so this list cannot come to disagree with the code about where anything belongs - a folder is renamed by renaming it in one function, and the move follows from that on its own.";
  "The old place is written down rather than asked of anything, because it is history. The code stopped naming it at the moment it changed, and history is the one thing that never needs updating.";
  "A folder that moves twice is said twice. What is looked for is the old place, so an earlier entry finds nothing once its old place has been left behind a second time, and the move in between would go unrepaired if the second one were written as a change to the first rather than as its own line.";
  "The repo holding this list is one of the folders in it, and its new place has to be stated rather than worked out from where the code is standing. A reading that works the folder out from its own file agrees with the disk wherever the disk has it, so it can never say a move is outstanding, and this is the one entry whose whole purpose is to say so before it is true.";
  "That is also why this entry is written down now rather than on the day. Everything running has to be shut down before the repo can move, and what puts the move right afterwards runs while nothing is open - so there is nobody there to add a line, and the line has to be waiting.";
  "The repos standing beside this one are here because this one reaches into them by the way out and back down again, so where they are is settled by where this one is rather than by anything of their own. Left where they were, the move breaks every one of those reachings at once, and the breakage shows up as a gate that cannot find a function rather than as anything naming a folder.";
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
    {
      before: "/media/j/JPM/git_mirrors",
      after: git_mirrors_folder(),
    },
    {
      before: "/media/j/JPM/a/mirrors",
      after: git_mirrors_folder(),
    },
    {
      before: "/home/j/repos/love",
      after: folder_home_repo("love"),
    },
    {
      before: "/home/j/repos/karate_code",
      after: folder_home_repo("karate_code"),
    },
    {
      before: "/home/j/repos/portfolio_qa",
      after: folder_home_repo("portfolio_qa"),
    },
    {
      before: "/home/j/repos/p_np",
      after: folder_home_repo("p_np"),
    },
    {
      before: "/media/j/JPM/user",
      after: folder_drive_user(),
    },
  ];
  return expected;
}
