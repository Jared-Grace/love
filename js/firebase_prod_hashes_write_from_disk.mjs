import { apps_names } from "./apps_names.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { firebase_prod_app_disk_hashes } from "./firebase_prod_app_disk_hashes.mjs";
import { firebase_prod_hashes_path } from "./firebase_prod_hashes_path.mjs";
import { list_unique } from "./list_unique.mjs";
export async function firebase_prod_hashes_write_from_disk() {
  "Writes the whole note of what is being served from what is built and waiting, which is what sending has just made true";
  "Sending puts out the folder of waiting pieces wholesale, so the moment a sending finishes, what is waiting IS what is being served. Reading it back off the wire to learn that would be asking a question already answered - and answered more surely here, because a piece just sent can take a moment to appear at every place that serves it, and a reader arriving inside that moment is told the old thing and writes it down as the new one";
  "Its sibling reads what is live instead and takes about seven minutes over three hundred requests. This takes about a second and touches no wire, which is the difference between a note that can be brought up to date every time something is sent and one that can only be done by hand once in a while";
  "That difference is the whole reason for it. Everything asking whether an app still needs sending stands on this note, and a note nobody can afford to keep current is one that quietly stops being true - after which those questions go on being answered confidently and wrongly";
  "It is only true straight after a sending. Called at any other moment it writes down what somebody is in the middle of building as though it had gone out, which is the dangerous way to be wrong: an app would then read as already sent and be carried past every later check without anybody looking at it. So this belongs where the sending finishes and nowhere else";
  "The note is written from scratch rather than merged into, because a sending is about all of them at once - every app in the folder went out, not only the one somebody came to send";
  let app_names = await apps_names();
  let names = list_unique(app_names);
  let hashes = {};
  for (let app_name of names) {
    let disk = await firebase_prod_app_disk_hashes(app_name);
    hashes[app_name] = disk;
  }
  let path = firebase_prod_hashes_path();
  await file_overwrite_json(path, hashes);
  return hashes;
}
