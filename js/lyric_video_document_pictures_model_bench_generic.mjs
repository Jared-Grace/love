import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { text_replace } from "./text_replace.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { path_basename } from "./path_basename.mjs";
import { file_exists } from "./file_exists.mjs";
import { lyric_video_picture_prompt } from "./lyric_video_picture_prompt.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { http_buffer_file_overwrite } from "./http_buffer_file_overwrite.mjs";
export async function lyric_video_document_pictures_model_bench_generic(
  path_document,
  model,
  folder_ending,
  draw,
) {
  "$plain path_document";
  "$plain model";
  "$plain folder_ending";
  "Draws every scene an authored lyric video document names on one named model, into a folder of that run's own, and says which were drawn and which the house refused.";
  "★ IT DRAWS THE SCENES ALREADY APPROVED RATHER THAN NEW ONES, AND THAT IS WHAT MAKES IT A MEASUREMENT INSTEAD OF A LOOK. A document whose pictures a person has read and accepted is a control that cost nothing to make and cannot be argued with afterwards: the wording is fixed, the size is fixed, the frame is fixed, and the only thing that differs between two sets is what drew them. Judging a new model on new scenes measures the scenes.";
  "★ THE PICTURES GO BESIDE THE ACCEPTED ONES AND NEVER OVER THEM. A bench that wrote into the document's own picture folder would spend the control to run the test - and the control is thirteen pictures somebody sat and looked at, which is the expensive half of this and the half that cannot be drawn again. The ending on the folder is what keeps two runs of ONE model apart for the same reason: both sets have to be on disk at once or there is nothing to compare.";
  "★ WHAT IS BEING LOOKED FOR IS NOT WHICH PICTURE IS PRETTIEST. It is whether a model holds one painted look across a whole set, and whether it puts things where the wording says to put them - a sun high on the left and a moon high on the right, a middle left deep and quiet for the lettering. No published ranking measures either, because both are properties of a series and of a placement rather than of one picture.";
  ("★ THE FOLDER AND THE PATHS ARE JOINED WITH `+` AND NOT WITH `",
    fn_name("text_combine"),
    "`, WHICH TAKES EXACTLY TWO PIECES. Measured 2026-09-06: a three-argument call dropped its third piece without a word, so the folder lost its ending and every picture's path collapsed to the bare folder, which already existed - the run reported thirteen pictures, drew none, refused none, and looked like a complete success.");
  ("HOW A PICTURE IS ASKED FOR IS HANDED IN, AND IT IS THE ONLY THING THAT DIFFERS BETWEEN TWO BENCHES. Everything around it - which scenes, what size, where they land, what counts as already done - has to be the same in both runs or the comparison is between two different tests rather than between two ways of drawing.");
  ("It skips what is already on disk, so it is safe to run again and a run that stopped half way costs nothing to finish. Every draw is paid for, and the pictures sit in the ignored folder because pixels are regenerable from the scene and a repo keeps every copy of everything forever.");
  arguments_assert(arguments, 4);
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let width = 1152;
  let height = 2048;
  let name_folder = text_replace(model, "/", "_");
  let folder =
    "gitignore/lyric_video_pictures_bench/" + name_folder + folder_ending;
  await folder_exists_ensure(folder);
  let drawn = [];
  let refused = [];
  for (let picture of pictures) {
    let name = await path_basename(picture.path);
    let path = folder + "/" + name;
    let there = await file_exists(path);
    if (there) {
      continue;
    }
    let prompt = lyric_video_picture_prompt(picture.scene);
    let sample = await draw(prompt, width, height);
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
