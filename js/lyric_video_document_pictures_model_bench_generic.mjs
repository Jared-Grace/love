import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_picture_bench_folder } from "./lyric_video_picture_bench_folder.mjs";
import { path_basename } from "./path_basename.mjs";
import { lyric_video_picture_prompt } from "./lyric_video_picture_prompt.mjs";
import { lyric_video_picture_bench_draw_one } from "./lyric_video_picture_bench_draw_one.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
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
  "★ THE PICTURES GO BESIDE THE ACCEPTED ONES AND NEVER OVER THEM. A bench that wrote into the document's own picture folder would spend the control to run the test - and the control is thirteen pictures somebody sat and looked at, which is the expensive half of this and the half that cannot be drawn again.";
  "★ WHAT IS BEING LOOKED FOR IS NOT WHICH PICTURE IS PRETTIEST. It is whether a model holds one painted look across a whole set, and whether it puts things where the wording says to put them - a sun high on the left and a moon high on the right, a middle left deep and quiet for the lettering. No published ranking measures either, because both are properties of a series and of a placement rather than of one picture.";
  "★ IT ASKS ONCE FOR EACH SCENE, WHICH IS THE RIGHT TEST ONLY WHILE EACH PICTURE IS PAID FOR SEPARATELY. Where the drawing is metered, a picture that came out wrong is a picture you would have to buy again, so one draw is what a set will really cost. Where an hour of a machine is bought outright, a wrong picture is thrown away for nothing and the question becomes how many tries a scene takes - which is a different run and is written next door.";
  "HOW A PICTURE IS ASKED FOR IS HANDED IN, AND IT IS THE ONLY THING THAT DIFFERS BETWEEN TWO BENCHES. Everything around it - which scenes, what size, where they land, what counts as already done - has to be the same in both runs or the comparison is between two different tests rather than between two ways of drawing.";
  "It skips what is already on disk, so it is safe to run again and a run that stopped half way costs nothing to finish. Every draw is paid for, and the pictures sit in the ignored folder because pixels are regenerable from the scene and a repo keeps every copy of everything forever.";
  arguments_assert(arguments, 4);
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let width = 1152;
  let height = 2048;
  let folder = await lyric_video_picture_bench_folder(model, folder_ending);
  let drawn = [];
  let refused = [];
  for (let picture of pictures) {
    let name = await path_basename(picture.path);
    let path = folder + "/" + name;
    let prompt = lyric_video_picture_prompt(picture.scene);
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
      list_add(refused, name);
    }
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
