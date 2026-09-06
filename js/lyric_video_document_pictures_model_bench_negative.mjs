import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_picture_negative } from "./lyric_video_picture_negative.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_combine } from "./text_combine.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { path_basename } from "./path_basename.mjs";
import { file_exists } from "./file_exists.mjs";
import { lyric_video_picture_prompt } from "./lyric_video_picture_prompt.mjs";
import { fal_draw_negative } from "./fal_draw_negative.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { http_buffer_file_overwrite } from "./http_buffer_file_overwrite.mjs";
export async function lyric_video_document_pictures_model_bench_negative(
  path_document,
  model,
) {
  "$plain path_document";
  "$plain model";
  "Draws every scene an authored document asks for on one named model, steering the drawing away from lettering, and puts the results in a folder of their own so the same model's plain run stays beside them to be compared.";
  "★ THE FOLDER CARRIES THE WORD `negative` SO THAT THE TWO RUNS OF ONE MODEL CANNOT OVERWRITE EACH OTHER. What is being asked is whether the second set of words changed anything, and the only way to answer that is to have both sets of pictures on disk at once. A run that wrote over its own predecessor would destroy the comparison it exists to make.";
  "It skips a picture already on disk, so asking twice draws nothing the second time and costs nothing - the same rule the real drawing keeps, and for the same reason: every draw is paid for.";
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let width = 1152;
  let height = 2048;
  let negative = lyric_video_picture_negative();
  let name_folder = text_replace(model, "/", "_");
  let folder = text_combine(
    "gitignore/lyric_video_pictures_bench/",
    name_folder,
    "_negative",
  );
  await folder_exists_ensure(folder);
  let drawn = [];
  let refused = [];
  for (let picture of pictures) {
    let name = await path_basename(picture.path);
    let path = text_combine(folder, "/", name);
    let there = await file_exists(path);
    if (there) {
      continue;
    }
    let prompt = lyric_video_picture_prompt(picture.scene);
    let sample = await fal_draw_negative(
      model,
      prompt,
      negative,
      width,
      height,
    );
    if (not(sample)) {
      list_add(refused, name);
      continue;
    }
    await http_buffer_file_overwrite(sample, path);
    list_add(drawn, path);
  }
  let r = {
    model,
    folder,
    pictures: pictures.length,
    drawn,
    refused,
  };
  return r;
}
