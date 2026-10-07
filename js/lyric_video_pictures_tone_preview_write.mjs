import { ceil } from "./ceil.mjs";
import { floor } from "./floor.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
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
export async function lyric_video_pictures_tone_preview_write(
  path_document,
  strength,
) {
  "$plain path_document";
  "$plain strength";
  "Draws one sheet showing every picture of a lyric video before and after being moved toward the whole range of dark, light and colour, each pair side by side, so the change can be judged by eye before any video is made with it.";
  "★ IT CHANGES NO PICTURE THE VIDEO USES. The sheet is the whole of what it writes, so it can be run at one strength after another until one looks right.";
  "Each picture's own measurements come back beside the sheet, so a pair that looks unchanged can be told apart from one that was never touched.";
  let document = await file_read_json(path_document);
  let pictures = property_get(document, "pictures");
  let library = await import_install("canvas");
  let createCanvas = property_get(library, "createCanvas");
  let loadImage = property_get(library, "loadImage");
  let cell_width = 270;
  let cell_height = 480;
  let pairs_per_row = 4;
  let p = divide(pictures.length, pairs_per_row);
  let rows = ceil(p);
  let left = multiply(cell_width, 2);
  let p2 = multiply(left, pairs_per_row);
  let p3 = multiply(cell_height, rows);
  let sheet = createCanvas(p2, p3);
  let sheet_ctx = sheet.getContext("2d");
  sheet_ctx.fillStyle = "#000000";
  sheet_ctx.fillRect(0, 0, sheet.width, sheet.height);
  let measured = [];
  let repo = folder_repo_love();
  for (let index = 0; less_than(index, pictures.length); index++) {
    let picture = pictures[index];
    let r2 = path_join([repo, picture.path]);
    let image = await loadImage(r2);
    let canvas = createCanvas(image.width, image.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    let image_data = ctx.getImageData(0, 0, image.width, image.height);
    let strength2 = Number(strength);
    let one = image_pixels_tone_toward_full(image_data.data, strength2);
    let after = createCanvas(image.width, image.height);
    after.getContext("2d").putImageData(image_data, 0, 0);
    let left2 = modulo(index, pairs_per_row);
    let left3 = multiply(left2, cell_width);
    let x = multiply(left3, 2);
    let p4 = divide(index, pairs_per_row);
    let left4 = floor(p4);
    let y = multiply(left4, cell_height);
    sheet_ctx.drawImage(image, x, y, cell_width, cell_height);
    sheet_ctx.drawImage(after, x + cell_width, y, cell_width, cell_height);
    measured.push({
      name: picture.name,
      ...one,
    });
  }
  let name_document = await path_basename(path_document);
  let stem = name_document.replace(/\.json$/, "");
  let file_name = text_combine_multiple([stem, "_tone_", strength, ".png"]);
  let r3 = folder_gitignore_name();
  let path_sheet = path_join([
    repo,
    r3,
    "lyric_video_tone_previews",
    file_name,
  ]);
  await file_parent_exists_ensure(path_sheet);
  let contents = sheet.toBuffer("image/png");
  await file_overwrite_buffer(path_sheet, contents);
  let r = {
    path_sheet,
    measured,
  };
  return r;
}
