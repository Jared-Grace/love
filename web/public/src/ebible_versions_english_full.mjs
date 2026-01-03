import { isaiah_chapters_count } from "../../../love/public/src/isaiah_chapters_count.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { ebible_versions_english_books_count_cache } from "../../../love/public/src/ebible_versions_english_books_count_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full() {
  "full meaning all books of the bible";
  marker("1");
  let object = await ebible_versions_english_books_count_cache();
  const c = isaiah_chapters_count();
  let filter = function lambda3(value, key) {
    let v2 = value >= c;
    return v2;
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
