import { each } from "./each.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_passages_verse_numbers(passages) {
  "Every verse number a chapter's passages cover, in the order the chapter reads.";
  "A passage covers one verse or several, so the chapter's numbers are the passages' numbers laid end to end rather than a count of the passages themselves. A reading that walked the passages instead would be short by however many verses were grouped.";
  "The numbers come back exactly as the store holds them, which is as text. Anything wanting to do arithmetic on one reads it as a number itself, so nothing here quietly changes what the store said.";
  let numbers = [];
  function passage_read(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    list_add_multiple(numbers, verse_numbers);
  }
  each(passages, passage_read);
  return numbers;
}
