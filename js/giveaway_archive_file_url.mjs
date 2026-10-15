import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_map } from "./list_map.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function giveaway_archive_file_url(identifier, path_in_item) {
  arguments_assert(arguments, 2);
  ("$plain identifier");
  ("$plain path_in_item");
  ("The address one file inside one archive.org box is handed over to, spelled so a space or a bracket in its name reaches the far end as itself.");
  ("★ THIS IS A SEPARATE FUNCTION FROM THE SENDING ON PURPOSE, BECAUSE THE ONE THING IN AN UPLOAD THAT CAN NEVER BE MENDED IS THE NAME A FILE ARRIVES UNDER, AND THIS IS WHERE THAT NAME IS SPELLED. The host serves a file under the name it was given, forever, names every copy it makes after that name, and that name is the only words somebody's music player will ever show them. A title can be rewritten afterwards and a description can; a filename cannot. So the spelling of it is worth being able to look at, and to check, without sending a single byte - which is what this being its own named reading buys.");
  ("★ EACH PART BETWEEN THE SLASHES IS SPELLED FOR AN ADDRESS SEPARATELY, BECAUSE A WHOLE PATH SPELLED IN ONE GO WOULD TURN ITS OWN SLASHES INTO LETTERS. These files sit in folders inside the box, so the slashes between folders have to stay slashes, while a space or a bracket inside a single name must not. Those are opposite demands and no one spelling satisfies both, so the path is taken apart at the slashes, each part spelled on its own, and the slashes put back.");
  ("The identifier is left exactly as it is. It is worked out from a passage code and holds nothing but letters, digits and an underscore, and an address spelling applied to it would be a second place where the name of a box could be altered - which is the one name on the host even less changeable than a filename.");
  let parts = text_split_slash_forward(path_in_item);
  let spelled = list_map(parts, text_url_encode);
  let path = list_join_slash_forward(spelled);
  let url = "https://s3.us.archive.org/" + identifier + "/" + path;
  return url;
}
