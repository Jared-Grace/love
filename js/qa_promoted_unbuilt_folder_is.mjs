import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { path_join } from "./path_join.mjs";
export async function qa_promoted_unbuilt_folder_is(folder, app_name) {
  "$plain folder";
  "$plain app_name";
  "Whether nothing has been built yet under one name in one folder - which is to say the pieces sitting there under that name are all of them empty.";
  "An app comes into being here by having a page in that folder and by nothing else, so somebody starting one leaves a page with no bytes in it behind long before there is anything to look at. That page is a beginning rather than a build, and everything in front of a sending has to be able to tell those apart.";
  "Every piece has to be empty and not only the page. A page nobody wrote into next to a script somebody did is a build that came out broken, which is a thing to be told about rather than passed over - so the pass is only for a name nothing at all has been written under.";
  "No pieces at all is not this. A name with nothing sitting under it was never started here, and answering yes would be saying something about a folder that holds nothing to say it about.";
  "Which folder is received rather than reached for, the same way as its neighbour that asks whether the pieces are a copy of what is public, so this can be asked of a folder made up for the asking instead of only of the one that goes live.";
  arguments_assert(arguments, 2);
  let present = await folder_app_file_names(folder, app_name);
  let none = list_empty_is(present);
  if (none) {
    return false;
  }
  for (let file_name of present) {
    let file_path = path_join([folder, file_name]);
    let text = await file_read(file_path);
    let written = text_empty_not_is(text);
    if (written) {
      return false;
    }
  }
  return true;
}
