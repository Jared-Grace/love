import { ebible_languages_more } from "./ebible_languages_more.mjs";
import { ebible_languages_more_rows_write } from "./ebible_languages_more_rows_write.mjs";
export async function ebible_languages_more_rows_rewrite() {
  "Renders the generated half of the languages list from what it currently reads back as, and so must leave the file exactly as it found it.";
  "That is what it is for. The list is stored short and read back long, and nothing about a short row says out loud which language it is - so the one way to be sure the shortening lost nothing is to go the long way round and come back to the same bytes. A file that changes here says the two halves disagree, and says it without any language corpus being on the disk.";
  "It is also how the list was first shortened: run once against the long form, it wrote the short one.";
  let languages = ebible_languages_more();
  let written = await ebible_languages_more_rows_write(languages);
  return written;
}
