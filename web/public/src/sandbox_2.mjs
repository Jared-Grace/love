import { marker } from "./marker.mjs";
import { folder_user } from "./folder_user.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { json_to } from "./json_to.mjs";
import { file_write } from "./file_write.mjs";
import { file_temp } from "./file_temp.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { log } from "./log.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_chapters_each_verses_list } from "./ebible_chapters_each_verses_list.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_version_books_testament_apocrypha } from "./ebible_version_books_testament_apocrypha.mjs";
import { ebible_chapters_each_verses_check } from "./ebible_chapters_each_verses_check.mjs";
import { command_line } from "./command_line.mjs";
import { path_join } from "./path_join.mjs";
export async function sandbox_2() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let verses = await ebible_verses(bible_folder, chapter_code);
  let mapped = list_map_property(verses, "text");
  let text = list_join_space(mapped);
  return await file_temp(lambda);
  async function lambda(temp_path) {
    let folder = path_join(["audio", "bible", bible_folder, chapter_code]);
    let f = folder_user(folder);
    let o = {
      text,
      output_path: f,
    };
    let contents = json_to(o);
    await file_write(temp_path, contents);
    let v = await command_line(
      "D:\\programs\\WPy64-312100\\python>python.exe ./py/kokoro.py " +
        temp_path,
    );
    return v;
  }
  return;
  await ebible_chapters_each_verses_check(bible_folder);
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  await ebible_chapters_each_verses_list(list, bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let mapped = list_map_property(verses, "text");
    let joined = list_join_space(mapped);
    log(joined);
  }
}
