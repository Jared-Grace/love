import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { file_exists } from "./file_exists.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { lyric_video_picture_prompt } from "./lyric_video_picture_prompt.mjs";
import { bfl_draw_write } from "./bfl_draw_write.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_document_pictures_draw(path_document) {
  "$plain path_document";
  "Draws every picture an authored lyric video document asks for and does not yet have on disk, and answers which ones it drew.";
  "★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, WHICH IS WHY IT IS SAFE TO RUN AGAIN. A picture already on disk is left exactly as it is, so asking twice draws nothing the second time and costs nothing. That matters more here than in most places: every draw is paid for, and a command that redrew what it already had would charge the whole psalm again to add one picture to it.";
  "★ NOTHING ALREADY DRAWN IS WRITTEN OVER, AND THAT IS THE SAME RULE READ FROM THE OTHER SIDE. To draw a picture differently, change what the document says the picture shows and give it a name of its own; the old one stays on disk to be looked at beside the new one, because the way a scene is settled is by drawing it several ways and comparing them. Overwriting throws away the very thing being compared, and the picture that is lost cannot be got back - the wording is in the history, the pixels never were.";
  "THE PICTURES ARE KEPT OUT OF THE REPO AND THE SCENES ARE KEPT IN IT. A drawn frame is a few megabytes and a repo keeps every copy of everything forever; this one is already carrying more weight than it should. What is worth keeping is the sentence that says what the picture shows, because that is the arguable part and the part a person can read - so the document is committed and the pixels sit in the ignored folder, regenerable from it.";
  "IT DRAWS AT THE FRAME'S OWN SHAPE, NINE BY SIXTEEN, so that fitting a picture into the frame and filling the frame with it are the same thing. The numbers are both whole multiples of thirty-two, which is what the drawing accepts, and they are the largest such pair at that shape that has been drawn here.";
  "The pictures are drawn one after another rather than all at once. They are paid for and they are slow, and a failure partway through a row leaves every picture before it on disk and already accounted for - so the repair is to run this again, which is exactly what running it again is for.";
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let model = "flux-2-pro-preview";
  let width = 1152;
  let height = 2048;
  let drawn = [];
  for (let picture of pictures) {
    let there = await file_exists(picture.path);
    if (there) {
      continue;
    }
    let folder = await path_dirname(picture.path);
    await folder_exists_ensure(folder);
    let prompt = lyric_video_picture_prompt(picture.scene);
    await bfl_draw_write(model, prompt, width, height, picture.path);
    list_add(drawn, picture.path);
  }
  let r = {
    path_document,
    pictures: pictures.length,
    drawn,
  };
  return r;
}
