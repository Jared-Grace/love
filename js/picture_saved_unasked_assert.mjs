import path from "path";
import { not } from "./not.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { error_json } from "./error_json.mjs";
export function picture_saved_unasked_assert(f_path) {
  "$plain f_path";
  "Refuses to save a picture anywhere but this repo's ignored folder or Claude's own scratch folder, and only under a picture's file ending.";
  "A command that may run with no prompt covers every path it will ever be handed, and a browser's picture overwrites whatever it is told to, so an unchecked path could replace a setting, a hook or a picture the public is served.";
  "Both sides are resolved first, so a path that climbs back out with two dots lands where it really goes and is refused. A link already sitting inside these folders is not followed, so it is not caught; making one is not something a granted command does.";
  let saved = path.resolve(f_path);
  let scratch = "/tmp/claude-" + process.getuid();
  let r = folder_gitignore_name();
  let ignored = path.resolve(r);
  let inside =
    saved.startsWith(scratch + "/") || saved.startsWith(ignored + "/");
  let ending = path.extname(saved).toLowerCase();
  let picture = [".png", ".jpg", ".jpeg"].includes(ending);
  if (not(inside) || not(picture)) {
    error_json({
      hint: "a picture saved with no prompt goes in the ignored folder or Claude's scratch folder, under a picture's file ending - to save anywhere else, call the function that takes any path, from code a person has read",
      f_path,
      saved,
    });
  }
}
