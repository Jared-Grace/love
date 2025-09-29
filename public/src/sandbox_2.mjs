import { command_line_cmd } from "../../../love/public/src/command_line_cmd.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { folder_user } from "../../../love/public/src/folder_user.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { file_write } from "../../../love/public/src/file_write.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_chapters_each_verses_list } from "../../../love/public/src/ebible_chapters_each_verses_list.mjs";
import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { ebible_chapters_each_verses_check } from "../../../love/public/src/ebible_chapters_each_verses_check.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function sandbox_2() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let verses = await ebible_verses(bible_folder, chapter_code);
  let mapped = list_map_property(verses, "text");
  let text = list_join_space(mapped);
  let v2 = await file_temp(lambda);
  return v2;
  async function lambda(temp_path) {
    let folder = path_join(["audio", "bible", bible_folder, chapter_code]);
    let f = folder_user(folder);
    let o = {
      text,
      output_path: f,
    };
    let contents = json_to(o);
    await file_write(temp_path, contents);
    const c = "python.exe ./py/kokoro.py " + temp_path;
    const newLocal = "D:\\programs\\WPy64-312100\\python\\";
    let stdout = await command_line_cmd(c, newLocal);
    return stdout;
  }
  await ebible_chapters_each_verses_check(bible_folder);
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  await ebible_chapters_each_verses_list(list, bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let mapped = list_map_property(verses, "text");
    let joined = list_join_space(mapped);
  }
}
