import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_verses_upload } from "../../../love/public/src/ebible_verses_upload.mjs";
import { ebible_versions_english_choices_upload_path } from "../../../love/public/src/ebible_versions_english_choices_upload_path.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_difference } from "./list_difference.mjs";
export async function ebible_versions_english_choices_upload() {
  let cs = await ebible_versions_english_choices();
  let skip = [
    "eng-asv",
    "engBBE",
    "engDBY",
    "engDRA",
    "englsv",
    "enggnv",
    "engmsb",
  ];
  let filtered = list_difference(cs, skip);
  await each_async(filtered, ebible_verses_upload);
  return;
  marker("1");
  let destination = ebible_versions_english_choices_upload_path();
  await firebase_upload_object(destination, cs);
}
