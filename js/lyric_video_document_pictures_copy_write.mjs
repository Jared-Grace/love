import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { lyric_video_document_pictures_times_derive } from "./lyric_video_document_pictures_times_derive.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_pictures_copy_write(
  path_from,
  paths_to,
) {
  arguments_assert(arguments, 2);
  ("$plain path_from");
  ("$plain paths_to");
  ("Gives other singings of the same words the pictures one document already has, each picture coming up on the same line of words, timed to that singing's own lines.");
  ("★ A PICTURE IS COPIED BY ITS LINE, NEVER BY ITS SECONDS. Two singings of one psalm reach the same words at different moments, so the seconds of one are wrong for the other; the line a picture is pinned to is the authored choice, and the seconds are worked out again from the lines of the document receiving it.");
  ("★ A DOCUMENT WHOSE WORDS DIFFER ON ANY PINNED LINE IS REFUSED AND NAMED, AND NOTHING IS WRITTEN TO IT. A picture chosen for one line of words is only right on that same line of words; a singing with a line split or dropped would put every later picture against the wrong words, silently.");
  let from = await file_read_json(path_from);
  let pictures_from = lyric_video_document_pictures(from);
  let lines_from = from.lines;
  let targets = text_split_comma(paths_to);
  let written = [];
  let refused = [];
  for (let path_to of targets) {
    let document = await file_read_json(path_to);
    let lines = document.lines;
    let differing = [];
    for (let picture of pictures_from) {
      let text_from = lines_from[picture.line].text;
      let line_to = lines[picture.line];
      let same =
        not_equal(line_to, undefined) && equal(line_to.text, text_from);
      if (not(same)) {
        differing.push(picture.line);
      }
    }
    if (greater_than(differing.length, 0)) {
      refused.push({
        path_to,
        lines_differing: differing,
      });
      continue;
    }
    let copies = [];
    for (let picture of pictures_from) {
      copies.push({
        scene: picture.scene,
        name: picture.name,
        line: picture.line,
        path: picture.path,
      });
    }
    document.pictures = copies;
    lyric_video_document_pictures_times_derive(document, 0);
    await file_overwrite_json(path_to, document);
    written.push(path_to);
  }
  let r = {
    written,
    refused,
  };
  return r;
}
