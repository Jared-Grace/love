import { ebible_languages_english_each } from "../../../love/public/src/ebible_languages_english_each.mjs";
import { ebible_version_upload_refresh } from "../../../love/public/src/ebible_version_upload_refresh.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload_refresh_all() {
  marker("1");
  await ebible_languages_english_each(ebible_version_upload_refresh);
}
