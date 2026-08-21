import { bible_gathered_events_all } from "./bible_gathered_events_all.mjs";
import { bible_gathered_readings_all } from "./bible_gathered_readings_all.mjs";
import { bible_event_reading_kinds } from "./bible_event_reading_kinds.mjs";
import { bible_event_key } from "./bible_event_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export async function bible_event_kind_events(kind) {
  "$plain kind";
  "Every gathered Bible event whose reading carries one named kind, each with its title and its references, in the order the books tell them.";
  "★ THIS IS WHAT A MECHANIC HAS TO BE DESIGNED AGAINST, and it is derived so that it cannot go stale. A mechanic for a kind must serve every scene carrying that kind and not the three anybody happened to remember; the moment another book is gathered and read, the set this hands back grows by itself and the design is measured against the larger set without anyone editing a list.";
  "The title comes from the gather and the kinds come from the reading, and they are joined by the event's key rather than by position, because the two files are edited apart and a position in one says nothing about a position in the other.";
  "An event with no reading is dropped here rather than reported, because the gate over the corpus already fails on exactly that and one complaint is enough.";
  arguments_assert(arguments, 1);
  let events = await bible_gathered_events_all();
  let readings = await bible_gathered_readings_all();
  let carrying = [];
  function each_event(event) {
    let key = bible_event_key(event);
    let reading = list_find_property(readings, "key", key);
    if (not(reading)) {
      return;
    }
    let kinds = bible_event_reading_kinds(reading);
    let carries = list_includes(kinds, kind);
    if (not(carries)) {
      return;
    }
    let title = property_get(event, "title");
    list_add(carrying, {
      key,
      title,
      kinds,
    });
  }
  each(events, each_event);
  let r = {
    kind,
    count: list_size(carrying),
    events: carrying,
  };
  return r;
}
