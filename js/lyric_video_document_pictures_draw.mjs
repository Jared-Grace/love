import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_picture_negative } from "./lyric_video_picture_negative.mjs";
import { lyric_video_picture_bench_size } from "./lyric_video_picture_bench_size.mjs";
import { fal_draw_negative } from "./fal_draw_negative.mjs";
import { file_exists } from "./file_exists.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { path_basename } from "./path_basename.mjs";
import { lyric_video_picture_prompt } from "./lyric_video_picture_prompt.mjs";
import { lyric_video_picture_bench_draw_one } from "./lyric_video_picture_bench_draw_one.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { command_line } from "./command_line.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function lyric_video_document_pictures_draw(path_document) {
  "$plain path_document";
  "Draws every picture an authored lyric video document asks for and does not yet have on disk, and answers which ones it drew.";
  "★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, WHICH IS WHY IT IS SAFE TO RUN AGAIN. A picture already on disk is left exactly as it is, so asking twice draws nothing the second time and costs nothing. That matters more here than in most places: every draw is paid for, and a command that redrew what it already had would charge the whole psalm again to add one picture to it.";
  "★ IT DRAWS CHEAP AND SMALL AND FINISHES THE PICTURE HERE, FOR NOTHING - THE ROUTE THE HUMAN DECIDED ON 2026-09-15. Z-Image on fal is drawn at 576 by 1024, the smallest true nine-by-sixteen it will give (it clamps a side under 512 up to 512, so anything smaller comes back square). That model writes captions into many of its pictures, and the draw is the only part of that which costs money: scripts/py/picture_ground_finish.py then finds the lettering, paints it out and scales the picture up to the document's own frame, locally. Black Forest Labs drew these at 1152 by 2048 before, and never captioned, at several times the price.";
  "★ THE SMALL DRAW IS KEPT BESIDE THE FINISHED ONE, IN A FOLDER ENDING _raw. It is the thing that was paid for, and it is what a repair is checked against - picture_lettering_residue.py compares the two. A run that dies between drawing and finishing is then finished by running this again, without drawing anything twice.";
  "★ NOTHING ALREADY DRAWN IS WRITTEN OVER, AND THAT IS THE SAME RULE READ FROM THE OTHER SIDE. To draw a picture differently, change what the document says the picture shows and give it a name of its own; the old one stays on disk to be looked at beside the new one, because the way a scene is settled is by drawing it several ways and comparing them.";
  "THE PICTURES ARE KEPT OUT OF THE REPO AND THE SCENES ARE KEPT IN IT. A drawn frame is a few megabytes and a repo keeps every copy of everything forever. What is worth keeping is the sentence that says what the picture shows, because that is the arguable part and the part a person can read - so the document is committed and the pixels sit in the ignored folder, regenerable from it.";
  "A SCENE THE HOUSE REFUSES IS NAMED BACK RATHER THAN THROWN, so one refusal does not stop the rest of the psalm; it stays undrawn, and so it is asked for again next run.";
  "The python is named by its whole path because it lives in its own environment on this machine, holding the OCR, the painter and the upscaler, and nothing else here needs them.";
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let model = "fal-ai/z-image/base";
  let negative_prompt = lyric_video_picture_negative();
  let drawn_at = lyric_video_picture_bench_size("half");
  async function draw(prompt, width, height) {
    let sample = await fal_draw_negative(
      model,
      prompt,
      negative_prompt,
      width,
      height,
    );
    return sample;
  }
  let folders = [];
  let drawn = [];
  let refused = [];
  let finished = [];
  for (let picture of pictures) {
    let there = await file_exists(picture.path);
    if (there) {
      continue;
    }
    let folder = await path_dirname(picture.path);
    let folder_raw = folder + "_raw";
    await folder_exists_ensure(folder_raw);
    let name = await path_basename(picture.path);
    let path_raw = folder_raw + "/" + name;
    let prompt = lyric_video_picture_prompt(picture.scene);
    let one = await lyric_video_picture_bench_draw_one(
      path_raw,
      prompt,
      drawn_at.width,
      drawn_at.height,
      draw,
    );
    if (equal(one.state, "refused")) {
      list_add(refused, picture.path);
      continue;
    }
    if (equal(one.state, "drawn")) {
      list_add(drawn, path_raw);
    }
    list_add(finished, picture.path);
    let b = folders.includes(folder);
    if (not(b)) {
      list_add(folders, folder);
    }
  }
  for (let folder of folders) {
    await folder_exists_ensure(folder);
    let command =
      "/home/j/a/venv/picture/bin/python scripts/py/picture_ground_finish.py " +
      folder +
      "_raw " +
      folder +
      " " +
      document.width +
      " " +
      document.height;
    await command_line(command);
  }
  let missing = [];
  for (let path of finished) {
    let made = await file_exists(path);
    if (not(made)) {
      list_add(missing, path);
    }
  }
  let r = {
    path_document,
    model,
    pictures: pictures.length,
    drawn,
    refused,
    finished: list_empty_is(missing),
    missing,
  };
  return r;
}
