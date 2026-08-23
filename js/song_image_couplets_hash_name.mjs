import { song_image_couplets_title } from "./song_image_couplets_title.mjs";
import { song_title_hash_name } from "./song_title_hash_name.mjs";
export function song_image_couplets_hash_name() {
  "The word this hymn is reached by in an address, which is also the folder its pictures sit in.";
  "THE PAGE AND THE PICTURES ARE NAMED BY THE SAME WORD, worked out from the title rather than written down twice. Somebody reading a picture's address can see which song it belongs to, and renaming the song moves both at once - where two spellings would move the link and leave the pictures behind, and nothing would look wrong until a picture failed to arrive.";
  let title = song_image_couplets_title();
  let hash_name = song_title_hash_name(title);
  return hash_name;
}
