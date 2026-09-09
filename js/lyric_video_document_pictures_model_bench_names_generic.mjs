import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_picture_bench_size } from "./lyric_video_picture_bench_size.mjs";
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
  size,
) {
  "$plain path_document";
  "$plain model";
  "$plain folder_ending";
  "$plain size";
  "Draws every scene an authored lyric video document names on one named model at one named size, into as many files for each scene as it is told to make, and says which were drawn and which the house refused.";
  "★ IT DRAWS THE SCENES ALREADY APPROVED RATHER THAN NEW ONES, AND THAT IS WHAT MAKES IT A MEASUREMENT INSTEAD OF A LOOK. A document whose pictures a person has read and accepted is a control that cost nothing to make and cannot be argued with afterwards: the wording is fixed, the size is fixed, the frame is fixed, and the only thing that differs between two sets is what drew them. Judging a new model on new scenes measures the scenes.";
  "★ THE PICTURES GO BESIDE THE ACCEPTED ONES AND NEVER OVER THEM. A bench that wrote into the document's own picture folder would spend the control to run the test - and the control is thirteen pictures somebody sat and looked at, which is the expensive half of this and the half that cannot be drawn again.";
  "★ WHAT IS BEING LOOKED FOR IS NOT WHICH PICTURE IS PRETTIEST. It is whether a model holds one painted look across a whole set, and whether it puts things where the wording says to put them - a sun high on the left and a moon high on the right, a middle left deep and quiet for the lettering. No published ranking measures either, because both are properties of a series and of a placement rather than of one picture.";
  "★ HOW MANY FILES A SCENE GETS IS HANDED IN AS A WAY OF NAMING THEM, WHICH IS WHAT LETS ONE DRAW EACH AND SEVERAL TRIES EACH BE THE SAME RUN. A caller asking for one picture per scene answers with the scene's own name; a caller asking for several tries answers with that name numbered. Everything else - which scenes, what counts as already drawn, what is reported - then cannot differ between the two, which is the only way the two sets can be compared to each other at all.";
  "★ THE SIZE IS NAMED BY THE CALLER AND THE FOLDER IS NAMED AFTER IT, WHICH IS THE WHOLE REASON THE LADDER CAN BE CLIMBED AT ALL. Two runs of one model at two sizes are two different tests, and were the size left out of the folder name the second would find the first's files already sitting there under the names it wanted and quietly skip every scene - answering that nothing needed drawing, at no charge, which reads exactly like a run that worked. So the size goes on the end of the ending, and every rung keeps its own set on disk to be looked at beside the others.";
  "★ THE SIZE USED TO BE WRITTEN IN HERE, AND BEFORE THAT IT WAS WRITTEN IN WRONG. Every one of these grounds is laid into a frame nine wide by sixteen high; the first size was neither that shape nor that size, being both wider in proportion and half again as many dots as the frame it was going into, so a twelfth of every picture was drawn to be thrown away and the rest was drawn at a fineness nobody would ever see. Two things were bought with that: the picture is paid for by the dot at every house that draws it, and a model asked for far more area than it was taught on is a model that starts drawing the subject twice - which is the likeliest reason a night sky asked for one moon came back with two.";
  "HOW A PICTURE IS ASKED FOR IS ALSO HANDED IN, and it is the only other thing two benches may differ in. A run that changed the scenes as well would be comparing two different tests rather than two ways of drawing.";
  "SETS DRAWN BEFORE THE SIZE BECAME A NAMED RUNG SIT IN FOLDERS WITH NO SIZE ON THE END, so a new run compared against one of those is comparing the size as well as the model unless somebody knows what that old folder was drawn at. The way through is to draw both sides again rather than to argue about the old folder.";
  "It skips what is already on disk, so it is safe to run again and a run that stopped half way costs nothing to finish. Every draw is paid for, and the pictures sit in the ignored folder because pixels are regenerable from the scene and a repo keeps every copy of everything forever.";
  arguments_assert(arguments, 6);
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let drawn_at = lyric_video_picture_bench_size(size);
  let width = drawn_at.width;
  let height = drawn_at.height;
  let ending = folder_ending + "_" + size;
  let folder = await lyric_video_picture_bench_folder(model, ending);
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
    width,
    height,
    pictures: pictures.length,
    drawn,
    refused,
  };
  return r;
}
