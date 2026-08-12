import { not } from "./not.mjs";
import { json_extension } from "./json_extension.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_size } from "./text_size.mjs";
import { text_remove_end } from "./text_remove_end.mjs";
export function file_name_json_name(file_name) {
  "The name a json file was named after, with the extension taken back off.";
  "The other direction was already named, and a folder full of files stored under a name is read the other way round: the caller has the file name and wants the name again. A file name that is not a json one is handed back untouched rather than shortened, because cutting a fixed number of letters off the end of something that never carried them removes part of the name itself.";
  let extension = json_extension();
  let json_is = text_ends_with(file_name, extension);
  if (not(json_is)) {
    return file_name;
  }
  let count = text_size(extension);
  let name = text_remove_end(file_name, count);
  return name;
}
