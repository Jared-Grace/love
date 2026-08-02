import { apps_names } from "./apps_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { firebase_prod_app_hashes } from "./firebase_prod_app_hashes.mjs";
import { firebase_prod_hashes_path } from "./firebase_prod_hashes_path.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
export async function firebase_prod_hashes_write_all() {
  "Looks at what every app is serving right now and writes the whole record from scratch";
  "This is how the record comes into being. Everything standing on it asks whether one app is serving what is about to be sent, and an app nobody has looked at answers no - which is the right way round to be wrong, but it means nothing can be sent until somebody has looked at all of them. This is that looking, asked for once";
  "It finds its own set rather than being handed one, so it cannot drift from the apps that actually exist, and asking it again after a new app appears is all that is needed";
  "The record is written from scratch rather than merged into, because it is answering about all of them at once. An app that has since gone is then gone from the record too, instead of sitting there being agreed with by nothing";
  "An app that cannot be read is left out and named in the answer instead of stopping the whole run. An app that was never sent has nothing to download, and one such would otherwise mean the record could never be made at all. Leaving it out is also the safe way round: unrecorded reads as not yet looked at, which holds a deploy rather than letting one by";
  "The apps that could not be read are handed back rather than only counted, because that list is the actual finding here - it is the set of apps nobody can ship until somebody sends them once";
  let app_names = await apps_names();
  let hashes = {};
  let failed = [];
  for (let app_name of app_names) {
    async function lambda() {
      let looked = await firebase_prod_app_hashes(app_name);
      return looked;
    }
    let looked = await catch_null_async(lambda);
    let unreadable = null_is(looked);
    if (unreadable) {
      list_add(failed, app_name);
    } else {
      hashes[app_name] = looked;
    }
  }
  let path = firebase_prod_hashes_path();
  await file_overwrite_json(path, hashes);
  let r = {
    hashes,
    failed,
  };
  return r;
}
