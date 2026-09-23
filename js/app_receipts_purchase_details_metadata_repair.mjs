import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_prefix_names } from "./firebase_storage_prefix_names.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { app_receipts_purchase_details_name } from "./app_receipts_purchase_details_name.mjs";
export async function app_receipts_purchase_details_metadata_repair(
  folder_code,
) {
  "$plain folder_code";
  "Gives every purchase in one folder its date and time as metadata when the file holds them but the metadata does not, and hands back the files it changed.";
  "Other phones read a purchase's date and time from its metadata, because reading the file itself is refused to a page served from an address storage does not know. The first builds wrote them only inside the file, so a purchase sent by one of those is invisible to every other phone until this runs.";
  arguments_assert(arguments, 1);
  let names = await firebase_storage_prefix_names(
    "receipts/" + folder_code + "/",
  );
  let bucket = await firebase_bucket();
  let repaired = [];
  for (let name of names) {
    if (!text_ends_with(name, "/" + app_receipts_purchase_details_name())) {
      continue;
    }
    let file = bucket.file(name);
    let [metadata] = await file.getMetadata();
    let custom = metadata.metadata || {};
    if (custom.date) {
      continue;
    }
    let [contents] = await file.download();
    let details = JSON.parse(contents.toString());
    await file.setMetadata({
      metadata: {
        date: details.date,
        time: details.time,
      },
    });
    repaired.push(name);
  }
  return repaired;
}
