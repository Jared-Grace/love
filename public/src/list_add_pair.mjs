import { list_add } from "../../../love/public/src/list_add.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function list_add_pair(texts, texts_add) {
  each_pair(texts, texts_add, list_add);
}
