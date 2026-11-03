import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { commands_only_path } from "./commands_only_path.mjs";
import { permission_auto_pin_path } from "./permission_auto_pin_path.mjs";
import { error_json } from "./error_json.mjs";
export async function file_path_deciding_refuse_node(file_path) {
  "$plain file_path";
  "Throws when this path is, is inside, or holds a file that decides what runs without asking: the settings, the hooks, the commands-only switch, or the human's approval pin.";
  "★ ASKED WHERE A FILE IS CHANGED, BECAUSE THE PATH CANNOT BE SEEN FROM ANYWHERE ELSE. A function can work a path out however it likes, so reading what it calls never settles where it writes. Only the writing step sees the finished path.";
  "The links are followed first, so a link in the drafts folder pointing at the hooks counts as the hooks.";
  "The repo is taken from where this file sits and not from the working folder, so a frozen copy guards its own files and is free to be built and thrown away.";
  "The named way past this is a function on the permission roster, which a person has to see granted.";
  arguments_assert(arguments, 1);
  async function real(one) {
    let whole = path.resolve(one);
    let at = whole;
    let rest = [];
    while (true) {
      try {
        let found = await fs.promises.realpath(at);
        let joined = path.join(found, ...rest);
        return joined;
      } catch (e) {
        let up = path.dirname(at);
        if (equal(up, at)) {
          return whole;
        }
        let v = path.basename(at);
        rest.unshift(v);
        at = up;
      }
    }
  }
  let root = fileURLToPath(new URL("..", import.meta.url));
  let home = claude_config_folder();
  let v2 = commands_only_path();
  let relative = [...permission_settings_paths(), ".claude/hooks", v2];
  function lambda(r) {
    let r2 = path.join(root, r);
    return r2;
  }
  let from_root = relative.map(lambda);
  let v3 = path.join(home, "settings.json");
  let v4 = path.join(home, "settings.local.json");
  let v5 = path.join(home, "hooks");
  let path2 = permission_auto_pin_path();
  let from_home = [v3, v4, v5, path2];
  let target = await real(file_path);
  for (let one of [...from_root, ...from_home]) {
    let deciding = await real(one);
    let same = equal(target, deciding);
    let inside = target.startsWith(deciding + path.sep);
    let holds = deciding.startsWith(target + path.sep);
    if (same || inside || holds) {
      error_json({
        hint: "this path decides what runs without asking, so nothing changes it without a person seeing it. Change the list it is generated from, or hand the human the command",
        file_path,
        deciding,
      });
    }
  }
}
