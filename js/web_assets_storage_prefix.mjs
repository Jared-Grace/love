import { web_assets_folder_name } from "./web_assets_folder_name.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
export function web_assets_storage_prefix() {
  "The one word every asset's address in storage begins with, worked out from the name of the folder they are kept in rather than spelled again here.";
  "IT IS THE FOLDER'S NAME WITH ITS SEPARATORS JOINED BACK UP. A name in this repo is written flat with underscores on the understanding that the underscores are a rendering of a tree that has not been drawn yet, so `web_assets` and `web/assets` are one name written two ways. Storage is told the flat rendering; the disk may be told either. Deriving one from the other is what lets the folder be drawn out into a tree on the day somebody asks for folders, without a single address in storage moving.";
  "THE STORAGE SIDE IS FROZEN AND THE FOLDER SIDE IS NOT, WHICH IS THE WHOLE REASON THESE ARE TWO FUNCTIONS RATHER THAN ONE. Every address already fetched from storage - by a page that is deployed, by a bookmark, by anything holding a URL it was handed earlier - carries this word in it, so changing it strands all of them at once and the failure is a picture that quietly does not arrive. Where the folder sits on a disk is nobody's business but this repo's and may move whenever it suits.";
  "Spelling the word twice was the thing the folder's own name is written to prevent, and this does not do it. Two spellings drift the first time either moves, because nothing relates them; a derivation cannot drift, because there is still only one place the word is written down and the other is worked out from it every time it is asked for.";
  "The permission rules name this word too, in storage.rules, and they are not derived from anything - they are a file in another language that grants public reading to exactly this prefix. So the rule and this must agree, and if the folder is ever renamed to something that is not just a re-rendering of the same name, that file has to be changed in the same breath or every asset is refused to every reader, one request at a time.";
  let folder_name = web_assets_folder_name();
  let segments = text_split_slash_forward(folder_name);
  let prefix = list_join_underscore(segments);
  return prefix;
}
