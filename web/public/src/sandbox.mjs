import { ebible_verses_upload } from "./ebible_verses_upload.mjs";
import { each_async } from "./each_async.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let versions = ["engbsb", "urdgvu"];
  await each_async(versions, ebible_verses_upload);
}
