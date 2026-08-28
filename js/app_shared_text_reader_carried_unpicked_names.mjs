import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_carried_unpicked_names_walked } from "./app_shared_text_reader_carried_unpicked_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_text_reader_carried_unpicked_names() {
  "Just the functions that hand words on without ever asking what language the reader reads, across every app that promised a reader language, each named once. Read-only.";
  "The reading itself lives next door and answers this beside how many carried words it walked up to. A ratchet is measured against a flat list and a gate needs the count, so the narrowing is done once here rather than at each place that only wants the names.";
  "The function the words come out of is the unit rather than the door they arrive at, because the repair belongs to that function - translating it settles every door it feeds at once, and a record keyed on the door would read one screen dropping its call as a repair while the words stayed english.";
  arguments_assert(arguments, 0);
  let told = await app_shared_text_reader_carried_unpicked_names_walked();
  let names = property_get(told, "names");
  return names;
}
