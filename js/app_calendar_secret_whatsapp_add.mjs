import { app_calendar_contacts_downloaded_path } from "./app_calendar_contacts_downloaded_path.mjs";
import { app_calendar_whatsapp_phone } from "./app_calendar_whatsapp_phone.mjs";
import { app_calendar_preaching_ask_phones } from "./app_calendar_preaching_ask_phones.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { app_calendar_secret_transform } from "./app_calendar_secret_transform.mjs";
import { app_calendar_contact_add_multiple } from "./app_calendar_contact_add_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_take } from "./list_take.mjs";
import { list_size } from "./list_size.mjs";
import { list_to_indices_items } from "./list_to_indices_items.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { file_read } from "./file_read.mjs";
export async function app_calendar_secret_whatsapp_add() {
  let phones = await app_calendar_preaching_ask_phones();
  let r = app_calendar_contacts_downloaded_path();
  let contents = await file_read(r);
  let lines = text_split_newline(contents);
  function lambda(line) {
    let columns = text_split_comma(line);
    let indicized = list_to_indices_items(columns);
    let names = ["first", "middle", "last"];
    let size = list_size(names);
    let taken = list_take(columns, size);
    let whatsapp_name = list_join_space(taken);
    let phone_index = 18;
    let whatsapp_phone = list_get_or_null(columns, phone_index);
    let includes = list_includes(phones, whatsapp_phone);
    if (includes) {
      let item = {
        whatsapp_name,
        [app_calendar_whatsapp_phone()]: whatsapp_phone,
      };
      return item;
    }
    return null;
  }
  let mapped = list_map(lines, lambda);
  let filtered = list_filter_null_not_is(mapped);
  async function lambda2(data) {
    app_calendar_contact_add_multiple(data, filtered);
  }
  await app_calendar_secret_transform(lambda2);
}
