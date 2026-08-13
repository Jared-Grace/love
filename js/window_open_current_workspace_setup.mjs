import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { file_read } from "./file_read.mjs";
import { file_contents_ensure } from "./file_contents_ensure.mjs";
import { file_executable_make } from "./file_executable_make.mjs";
import { text_combine } from "./text_combine.mjs";
export async function window_open_current_workspace_setup() {
  "Makes a new window appear on the workspace being looked at, instead of the desktop carrying an already open window over from wherever it was. The desktop's own setting decides between those two for the whole machine at once and has no way to say it per window, so the answer is a small watcher of its own rather than a value to set.";
  "It installs two things: the watcher, kept in this repo and copied out to where commands live, and a line in the login folder that starts it. Both are written only when they differ from what is already there, so running setup again on a machine that has it costs nothing and says so.";
  "It governs new windows only. An application that reuses the window it already has opens nothing, so for that one the desktop's own setting still decides.";
  let home = folder_home();
  let folder = folder_repo_love();
  let script_source = path_join([
    folder,
    "data",
    "machine",
    "window_open_current_workspace.sh",
  ]);
  let script_text = await file_read(script_source);
  let script_path = path_join([
    home,
    ".local",
    "bin",
    "window_open_current_workspace",
  ]);
  let script = await file_contents_ensure(script_path, script_text);
  await file_executable_make(script_path);
  let combined = text_combine("Exec=", script_path);
  let lines = [
    "[Desktop Entry]",
    "Type=Application",
    "Name=Open windows on the current workspace",
    combined,
    "OnlyShowIn=XFCE;",
    "X-GNOME-Autostart-enabled=true",
    "",
  ];
  let autostart_text = lines.join("\n");
  let autostart_path = path_join([
    home,
    ".config",
    "autostart",
    "window_open_current_workspace.desktop",
  ]);
  let autostart = await file_contents_ensure(autostart_path, autostart_text);
  let r = {
    step: "window_open_current_workspace",
    script,
    autostart,
  };
  return r;
}
