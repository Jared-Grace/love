import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_pictures_model_bench_names_generic } from "./lyric_video_document_pictures_model_bench_names_generic.mjs";
export async function lyric_video_document_pictures_model_bench_generic(
  path_document,
  model,
  folder_ending,
  draw,
) {
  "$plain path_document";
  "$plain model";
  "$plain folder_ending";
  "Draws every scene an authored lyric video document names on one named model, once each, into a folder of that run's own.";
  "★ ONE DRAW PER SCENE IS THE HONEST TEST ONLY WHILE EACH PICTURE IS PAID FOR SEPARATELY. Where the drawing is metered, a picture that came out wrong is a picture that would have to be bought again, so a single pass is what a finished set will really cost. Where an hour of a machine is bought outright a wrong picture is thrown away for nothing, and the question turns into how many tries a scene takes - which is the run next door and not this one.";
  "Each scene's file is called what the document already calls it, so a run of this can be read straight against the pictures that were accepted.";
  "Everything else about the run is the run that takes a naming, and is written there.";
  arguments_assert(arguments, 4);
  function name_files(name) {
    let files = [name];
    return files;
  }
  let r = await lyric_video_document_pictures_model_bench_names_generic(
    path_document,
    model,
    folder_ending,
    name_files,
    draw,
  );
  return r;
}
