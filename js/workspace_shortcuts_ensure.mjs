import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_home } from "./folder_home.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { link_destination_set } from "./link_destination_set.mjs";
import { child_output_wait } from "./child_output_wait.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
export async function workspace_shortcuts_ensure() {
  "Makes the desktop's workspace keys work from wherever this repo is now standing, and answers what it put in place.";
  "It is written as something to assert rather than something to repair. The two links and the keys are set to what they should be whatever they held before, so there is nothing to notice being wrong and nothing to decide - running it on a machine where everything is already right changes nothing, and running it after the repo has moved is the whole fix.";
  "That is deliberately not the shape used for the folders that move. A folder's old place has to be written down, because the only way to find what still names it is to go looking for the name. Here there is nothing to go looking for: what these should say is known outright from where the repo is, so stating it is cheaper and cannot go stale.";
  "The keys themselves are left to the script to write. It works out where its helper sits from its own place on disk, so a link pointing at the right file is enough to make the keys right too, and there is one place rather than two that knows how a key is spelled.";
  "The keys are the part no reading of files could ever have caught. They are kept in the desktop's own store of settings rather than in any file this repo can search, so a move left them naming a folder that had gone, and what they did about it was nothing at all - no error, no complaint, just keys that stopped working.";
  "The folders the links live in are made first, because a machine that has never had either is the same case as a machine whose repo has moved, and asking for both to work means neither may assume the other has been done.";
  let repo = folder_repo_love();
  let home = folder_home();
  let script = path_join([repo, "linux", "xfce-workspace-shortcuts"]);
  let entry = path_join([repo, "linux", "xfce-workspace-shortcuts.desktop"]);
  let programs = path_join([home, ".local", "bin"]);
  let startup = path_join([home, ".config", "autostart"]);
  await folder_exists_ensure(programs);
  await folder_exists_ensure(startup);
  let program_link = path_join([programs, "xfce-workspace-shortcuts"]);
  let startup_link = path_join([startup, "xfce-workspace-shortcuts.desktop"]);
  await link_destination_set(program_link, script);
  await link_destination_set(startup_link, entry);
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn(script, [], {
    shell: false,
  });
  let said = await child_output_wait(child, script, []);
  let ensured = {
    script,
    links: [program_link, startup_link],
    said,
  };
  return ensured;
}
