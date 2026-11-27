import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { photo_organizer_folders } from "./photo_organizer_folders.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { html_hash_name_second_set } from "./html_hash_name_second_set.mjs";
import { not } from "./not.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_input_type_label } from "./app_shared_input_type_label.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { photo_organizer_photo_delete_add } from "./photo_organizer_photo_delete_add.mjs";
import { app_shared_photos_draw_buttons } from "./app_shared_photos_draw_buttons.mjs";
import { file_name_random_browser } from "./file_name_random_browser.mjs";
import { list_add } from "./list_add.mjs";
import { html_input_file_accept_multiple } from "./html_input_file_accept_multiple.mjs";
import { app_shared_button_wide_input } from "./app_shared_button_wide_input.mjs";
import { photo_organizer_folder_delete_screen } from "./photo_organizer_folder_delete_screen.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
export async function photo_organizer_folder_screen(root, key) {
  "$plain root";
  "$plain key";
  "One folder of the photo organizer: the way back up through every folder it sits inside, the folders inside it, a box and button to make another inside it, and its photos with a button to add more.";
  "Folders go inside folders to any depth: a folder made here sits inside this one, and opening it shows the same screen for it.";
  "The folder open is written after the slash of the address, so the address in the bar always opens it; a key no folder has opens the top folder instead.";
  "Several photos can be chosen at once, from the gallery or the camera, and each shows at once and is kept on this phone with the folder.";
  arguments_assert(arguments, 2);
  html_clear(root);
  let folders = await photo_organizer_folders();
  let by_key = {};
  for (let f of folders) {
    let property_name = property_get(f, "key");
    property_set(by_key, property_name, f);
  }
  let top_key = text_frozen("top");
  let folder = property_get_or(by_key, key, null);
  if (equal(folder, null)) {
    folder = property_get(by_key, top_key);
  }
  let folder_key = property_get(folder, "key");
  html_hash_name_second_set(folder_key);
  async function open(next_key) {
    await photo_organizer_folder_screen(root, next_key);
  }
  ("Along the top, every folder from the top one down to this one, each a button that opens it.");
  let path = [];
  let at = folder;
  while (not(equal(at, null))) {
    list_add_first(path, at);
    let key2 = property_get(at, "parent");
    at = property_get_or(by_key, key2, null);
  }
  let trail = html_div(root);
  html_display_flex(trail);
  html_style_set(trail, "flex-wrap", "wrap");
  html_style_gap(trail, "0.3em");
  for (let step of path) {
    function on_step() {
      let value = property_get(step, "key");
      open(value);
    }
    app_shared_button(trail, "📂 " + property_get(step, "name"), on_step);
  }
  ("Then the folders inside this one, in the order they were made.");
  function inside_is(f) {
    let left = property_get(f, "parent");
    let eq = equal(left, folder_key);
    return eq;
  }
  let children = list_filter(folders, inside_is);
  for (let child of children) {
    function on_child() {
      let value2 = property_get(child, "key");
      open(value2);
    }
    app_shared_button_wide(root, "📁 " + property_get(child, "name"), on_child);
  }
  let name_input = app_shared_input_type_label(root, "New folder name", "text");
  html_attribute_set(name_input, "placeholder", "Trips, Family, Church...");
  async function on_new() {
    let message = html_value_get(name_input);
    let name = text_trim(message);
    if (equal(name, "")) {
      return;
    }
    let made = {
      key: uuid_browser(),
      parent: folder_key,
      name,
      photos: [],
    };
    await photo_organizer_folder_put(made);
    await open(folder_key);
  }
  app_shared_button_wide(root, "➕ New folder", on_new);
  app_shared_field_title(root, "Photos");
  ("A photo opened from here can also be deleted.");
  function photo_buttons_add(screen, close, thumbnail, source) {
    photo_organizer_photo_delete_add(folder, screen, close, thumbnail, source);
  }
  let file_show = app_shared_photos_draw_buttons(
    root,
    folder,
    photo_buttons_add,
  );
  let photos = property_get(folder, "photos");
  async function on_files(files) {
    for (let file of files) {
      let name = file_name_random_browser(file);
      list_add(photos, {
        name,
        file,
      });
      file_show(file);
    }
    await photo_organizer_folder_put(folder);
  }
  let picker = html_input_file_accept_multiple(root, "image/*", on_files);
  app_shared_button_wide_input(root, "🖼️ Add photos", picker);
  ("Last, a red button to delete this folder, which asks first; the top folder has none, since every other folder sits inside it.");
  let b = equal(folder_key, top_key);
  if (not(b)) {
    function on_delete() {
      photo_organizer_folder_delete_screen(root, folders, folder, open);
    }
    app_shared_button_red(root, "🗑️ Delete folder", on_delete);
  }
}
