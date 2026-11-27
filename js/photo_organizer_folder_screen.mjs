import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_loading } from "./html_loading.mjs";
import { photo_organizer_folders } from "./photo_organizer_folders.mjs";
import { photo_organizer_editor_is } from "./photo_organizer_editor_is.mjs";
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
import { photo_organizer_phone_send_plan } from "./photo_organizer_phone_send_plan.mjs";
import { greater_than } from "./greater_than.mjs";
import { photo_organizer_phone_send } from "./photo_organizer_phone_send.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_input_type_label } from "./app_shared_input_type_label.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { photo_organizer_photo_buttons_add } from "./photo_organizer_photo_buttons_add.mjs";
import { app_shared_photos_draw_buttons } from "./app_shared_photos_draw_buttons.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { file_name_random_browser } from "./file_name_random_browser.mjs";
import { list_add } from "./list_add.mjs";
import { photo_organizer_photo_upload } from "./photo_organizer_photo_upload.mjs";
import { html_input_file_accept_multiple } from "./html_input_file_accept_multiple.mjs";
import { app_shared_button_wide_input } from "./app_shared_button_wide_input.mjs";
import { photo_organizer_folder_delete_ask } from "./photo_organizer_folder_delete_ask.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
export async function photo_organizer_folder_screen(root, key) {
  "$plain root";
  "$plain key";
  "One folder of the photo organizer: the way back up through every folder it sits inside, the folders inside it, a box and button to make another inside it, and its photos with a button to add more.";
  "Folders go inside folders to any depth: a folder made here sits inside this one, and opening it shows the same screen for it.";
  "The folder open is written after the slash of the address, so the address in the bar always opens it; a key no folder has opens the top folder instead.";
  "Several photos can be chosen at once, from the gallery or the camera, and each shows at once and is kept online with the folder.";
  "Anybody may look, signed in or not (human, 2026-11-27: \"should be login protected to edit/upload etc. but can view without login\"); only the owner signed in is shown the buttons that change anything - making, adding, turning and deleting.";
  arguments_assert(arguments, 2);
  html_clear(root);
  let folders = await html_loading(photo_organizer_folders);
  let editor = await photo_organizer_editor_is();
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
  ('The owner signed in on a phone still holding folders or photos from before the organizer was kept online (human, 2026-11-27: "I added photos and folders before the login") sees a button sending them up; once everything is online it is gone.');
  if (editor) {
    let plan = await photo_organizer_phone_send_plan(folders);
    if (greater_than(plan.length, 0)) {
      let count = 0;
      for (let item of plan) {
        count = count + property_get(item, "added").length;
      }
      async function on_send() {
        async function send_plan() {
          await photo_organizer_phone_send(plan);
        }
        await html_loading(send_plan);
        await open(folder_key);
      }
      let v = String(plan.length);
      let v2 = String(count);
      let label = text_combine_multiple([
        "📤 Put this phone's ",
        v,
        equal(plan.length, 1) ? " folder and " : " folders and ",
        v2,
        equal(count, 1) ? " photo online" : " photos online",
      ]);
      app_shared_button_wide(root, label, on_send);
    }
  }
  if (editor) {
    let name_input = app_shared_input_type_label(
      root,
      "New folder name",
      "text",
    );
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
      async function put_made() {
        await photo_organizer_folder_put(made);
      }
      await html_loading(put_made);
      await open(folder_key);
    }
    app_shared_button_wide(root, "➕ New folder", on_new);
  }
  app_shared_field_title(root, "Photos");
  ("A photo opened from here can also be turned or deleted, and the folder is drawn again after either.");
  async function redraw() {
    await open(folder_key);
  }
  function photo_buttons_add(screen, close, picture, source) {
    if (not(editor)) {
      return;
    }
    photo_organizer_photo_buttons_add(
      folder,
      redraw,
      screen,
      close,
      picture,
      source,
    );
  }
  let file_show = app_shared_photos_draw_buttons(
    root,
    folder,
    photo_buttons_add,
  );
  if (not(editor)) {
    ("Anybody else sees a button to sign in instead, and once the owner has signed in the folder is drawn again with every button.");
    let login_box = html_div(root);
    async function on_sign_in() {
      await firebase_auth_ensure(login_box);
      await open(folder_key);
    }
    app_shared_button_wide(login_box, "🔑 Sign in to edit", on_sign_in);
    return;
  }
  let photos = property_get(folder, "photos");
  async function on_files(files) {
    let added = [];
    for (let file of files) {
      let name = file_name_random_browser(file);
      let photo = {
        name,
        file,
      };
      list_add(photos, photo);
      list_add(added, photo);
      file_show(file);
    }
    ("Every picture is sent before the folder is kept naming them, so a send stopped partway never leaves the folder pointing at a picture that is not there.");
    async function send() {
      for (let photo of added) {
        let name2 = property_get(photo, "name");
        let file2 = property_get(photo, "file");
        await photo_organizer_photo_upload(name2, file2);
      }
      await photo_organizer_folder_put(folder);
    }
    await html_loading(send);
  }
  let picker = html_input_file_accept_multiple(root, "image/*", on_files);
  app_shared_button_wide_input(root, "🖼️ Add photos", picker);
  ("Last, a red button to delete this folder, which asks first; the top folder has none, since every other folder sits inside it.");
  let b = equal(folder_key, top_key);
  if (not(b)) {
    function on_delete() {
      photo_organizer_folder_delete_ask(folders, folder, open);
    }
    app_shared_button_red(root, "🗑️ Delete folder", on_delete);
  }
}
