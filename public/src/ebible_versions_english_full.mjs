import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { ebible_versions_english_books_count_cache } from "../../../love/public/src/ebible_versions_english_books_count_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full() {
  marker("1");
  let v = await ebible_versions_english_books_count_cache();
  function lambda(la) {
    each_object(object, function lambda2(value, property) {});
  }
  let list = list_adder(lambda);
  return v;
}
