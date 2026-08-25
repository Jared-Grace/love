import { apps_names } from "./apps_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { firebase_prod_app_disk_hashes } from "./firebase_prod_app_disk_hashes.mjs";
export async function firebase_prod_apps_disk_hashes() {
  "Every app in the folder said as its own name against the hashes of the pieces sitting on disk for it, which is the whole of what a sending would put out if one were run this moment.";
  "THE NAMES ARE MADE UNIQUE FIRST, because an app can be reached by more than one path, and a name arriving twice would only write the same answer over itself.";
  "IT READS DISK AND NEVER THE WIRE. What is waiting to go out is a question the folder answers outright, in about a second; asking the network the same question takes minutes and can answer with the piece before this one, because a thing just sent takes a moment to appear everywhere it is served from.";
  "It is one function rather than the same loop inside each record that is written from it. The two records mean opposite things - one says what went out, the other says what somebody approved - and they are only ever comparable while they are made the same way.";
  let app_names = await apps_names();
  let names = list_unique(app_names);
  let hashes = {};
  for (let app_name of names) {
    let disk = await firebase_prod_app_disk_hashes(app_name);
    hashes[app_name] = disk;
  }
  return hashes;
}
