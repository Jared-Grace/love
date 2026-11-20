import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { app_receipts_purchase_details_name } from "./app_receipts_purchase_details_name.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { app_receipts_purchase_path } from "./app_receipts_purchase_path.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { http_buffer_file_overwrite } from "./http_buffer_file_overwrite.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function app_receipts_purchases_photos_download(folder_code, ids) {
  "$plain folder_code";
  "$plain ids";
  "Downloads every photo of the purchases named, from one receipts folder, onto this machine: a folder per purchase, named by its id, holding its photos under the names storage keeps them by. ids is one comma-joined word, as a command line hands it over - the ids the receipts app writes after purchase= in the address of an opened purchase.";
  "Asked for by the human 2026-11-20, to send the addresses of purchases and have their pictures land in one place.";
  "A purchase's photos are whatever storage holds beside its details file, so the details file is the one name left out. A purchase with no photos still gets its folder, empty, so a missing picture shows as an empty folder rather than as nothing at all.";
  "Hands back where everything went, and for each purchase the files written, so a wrong id reads as a purchase with none.";
  arguments_assert(arguments, 2);
  let joined = folder_user_storage_function_path(
    app_receipts_purchases_photos_download,
  );
  let folder_out = path_join([joined, folder_code]);
  let details_name = app_receipts_purchase_details_name();
  let project_url = firebase_storage_url_project_jg();
  let id_list = ids.split(",");
  let purchases = [];
  for (let id of id_list) {
    let prefix = text_combine_multiple([
      "receipts/",
      folder_code,
      "/",
      id,
      "/",
    ]);
    let names = await firebase_storage_list_jg(prefix);
    let files = [];
    for (let name of names) {
      let list = name.split("/");
      let file_name = list_last(list);
      if (equal(file_name, details_name)) {
        continue;
      }
      files.push(file_name);
    }
    let folder_purchase = path_join([folder_out, id]);
    await folder_exists_ensure(folder_purchase);
    async function download_one(file_name) {
      let storage_path = app_receipts_purchase_path(folder_code, id, file_name);
      let url = firebase_storage_url(storage_path, project_url);
      let file_path = path_join([folder_purchase, file_name]);
      await http_buffer_file_overwrite(url, file_path);
      return file_path;
    }
    let written = await list_map_limited_async(files, download_one, 8);
    purchases.push({
      id,
      files: written,
    });
  }
  let r = {
    folder: folder_out,
    purchases,
  };
  return r;
}
