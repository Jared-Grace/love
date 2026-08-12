import { cors_path } from "./cors_path.mjs";
import { cors_rules } from "./cors_rules.mjs";
import { file_write_json } from "./file_write_json.mjs";
export async function cors_write() {
  "Work out the file store's reading rules for this machine and write them where the command that uploads them will look.";
  "The file is made rather than kept, so this is the step before uploading them and not a thing to remember to keep up to date. Run it on a new machine and the address that machine is reached at is simply in there.";
  let path = cors_path();
  let rules = cors_rules();
  await file_write_json(path, rules);
  let r = {
    path,
    rules,
  };
  return r;
}
