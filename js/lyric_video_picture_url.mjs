import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function lyric_video_picture_url(picture) {
  "$plain picture";
  "The address one background picture of a lyric video can be fetched at in a browser while working on this machine.";
  "THE LOCAL SERVER HANDS OUT THE WHOLE FOLDER THE REPOS SIT IN, so a picture deliberately kept out of git is still reachable by name. That is what lets these stay out of a history that is already too heavy and still be looked at on a phone.";
  "IT IS THE PICTURE'S OWN PATH WITH THE REPO'S NAME IN FRONT OF IT AND NOTHING ELSE. The document already says where each picture is, because that is the path the render read; anything this built instead would be a second answer to a question that already has one, free to disagree with the render about which drawing is which.";
  "NOTHING IS SENT THROUGH THE API. These are between three and five megabytes each, so handing one over as text inside an answer would be about five and a third megabytes for one picture, and a psalm has thirteen of them. Fetched by address the browser gets the bytes themselves, and gets to keep them.";
  "IT SPELLS THE SAME PREFIX THE SONG PICTURES ARE FETCHED THROUGH, which writes it inside a longer word rather than on its own. Whoever splits that one open should give both this address.";
  arguments_assert(arguments, 1);
  let path = property_get(picture, "path");
  let url = text_combine_multiple(["/love/", path]);
  return url;
}
