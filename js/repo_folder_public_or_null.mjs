import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
export async function repo_folder_public_or_null(folder) {
  "$plain folder";
  "Where one repository serves its pages from, spelled from that repository's own folder - or nothing at all, when that repository serves nothing.";
  "IT IS READ OUT OF THAT REPOSITORY'S OWN SETTINGS RATHER THAN ASSUMED TO MATCH THIS ONE'S. The sweep over every page there is used to ask this repository where it serves from and then look for that same folder inside each repository beside it. On 2026-09-03 this one moved its served folder under web/ and the one beside it did not, so the sweep went looking for web/public in a repository whose settings say public, found no such folder, and threw. A throw is written down as a red gate and reads exactly like a page that is wrong, so the sweep had measured nothing at all since that day.";
  "Nothing is the answer for a repository with no settings file, because a repository that is never sent anywhere has no served folder to name - which is a fact about that repository rather than a fault to stop a reading over. Two of the four folders beside this one are in that position.";
  "A settings file that does not say where it serves from is a different thing and is left to throw. That repository IS sent somewhere, and where has gone missing, which is a fault about the sending rather than a repository quietly opting out of one.";
  arguments_assert(arguments, 1);
  let path = path_join([folder, "firebase.json"]);
  let exists = await file_exists(path);
  if (exists) {
    let data = await file_read_json(path);
    let served = property_path_get_2(data, "hosting", "public");
    let joined = path_join([folder, served]);
    return joined;
  }
  return null;
}
