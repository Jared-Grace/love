import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
import { ebible_class_new } from "./ebible_class_new.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  const class_new = ebible_class_new();
  let v2 = ebible_class_old_new();
  let v = list_join_comma_space([v2]);
  let mapped = await ebible_version_books_testament(bible_folder, class_new);
  marker("1");
}
