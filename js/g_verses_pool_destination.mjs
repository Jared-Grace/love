import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function g_verses_pool_destination(name) {
  "the firebase storage path for a named verse pool's single batched file (e.g. name 'waiting_on_the_lord' -> bible/engbsb/g_verses/waiting_on_the_lord.json). placed under the bible/ prefix because firebase storage rules only serve public reads there (a top-level g_verses/ path returns 403); one file per pool so the whole pool downloads in ONE request";
  let folder = ebible_folder_english();
  let file_name = list_join_slash_forward(["g_verses", name]);
  let destination = ebible_firebase_upload_path(folder, file_name);
  return destination;
}
