import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { object_pick_try_single_value_multiple } from "../../../love/public/src/object_pick_try_single_value_multiple.mjs";
import { app_calendar_name_properties } from "../../../love/public/src/app_calendar_name_properties.mjs";
import { app_calendar_download_contacts } from "../../../love/public/src/app_calendar_download_contacts.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { property_transform_multiple_trim } from "../../../love/public/src/property_transform_multiple_trim.mjs";
import { list_filter_property_text_includes_not_multiple } from "../../../love/public/src/list_filter_property_text_includes_not_multiple.mjs";
import { properties_delete_multiple } from "../../../love/public/src/properties_delete_multiple.mjs";
import { me_calendar } from "../../../love/public/src/me_calendar.mjs";
import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
export async function sandbox_4() {
  let list = await me_calendar();
  property_transform_multiple_trim(list, "name");
  let properties = ["description", "location"];
  properties_delete_multiple(list, properties);
  let remove_if_contains = ["Extended Stay America"];
  let filtered = list_filter_property_text_includes_not_multiple(
    list,
    "name",
    remove_if_contains,
  );
  let calendar_names = list_map_property(filtered, "name");
  let contacts = await app_calendar_download_contacts();
  let name_properties = app_calendar_name_properties();
  let mapped = object_pick_try_single_value_multiple(contacts, name_properties);
  let difference = list_difference(calendar_names, mapped);
  return calendar_names;
  let input = "Thursday, May 14⋅10:00 – 11:00am";
  let date_time_zones = app_calendar_paste_convert(input);
  return date_time_zones;
}
