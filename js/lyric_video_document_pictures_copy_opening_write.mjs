import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { greater_than } from "./greater_than.mjs";
import { lyric_video_document_pictures_times_derive } from "./lyric_video_document_pictures_times_derive.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_pictures_copy_opening_write(
  path_from,
  path_to,
) {
  arguments_assert(arguments, 2);
  ("$plain path_from");
  ("$plain path_to");
  ("Gives a singing of the opening part of a passage the pictures a singing of the whole passage already has, keeping every picture pinned to a line the part holds and leaving out the ones pinned past its end.");
  ("★ IT IS FOR A PART THAT STARTS WHERE THE WHOLE STARTS, SO LINE NUMBERS STILL MEAN THE SAME WORDS. Psalm 144:1-8 holds the first twenty-two lines of Psalm 144, so a picture on line 12 of the whole is on line 12 of the part. A part from the middle would shift every line number, and the word check below is what refuses that.");
  ("★ A KEPT PICTURE WHOSE LINE HOLDS DIFFERENT WORDS REFUSES THE WHOLE COPY AND NOTHING IS WRITTEN, by the same rule as copying between whole singings: a picture chosen for one line of words is only right on that line.");
  let from = await file_read_json(path_from);
  let document = await file_read_json(path_to);
  let lines_from = from.lines;
  let lines = document.lines;
  let kept = [];
  let dropped = [];
  let differing = [];
  for (let picture of lyric_video_document_pictures(from)) {
    let b = less_than(picture.line, lines.length);
    if (not(b)) {
      dropped.push(picture.name);
      continue;
    }
    let text_from = lines_from[picture.line].text;
    let text_to = lines[picture.line].text;
    let same =
      text_starts_with(text_to, text_from) ||
      text_starts_with(text_from, text_to);
    if (not(same)) {
      differing.push(picture.line);
      continue;
    }
    kept.push({
      scene: picture.scene,
      name: picture.name,
      line: picture.line,
      path: picture.path,
    });
  }
  if (greater_than(differing.length, 0)) {
    let r_refused = {
      written: false,
      lines_differing: differing,
    };
    return r_refused;
  }
  document.pictures = kept;
  lyric_video_document_pictures_times_derive(document, 0);
  await file_overwrite_json(path_to, document);
  let r = {
    written: true,
    kept: kept.length,
    dropped,
  };
  return r;
}
