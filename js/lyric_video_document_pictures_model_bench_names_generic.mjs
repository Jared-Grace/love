import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_picture_bench_folder } from "./lyric_video_picture_bench_folder.mjs";
import { path_basename } from "./path_basename.mjs";
import { lyric_video_picture_prompt } from "./lyric_video_picture_prompt.mjs";
import { lyric_video_picture_bench_draw_one } from "./lyric_video_picture_bench_draw_one.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_document_pictures_model_bench_names_generic(
  path_document,
  model,
  folder_ending,
  name_files,
  draw,
) {
  "$plain path_document";
  "$plain model";
  "$plain folder_ending";
  "Draws every scene an authored lyric video document names on one named model, into as many files for each scene as it is told to make, and says which were drawn and which the house refused.";
  "★ IT DRAWS THE SCENES ALREADY APPROVED RATHER THAN NEW ONES, AND THAT IS WHAT MAKES IT A MEASUREMENT INSTEAD OF A LOOK. A document whose pictures a person has read and accepted is a control that cost nothing to make and cannot be argued with afterwards: the wording is fixed, the size is fixed, the frame is fixed, and the only thing that differs between two sets is what drew them. Judging a new model on new scenes measures the scenes.";
  "★ THE PICTURES GO BESIDE THE ACCEPTED ONES AND NEVER OVER THEM. A bench that wrote into the document's own picture folder would spend the control to run the test - and the control is thirteen pictures somebody sat and looked at, which is the expensive half of this and the half that cannot be drawn again.";
  "★ WHAT IS BEING LOOKED FOR IS NOT WHICH PICTURE IS PRETTIEST. It is whether a model holds one painted look across a whole set, and whether it puts things where the wording says to put them - a sun high on the left and a moon high on the right, a middle left deep and quiet for the lettering. No published ranking measures either, because both are properties of a series and of a placement rather than of one picture.";
  "★ HOW MANY FILES A SCENE GETS IS HANDED IN AS A WAY OF NAMING THEM, WHICH IS WHAT LETS ONE DRAW EACH AND SEVERAL TRIES EACH BE THE SAME RUN. A caller asking for one picture per scene answers with the scene's own name; a caller asking for several tries answers with that name numbered. Everything else - which scenes, what size, what counts as already drawn, what is reported - then cannot differ between the two, which is the only way the two sets can be compared to each other at all.";
  "HOW A PICTURE IS ASKED FOR IS ALSO HANDED IN, and it is the only other thing two benches may differ in. A run that changed the scenes or the size as well would be comparing two different tests rather than two ways of drawing.";
  "It skips what is already on disk, so it is safe to run again and a run that stopped half way costs nothing to finish. Every draw is paid for, and the pictures sit in the ignored folder because pixels are regenerable from the scene and a repo keeps every copy of everything forever.";
  arguments_assert(arguments, 5);
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let width = 1152;
  let height = 2048;
  let folder = await lyric_video_picture_bench_folder(model, folder_ending);
  let drawn = [];
  let refused = [];
  for (let picture of pictures) {
    let name = await path_basename(picture.path);
    let prompt = lyric_video_picture_prompt(picture.scene);
    let files = name_files(name);
    for (let file of files) {
      let path = folder + "/" + file;
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
        list_add(refused, file);
      }
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
