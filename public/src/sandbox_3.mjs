import { app_calendar_contact_add_curried } from "../../../love/public/src/app_calendar_contact_add_curried.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_calendar_secret_transform } from "../../../love/public/src/app_calendar_secret_transform.mjs";
import { list_get_or_null } from "../../../love/public/src/list_get_or_null.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_to_indices_items } from "../../../love/public/src/list_to_indices_items.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
export async function sandbox_3() {
  let r = folder_user_downloads_path("contacts.csv");
  let contents = await file_read(r);
  let lines = text_split_newline(contents);
  function lambda(line) {
    let columns = text_split_comma(line);
    let indicized = list_to_indices_items(columns);
    let names = ["first", "middle", "last"];
    let size = list_size(names);
    let taken = list_take(columns, size);
    let whatsapp_name = list_join_space(taken);
    const phone_index = 18;
    let whatsapp_phone = list_get_or_null(columns, phone_index);
    let r2 = {
      whatsapp_name,
      whatsapp_phone,
    };
    return r2;
  }
  let mapped = list_map(lines, lambda);
  async function lambda2(data) {
    let lambda3 = app_calendar_contact_add_curried(data);
    each(mapped, lambda3);
  }
  await app_calendar_secret_transform(lambda2);
  return mapped;
}
