import { ebible_apocrypha_videos_generate } from "../../../love/public/src/ebible_apocrypha_videos_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  await ebible_apocrypha_videos_generate();
}
