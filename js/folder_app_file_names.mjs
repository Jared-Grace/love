import { file_name_app_is } from "./file_name_app_is.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter } from "./list_filter.mjs";
export async function folder_app_file_names(folder, app_name) {
  "$plain folder";
  "$plain app_name";
  "Every piece of one app sitting in one folder, named as it sits there.";
  "The folder is asked what is in it rather than being handed a list of what an app usually has. A build is free to cut a piece of an app out into a file of its own and name it with a number nobody wrote down, so a list made up in advance can only ever hold the pieces somebody thought of - and the one it leaves out is the one that never gets sent.";
  "That leaving-out is not a small thing. What is sent live is a copy of named pieces, so a piece missing from the naming is missing from the sending, and the app asks for it live and is answered that there is no such file. Two apps were shipped broken that way before this asked the folder.";
  "The order is whatever the folder listing gives back, which is the same order every time and the same for every caller, so two of these compared against each other line up.";
  let file_names = await folder_read_files(folder);
  function app_lambda(file_name) {
    let app_file_name_is = file_name_app_is(file_name, app_name);
    return app_file_name_is;
  }
  let mine = list_filter(file_names, app_lambda);
  return mine;
}
