import { isaiah_chapters_count } from "./isaiah_chapters_count.mjs";
import { object_adder } from "./object_adder.mjs";
import { each_object } from "./each_object.mjs";
import { ebible_versions_english_books_count_cache } from "./ebible_versions_english_books_count_cache.mjs";
export async function ebible_versions_english_full() {
  "full meaning all books of the bible, as oppose to versions that are missing books";
  let object = await ebible_versions_english_books_count_cache();
  let c = isaiah_chapters_count();
  let filter = function lambda3(value, key) {
    let v = value >= c;
    return v;
  };
  function lambda(oad) {
    function lambda2(value, key) {
      if (filter(value, key)) {
        oad(key, value);
      }
    }
    each_object(object, lambda2);
  }
  let result = object_adder(lambda);
  return result;
}
