import { arguments_assert } from "./arguments_assert.mjs";
import { range_1 } from "./range_1.mjs";
import { path_extension } from "./path_extension.mjs";
import { path_extension_replace } from "./path_extension_replace.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_document_pictures_model_bench_names_generic } from "./lyric_video_document_pictures_model_bench_names_generic.mjs";
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
  "★ NOTHING IS SENT TO SAY WHICH TRY THIS IS, AND THAT IS DELIBERATE. A house asked twice for the same wording answers differently by itself, and a machine of one's own is told to pick a fresh starting point each time by whatever is drawing there. So a try differs from its neighbours in nothing but the name of the file it lands in, which keeps this the same run for a house that takes a seed and a house that does not.";
  "The tries of one scene are named after that scene with a number on the end, so that they sort together in the folder and a person reading it sees each scene's tries side by side rather than the whole first pass followed by the whole second.";
  "Everything else about the run is the run that takes a naming, and is written there.";
  arguments_assert(arguments, 5);
  let numbers = range_1(attempts);
  function name_files(name) {
    let extension = path_extension(name);
    let files = [];
    for (let attempt of numbers) {
      let ending = "_" + attempt + extension;
      let file = path_extension_replace(name, ending);
      list_add(files, file);
    }
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
