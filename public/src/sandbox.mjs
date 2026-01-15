import { file_read } from "../../../love/public/src/file_read.mjs";
import { image_generate } from "../../../love/public/src/image_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let contents = await file_read(file_path);
  await image_generate(text, path_output);
  return v;
}
