import { uplifting_package_destination } from "./uplifting_package_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
export function uplifting_package_url(bible_folder) {
  "the verse-text packages live in firebase storage now, not hosting, so a package's url is its storage download url (bible/uplifting/<folder>.json in the jared-grace bucket); the fetch that consumes this url is unchanged.";
  let destination = uplifting_package_destination(bible_folder);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  return url;
}
