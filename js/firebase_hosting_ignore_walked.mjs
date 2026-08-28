import { list_includes_not } from "./list_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_hosting_stages_unsent } from "./firebase_hosting_stages_unsent.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function firebase_hosting_ignore_walked() {
  "The testing-stage folders the sending has not been told to leave behind, said beside how many stages were asked about at all.";
  "THE COUNT IS THE STAGES ASKED ABOUT, NOT THE ONES FOUND WANTING. What comes back empty is what a good day looks like here, and it is also what comes back on the day the list of stages to keep off the internet has been emptied, moved, or narrowed to nothing by an edit nobody meant that way. Both runs then say the same word, and only the number of stages asked about tells them apart by falling.";
  "Read off the settings file itself rather than remembered, because the whole of what could go wrong here is somebody editing that file. A record kept beside it would agree with itself while the file it is about had already stopped saying what it says.";
  arguments_assert(arguments, 0);
  let path = firebase_json_path();
  let data = await file_read_json(path);
  let hosting = property_get(data, "hosting");
  let ignore = property_get(hosting, "ignore");
  let wanted = firebase_hosting_stages_unsent();
  function firebase_hosting_ignore_walked_lambda(folder) {
    let absent = list_includes_not(ignore, folder);
    return absent;
  }
  let missing = list_filter(wanted, firebase_hosting_ignore_walked_lambda);
  let walked = list_size(wanted);
  let r = {
    walked,
    missing,
  };
  return r;
}
