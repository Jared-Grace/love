import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_picture_bench_folder } from "./lyric_video_picture_bench_folder.mjs";
import { range_1 } from "./range_1.mjs";
import { path_basename } from "./path_basename.mjs";
import { lyric_video_picture_prompt } from "./lyric_video_picture_prompt.mjs";
import { path_extension } from "./path_extension.mjs";
import { path_extension_replace } from "./path_extension_replace.mjs";
import { lyric_video_picture_bench_draw_one } from "./lyric_video_picture_bench_draw_one.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_document_pictures_model_bench_attempts_generic(
  path_document,
  model,
  folder_ending,
  attempts,
  draw,
) {
  "$plain path_document";
  "$plain model";
  "$plain folder_ending";
  "$plain attempts";
  "Draws every scene an authored document names several times over on one model, each try into a file of its own, so that how often a model gets a scene right can be counted rather than guessed at.";
  "★ ONE DRAW PER SCENE ANSWERS THE WRONG QUESTION ONCE THE DRAWING IS NOT BEING PAID FOR BY THE PICTURE. Where each picture costs money, one draw is the honest test, because a picture you would have to pay to replace is a picture you have to keep. Where an hour of a machine is bought outright, a picture that came out wrong costs seconds and is simply thrown away - so what decides whether the model is usable is how many tries it takes to get one clean scene, and a single draw cannot measure that at all.";
  "★ WHAT COMES BACK IS A COUNT OF TRIES AND NEVER A JUDGEMENT OF THEM. Nothing here can see lettering in a picture or tell a quiet middle from a busy one; a person looks at the folder and decides. This lays the tries out named and in order so that looking at them is cheap, and stops there on purpose.";
  "The tries of one scene are named after that scene with a number on the end, so that they sort together in the folder and a person reading it sees each scene's tries side by side rather than the whole first pass followed by the whole second.";
  "Which scenes, what size, and what counts as already drawn are the same here as in the run that draws each scene once, because a bench comparing two ways of drawing must differ in the drawing and in nothing else.";
  arguments_assert(arguments, 5);
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let width = 1152;
  let height = 2048;
  let folder = await lyric_video_picture_bench_folder(model, folder_ending);
  let numbers = range_1(attempts);
  let drawn = [];
  let refused = [];
  for (let picture of pictures) {
    let name = await path_basename(picture.path);
    let prompt = lyric_video_picture_prompt(picture.scene);
    let extension = path_extension(name);
    for (let attempt of numbers) {
      let ending = "_" + attempt + extension;
      let name_attempt = path_extension_replace(name, ending);
      let path = folder + "/" + name_attempt;
      let one = await lyric_video_picture_bench_draw_one(
        path,
        prompt,
        width,
        height,
        draw,
      );
      let was_drawn = equal(one.state, "drawn");
      if (was_drawn) {
        list_add(drawn, path);
      }
      let was_refused = equal(one.state, "refused");
      if (was_refused) {
        list_add(refused, name_attempt);
      }
    }
  }
  let r = {
    model,
    folder,
    pictures: pictures.length,
    attempts,
    drawn,
    refused,
  };
  return r;
}
