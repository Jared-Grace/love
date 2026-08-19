import { bible_verse_holes_path } from "./bible_verse_holes_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_verse_holes_entry_empty_is } from "./bible_verse_holes_entry_empty_is.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bible_verse_holes_empty_folders() {
  "The bibles the hole record says answered with nothing for every verse of the measured book.";
  "It reads the file rather than the network, so it costs nothing and answers the same thing the gate is refusing. Whoever is working out what to do about those bibles starts here.";
  let path = bible_verse_holes_path();
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  let empty = list_filter(bibles, bible_verse_holes_entry_empty_is);
  let property_name = bible_folder_key();
  let folders = list_map_property(empty, property_name);
  return folders;
}
