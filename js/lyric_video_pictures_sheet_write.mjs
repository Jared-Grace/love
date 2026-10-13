import { lyric_video_pictures_folder } from "./lyric_video_pictures_folder.mjs";
import { ceil } from "./ceil.mjs";
import { divide } from "./divide.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { error } from "./error.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { text_combine } from "./text_combine.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function lyric_video_pictures_sheet_write(document_name) {
  "One picture holding every lyric video picture of one document, four across, so a whole document's pictures can be looked over in a single read rather than one read each. Answers where the sheet was written and the names in the order they are tiled, so a tile can be named; open the sheet with the Read tool.";
  "WHY IT EXISTS: every picture has to be looked at before it is written into a document, because a painting that is public domain is not therefore clothed, and the pictures already on disk were never looked over. Looked at one at a time that is a read per picture over hundreds of them; looked at four across it is a read per document.";
  "THE DOCUMENT IS NAMED, NEVER PATHED: a name holding a slash or a backslash, or starting with a dot, is refused, so the only thing this can read is a folder sitting directly in the lyric video pictures folder.";
  "THE SHEET GOES TO ONE FIXED FOLDER, under the ignored folder, named after the document. Nothing the caller hands in can choose where it lands, which is what lets this run without asking.";
  let refused =
    text_includes(document_name, "/") ||
    text_includes(document_name, "\\") ||
    text_starts_with(document_name, ".");
  if (refused) {
    error({
      hint: "name a folder that sits directly in gitignore/lyric_video_pictures, without any folder in front of it",
      document_name,
    });
  }
  let folder_pictures = path_join([
    lyric_video_pictures_folder(),
    document_name,
  ]);
  let files = await folder_read_files(folder_pictures);
  function lambda_png(name) {
    let png = text_ends_with(name, ".png");
    return png;
  }
  let names = files.filter(lambda_png);
  let count = list_size(names);
  if (not(count)) {
    error({
      hint: "that folder holds no pictures, so there is nothing to look over",
      document_name,
      folder_pictures,
    });
  }
  ("The glob is handed to ffmpeg rather than to a shell, and ffmpeg walks it in the same alphabetical order the folder was read in, so the names answered here are the tiles left to right and top to bottom.");
  let across = 4;
  let p = divide(count, across);
  let down = ceil(p);
  let folder_sheets = "gitignore/lyric_video_picture_sheets";
  await folder_exists_ensure(folder_sheets);
  let combined = text_combine(document_name, ".jpg");
  let sheet_path = path_join([folder_sheets, combined]);
  let glob = path_join([folder_pictures, "*.png"]);
  let right = text_combine(across + "x", down);
  let tile = text_combine("scale=270:480,tile=", right);
  let command_words = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-pattern_type",
    "glob",
    "-i",
    glob,
    "-vf",
    tile,
    "-frames:v",
    "1",
    "-update",
    "1",
    sheet_path,
  ];
  await ffmpeg_words_run(command_words);
  let r = {
    sheet_path,
    names,
    across,
    down,
  };
  return r;
}
