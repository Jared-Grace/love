import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_apps } from "./app_shared_text_reader_apps.mjs";
import { app_shared_text_reader_carried_unpicked } from "./app_shared_text_reader_carried_unpicked.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_sum } from "./list_sum.mjs";
export async function app_shared_text_reader_carried_unpicked_names_walked() {
  "Just the functions that hand words on without ever asking what language the reader reads, across every app that promised a reader language, each named once - said beside how many carried words were walked up to.";
  "THE COUNT IS THE WORDS WALKED UP TO, NOT THE FUNCTIONS FOUND WANTING. A ratchet finding nothing new says the same word whether every screen was read and none had grown, or the list of apps that promised a reader language came back empty and no screen was opened at all. The offenders are pinned at whatever the record already held and cannot fall; the number of words reached can, and does, the moment the reading stops reaching anything.";
  "A word that was followed and a word that could not be followed both count as reached, because both were walked up to and looked at. What separates them is whether the code says where the word came from, which is a fact about the code rather than about whether this looked.";
  "The function the words come out of is the unit rather than the door they arrive at, because the repair belongs to that function - translating it settles every door it feeds at once, and a record keyed on the door would read one screen dropping its call as a repair while the words stayed english.";
  "Both apps are read into one list on purpose. A function of the shared frame is reached by both, so a record kept per app would hold the same name twice and a repair would have to be recorded twice to be believed.";
  arguments_assert(arguments, 0);
  let apps = app_shared_text_reader_apps();
  let sources = [];
  let counts = [];
  for (let f_name_app of apps) {
    let read = await app_shared_text_reader_carried_unpicked(f_name_app);
    let named = property_list_map_property(read, "found", "source");
    list_add_multiple(sources, named);
    let followed = property_get(read, "followed");
    let unfollowed = property_get(read, "unfollowed");
    list_add_multiple(counts, [followed, unfollowed]);
  }
  let once = list_unique(sources);
  let names = list_sort_text(once);
  let walked = list_sum(counts);
  let r = {
    walked,
    names,
  };
  return r;
}
