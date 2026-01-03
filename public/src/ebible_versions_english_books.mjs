import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_books() {
  marker("1");
  let v = await ebible_versions_english();
  let dictionary = await list_to_dictionary_async(
    list,
    async function lambda(item) {},
  );
  return v;
}
