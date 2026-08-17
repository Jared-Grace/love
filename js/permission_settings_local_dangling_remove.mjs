import { permission_settings_local_dangling_remove_r } from "./permission_settings_local_dangling_remove_r.mjs";
import { permission_settings_local_dangling_remove_f_names } from "./permission_settings_local_dangling_remove_f_names.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { list_second } from "./list_second.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function permission_settings_local_dangling_remove() {
  "takes out of the per-machine settings file every allow rule naming something nothing answers to, and then asks again to show none is left";
  "a rule is matched as plain text, so one naming a function somebody has since deleted approves a word rather than a function - and the word is then free for anyone to claim, at which point the approval quietly belongs to whatever claims it. That is the whole reason three separate gates refuse to pass while one is standing";
  "the shared file has had a way to take a grant back for a while; this file had none, so the only way to clear a dead rule was a hand in a file that decides what a hand may do. Measured the day this was written: one dead rule, left behind when a peer deleted the function it named, and it was holding back every sending of every app";
  "it finds its own set rather than being handed one, so it cannot be asked to remove a rule that is still good, and running it twice is the same as running it once";
  "ONLY a name nothing answers to is taken. A rule naming an alias key is wrong for a different reason - it grants whatever that key points at later - but the key does point somewhere today, so taking it away would take away an approval somebody is using. That is a judgment, and it is left to whoever wrote the rule";
  "this can only ever remove an approval, never write one, which is what makes it safe to run unasked. For the same reason it must never be given a standing approval of its own: a command that edits the file deciding what runs unasked has to be seen every time";
  "do NOT grant this - it edits the file that decides what runs unasked and has to be seen every time";
  let paths = permission_settings_paths();
  let path = list_second(paths);
  let absent = await file_exists_not(path);
  if (absent) {
    let none = {
      path,
      removed: [],
      remaining: [],
    };
    return none;
  }
  let settings = await file_read_json(path);
  let held = property_exists(settings, "permissions");
  if (not(held)) {
    let none2 = {
      path,
      removed: [],
      remaining: [],
    };
    return none2;
  }
  let permissions = property_get(settings, "permissions");
  let listed = property_exists(permissions, "allow");
  if (not(listed)) {
    let none3 = {
      path,
      removed: [],
      remaining: [],
    };
    return none3;
  }
  let r2 = await permission_settings_local_dangling_remove_f_names(permissions);
  let f_names = property_get(r2, "f_names");
  let aliases = property_get(r2, "aliases");
  let removed = property_get(r2, "removed");
  let kept = property_get(r2, "kept");
  let cleared = property_get(r2, "cleared");
  if (cleared) {
    let nothing = {
      path,
      removed: [],
      remaining: [],
    };
    return nothing;
  }
  permissions.allow = kept;
  let r = await permission_settings_local_dangling_remove_r(
    path,
    settings,
    f_names,
    aliases,
    removed,
  );
  return r;
}
