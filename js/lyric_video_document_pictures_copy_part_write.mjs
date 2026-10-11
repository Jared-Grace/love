import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_document_pictures_times_derive } from "./lyric_video_document_pictures_times_derive.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_pictures_copy_part_write(
  path_from,
  path_to,
) {
  arguments_assert(arguments, 2);
  ("$plain path_from");
  ("$plain path_to");
  ("Gives a singing of one part of a passage the pictures a singing of the whole passage already has, finding where the part's lines sit inside the whole and moving every picture by that many lines.");
  ("★ THE PART IS FOUND BY ITS WORDS, NEVER BY ITS VERSE NUMBERS. Every line of the part must match the whole's line at the same distance from the start found, the same match as copying between whole singings, so a line split or dropped in either singing finds no place and nothing is written. Psalm 144:9-15 sits at line 22 of Psalm 144, so the picture on line 26 of the whole lands on line 4 of the part.");
  ("★ THE PART OPENS ON THE PICTURE ALREADY SHOWING IN THE WHOLE AT THAT LINE. A picture pinned before the part's first line is still on screen there in the whole, so it is pinned to line 0 of the part unless a picture is pinned there already; pictures pinned past the part's end are left out.");
  let from = await file_read_json(path_from);
  let document = await file_read_json(path_to);
  let lines_from = from.lines;
  let lines = document.lines;
  let offset = -1;
  for (let i = 0; less_than_equal(i + lines.length, lines_from.length); i++) {
    let all = true;
    for (let k = 0; less_than(k, lines.length); k++) {
      let text_from = lines_from[i + k].text;
      let text_to = lines[k].text;
      let same =
        text_starts_with(text_to, text_from) ||
        text_starts_with(text_from, text_to);
      if (not(same)) {
        all = false;
        break;
      }
    }
    if (all) {
      offset = i;
      break;
    }
  }
  if (equal(offset, -1)) {
    let r_refused = {
      written: false,
      offset: null,
    };
    return r_refused;
  }
  let kept = [];
  let dropped = [];
  let showing = null;
  for (let picture of lyric_video_document_pictures(from)) {
    let line = subtract(picture.line, offset);
    let copy = {
      scene: picture.scene,
      name: picture.name,
      line,
      path: picture.path,
    };
    if (less_than(line, 0)) {
      showing = copy;
      continue;
    }
    if (greater_than_equal(line, lines.length)) {
      dropped.push(picture.name);
      continue;
    }
    kept.push(copy);
  }
  let opening_pinned = greater_than(kept.length, 0) && equal(kept[0].line, 0);
  if (not_equal(showing, null) && not(opening_pinned)) {
    showing.line = 0;
    kept.unshift(showing);
  }
  document.pictures = kept;
  lyric_video_document_pictures_times_derive(document, 0);
  await file_overwrite_json(path_to, document);
  let r = {
    written: true,
    offset,
    kept: kept.length,
    dropped,
  };
  return r;
}
