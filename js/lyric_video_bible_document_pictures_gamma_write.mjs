import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_bible_document_pictures_gamma_write(
  version,
  book_code,
  chapter_number,
  gamma,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "$plain gamma";
  "Writes one lifting number against every background picture of one chapter's lyric video, so a whole psalm that came back too dark is answered in a single command.";
  "★ IT IS ONE NUMBER FOR THE WHOLE PSALM AND NOT A NUMBER PER PICTURE, BECAUSE THAT IS THE SHAPE THE COMPLAINT ARRIVES IN. Somebody watches a psalm through and says it was dark; they are describing the set they just sat through and not the third picture of it. Gamma bends the middle of a picture upwards and leaves both ends where they are, so one number lifts all of them while keeping the night scene the darkest of them and the desert the brightest - the set rises and keeps its own shape. A picture that still wants its own number afterwards gets one written beside it, and this pass is what makes that one remaining decision rather than nine.";
  "IT WRITES OVER WHATEVER NUMBER WAS THERE, WHICH IS WHAT MAKES IT A DIAL RATHER THAN A FILLING IN. Finding the right lift is watching, disliking it, and asking again with a larger number; a pass that declined to change a value already set would answer the second asking by doing nothing at all, and would read as the number having failed rather than as the pass having ignored it.";
  "NOTHING ON DISK IS TOUCHED AND NOTHING IS REDRAWN. The number is kept in the document and applied on the way into the video every time it is rendered, so a lift that turns out wrong costs one render and never a draw, and the painting that came back from the model is still the painting on disk to be lifted differently tomorrow.";
  "A PASSAGE WITH NO DOCUMENT, AND A DOCUMENT ASKING FOR NO PICTURES, ARE BOTH ANSWERED RATHER THAN REFUSED. In each case there is nothing to lift, and that is a fact about the passage rather than a fault in the asking - the same reading the rest of this family takes.";
  arguments_assert(arguments, 4);
  let number_chapter = Number(chapter_number);
  let number_gamma = Number(gamma);
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    number_chapter,
  );
  let there = await file_exists(path_document);
  if (not(there)) {
    let undrafted = {
      path_document,
      pictures: 0,
      gamma: number_gamma,
      written: false,
      why: "this passage has no lyric video document yet",
    };
    return undrafted;
  }
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let none = list_empty_is(pictures);
  if (none) {
    let bare = {
      path_document,
      pictures: 0,
      gamma: number_gamma,
      written: false,
      why: "this document asks for no pictures",
    };
    return bare;
  }
  for (let picture of pictures) {
    picture.gamma = number_gamma;
  }
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    pictures: pictures.length,
    gamma: number_gamma,
    written: true,
    why: null,
  };
  return r;
}
