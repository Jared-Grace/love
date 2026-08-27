import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_hosting_stages_unsent } from "./firebase_hosting_stages_unsent.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function firebase_hosting_ignore_missing() {
  "The testing-stage folders the sending has not been told to leave behind, which is to say the ones the next sending would put on the public internet.";
  "Read off the file itself rather than remembered, because the whole of what could go wrong here is somebody editing that file. A record kept beside it would agree with itself while the file it is about had already stopped saying what it says.";
  arguments_assert(arguments, 0);
  let path = firebase_json_path();
  let data = await file_read_json(path);
  let hosting = property_get(data, "hosting");
  let ignore = property_get(hosting, "ignore");
  let wanted = firebase_hosting_stages_unsent();
  function firebase_hosting_ignore_missing_lambda(folder) {
    let listed = list_includes(ignore, folder);
    let absent = not(listed);
    return absent;
  }
  let missing = list_filter(wanted, firebase_hosting_ignore_missing_lambda);
  return missing;
}
