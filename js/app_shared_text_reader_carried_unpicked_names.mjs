import { app_shared_text_reader_apps } from "./app_shared_text_reader_apps.mjs";
import { app_shared_text_reader_carried_unpicked } from "./app_shared_text_reader_carried_unpicked.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_shared_text_reader_carried_unpicked_names() {
  "Just the functions that hand words on without ever asking what language the reader reads, across every app that promised a reader language, each named once. Read-only.";
  "The ratchet beside this one measures a flat list of names, and the writer that seeds it measures the same list, so the narrowing is named once here rather than once in each of them.";
  "The function the words come out of is the unit rather than the door they arrive at, because the repair belongs to that function - translating it settles every door it feeds at once, and a record keyed on the door would read one screen dropping its call as a repair while the words stayed english.";
  "Both apps are read into one list on purpose. A function of the shared frame is reached by both, so a record kept per app would hold the same name twice and a repair would have to be recorded twice to be believed.";
  let apps = app_shared_text_reader_apps();
  let sources = [];
  for (let f_name_app of apps) {
    let read = await app_shared_text_reader_carried_unpicked(f_name_app);
    let found = property_get(read, "found");
    let named = list_map_property(found, "source");
    list_add_multiple(sources, named);
  }
  let once = list_unique(sources);
  let r = list_sort_text(once);
  return r;
}
