import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { image_pixels_tone_toward_full } from "./image_pixels_tone_toward_full.mjs";
import { path_basename } from "./path_basename.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function lyric_video_pictures_tone_strengths_preview_write(
  path_document,
  strengths,
) {
  "$plain path_document";
  "$plain strengths";
  "Draws one sheet with a row for every picture of a lyric video: the picture as it is, then the same picture moved toward the whole range of dark, light and colour at each strength given, left to right, each column labelled, so a strength can be chosen by eye by comparing them side by side.";
  "★ ALL THE STRENGTHS ARE ON ONE SHEET RATHER THAN ONE SHEET EACH, because the choice is between neighbours and an eye compares neighbours side by side far better than across two files opened one after the other.";
  "★ IT CHANGES NO PICTURE THE VIDEO USES. The sheet is the whole of what it writes.";
  "The strengths are one comma-joined word, the way every list is handed over a command line here.";
  let list = String(strengths).split(",").map(Number);
  let document = await file_read_json(path_document);
  let pictures = property_get(document, "pictures");
  let library = await import_install("canvas");
  let createCanvas = property_get(library, "createCanvas");
  let loadImage = property_get(library, "loadImage");
  let cell_width = 216;
  let cell_height = 384;
  let label_height = 40;
  let columns = list.length + 1;
  let p = multiply(cell_width, columns);
  let sheet = createCanvas(
    p,
    label_height + multiply(cell_height, pictures.length),
  );
  let sheet_ctx = sheet.getContext("2d");
  sheet_ctx.fillStyle = "#000000";
  sheet_ctx.fillRect(0, 0, sheet.width, sheet.height);
  sheet_ctx.fillStyle = "#ffffff";
  sheet_ctx.font = "28px sans-serif";
  sheet_ctx.textAlign = "center";
  sheet_ctx.textBaseline = "middle";
  let v = list.map(String);
  let labels = ["original"].concat(v);
  for (let column = 0; less_than(column, columns); column++) {
    let divided = divide(label_height, 2);
    sheet_ctx.fillText(
      labels[column],
      multiply(cell_width, column) + divide(cell_width, 2),
      divided,
    );
  }
  let repo = folder_repo_love();
  for (let row = 0; less_than(row, pictures.length); row++) {
    let picture = pictures[row];
    let r = path_join([repo, picture.path]);
    let image = await loadImage(r);
    let y = label_height + multiply(row, cell_height);
    sheet_ctx.drawImage(image, 0, y, cell_width, cell_height);
    for (let index = 0; less_than(index, list.length); index++) {
      let canvas = createCanvas(image.width, image.height);
      let ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      let image_data = ctx.getImageData(0, 0, image.width, image.height);
      image_pixels_tone_toward_full(image_data.data, list[index]);
      ctx.putImageData(image_data, 0, 0);
      let p2 = multiply(cell_width, index + 1);
      sheet_ctx.drawImage(canvas, p2, y, cell_width, cell_height);
    }
  }
  let name_document = await path_basename(path_document);
  let stem = name_document.replace(/\.json$/, "");
  let file_name = text_combine_multiple([stem, "_tone_strengths.png"]);
  let r2 = folder_gitignore_name();
  let path_sheet = path_join([
    repo,
    r2,
    "lyric_video_tone_previews",
    file_name,
  ]);
  await file_parent_exists_ensure(path_sheet);
  let contents = sheet.toBuffer("image/png");
  await file_overwrite_buffer(path_sheet, contents);
  return path_sheet;
}
