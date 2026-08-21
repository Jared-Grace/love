import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function bible_event_key(event) {
  "The one stable name of a gathered Bible event, spelled out of its references alone: each passage as its chapter code, a colon and its verses, and the passages joined by commas.";
  "Anything a reading wants to say ABOUT an event has to attach to the event somehow, and the key is how. It is built from the references and from nothing else on purpose. A title is words somebody chose and may reword tomorrow; a position in a list moves the moment an event is inserted above it, and moves silently. The references are the one part of the record that cannot drift, because they are the part that only points.";
  "Two events sharing a key would be a real fault - but it would also mean the same verses were gathered twice under two titles, which is a fault already. So the key does not defend against it; a gate over the keys reports it.";
  let passages = property_get(event, "passages");
  function key_of_passage(passage) {
    let chapter_code = property_get(passage, "chapter_code");
    let verses = property_get(passage, "verses");
    let one = list_join_colon([chapter_code, verses]);
    return one;
  }
  let parts = list_map(passages, key_of_passage);
  let key = list_join_comma(parts);
  return key;
}
