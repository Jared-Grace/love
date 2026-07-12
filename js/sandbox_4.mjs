import { country_pakistan } from "./country_pakistan.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_difference } from "./list_difference.mjs";
import { object_pick_try_single_value_multiple } from "./object_pick_try_single_value_multiple.mjs";
import { app_calendar_name_properties } from "./app_calendar_name_properties.mjs";
import { app_calendar_download_contacts } from "./app_calendar_download_contacts.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_transform_multiple_trim } from "./property_transform_multiple_trim.mjs";
import { list_filter_property_text_includes_not_multiple } from "./list_filter_property_text_includes_not_multiple.mjs";
import { properties_delete_multiple } from "./properties_delete_multiple.mjs";
import { me_calendar } from "./me_calendar.mjs";
import { app_calendar_paste_convert } from "./app_calendar_paste_convert.mjs";
export async function sandbox_4() {
  let input = "Tuesday, May 5⋅6:00 – 7:00am";
  let pakistan = country_pakistan();
  let date_time_zones = app_calendar_paste_convert(input, pakistan);
  return date_time_zones;
  let list = await me_calendar();
  property_transform_multiple_trim(list, "name");
  let properties = ["description", "location"];
  properties_delete_multiple(list, properties);
  let remove_if_contains = ["Extended Stay America", "Busy"];
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
  let unique = list_unique(difference);
  return unique;
}
