import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { integer_is } from "./integer_is.mjs";
import { list_index_is } from "./list_index_is.mjs";
export function app_replace_hash_index_get(hash, key, list) {
  "The place in the list a link names under this word, or null when the link names none or names one the list does not have.";
  "A link counts from 1, the way the numbered buttons the learner pressed are labelled, so the number read off a screen and the number in its link are the same number.";
  "A number the list does not reach is dropped rather than believed, because a remembered place past the end of a list is read by the screen as nothing at all and the screen dies on it - on every reload, since the place stays in this tab.";
  let word = property_get_or_null(hash, key);
  if (null_is(word)) {
    return null;
  }
  let left = Number(word);
  let index = subtract(left, 1);
  let b = integer_is(index);
  if (not(b)) {
    return null;
  }
  let b2 = list_index_is(list, index);
  if (not(b2)) {
    return null;
  }
  return index;
}
