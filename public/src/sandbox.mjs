import { bible_interlinear_verses_upload } from "../../../love/public/src/bible_interlinear_verses_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  await bible_interlinear_verses_upload();
}
