import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace } from "./text_replace.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
export async function lyric_video_picture_bench_folder(model, folder_ending) {
  "$plain model";
  "$plain folder_ending";
  "Makes and answers the folder one bench run of one model writes into, named after the model and after whatever tells this run apart from that model's other runs.";
  "★ EVERY RUN GETS A FOLDER OF ITS OWN SO THAT NO RUN CAN DESTROY THE THING IT IS BEING COMPARED AGAINST. What a bench asks is whether a second way of drawing changed anything, and that can only be answered with both sets of pictures on disk at once. A run that wrote over its predecessor would spend the comparison in order to make it.";
  "A model is named with a slash in it and a folder cannot be, so the slash becomes an underline and the whole model name survives in the folder name - which matters because the folder is the only place the run says what drew it.";
  "The pieces are joined with a plus rather than through a text joiner that takes exactly two, because there are three of them; a joiner given a third piece dropped it without a word, and the folder then lost its ending and collapsed onto the run before it.";
  arguments_assert(arguments, 2);
  let name_folder = text_replace(model, "/", "_");
  let folder =
    "gitignore/lyric_video_pictures_bench/" + name_folder + folder_ending;
  await folder_exists_ensure(folder);
  return folder;
}
