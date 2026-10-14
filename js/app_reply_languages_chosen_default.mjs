import { ebible_language_english } from "./ebible_language_english.mjs";
import { ebible_language_original } from "./ebible_language_original.mjs";
export function app_reply_languages_chosen_default() {
  "The languages a reply quotes a passage in until somebody chooses others: English first, so the reader meets the words they can read before the ones they cannot, and the original last.";
  "The reply app's own list rather than the shared one, because the other Bible apps lead with the original and a link they handed out already spells their order.";
  let en = ebible_language_english();
  let original = ebible_language_original();
  let v = [en, original];
  return v;
}
