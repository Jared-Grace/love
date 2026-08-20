import { arguments_assert } from "./arguments_assert.mjs";
import { http } from "./http.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { not_equal } from "./not_equal.mjs";
export async function youtube_video_page(video_id) {
  "$plain video_id";
  "The page of one video, as text, fetched from whichever of youtube's two addresses for a video will actually answer.";
  "A video filmed tall is a short, and youtube keeps shorts at their own address. Asking for one at the ordinary watch address is answered with a redirection rather than a page, and nothing here follows redirections, so the ask fails outright. The channel this was built for is almost entirely shorts, and a sweep over a thousand of them stopped at the first one.";
  "It tries the ordinary address first and the shorts address only when that is refused, rather than the other way round or by looking at the id. Nothing in an id says which sort of video it is, and a video can be moved between the two; asking is the only thing that stays true.";
  "It says nothing about which address answered, because nothing that reads a page cares. A caller that needs to know which one has a different question and should ask it separately.";
  arguments_assert(arguments, 1);
  async function lambda$watch() {
    let buffer = await http("https://www.youtube.com/watch?v=" + video_id);
    return buffer;
  }
  let watched = await catch_null_async(lambda$watch);
  if (not_equal(watched, null)) {
    let page = buffer_text_to(watched);
    return page;
  }
  let buffer = await http("https://www.youtube.com/shorts/" + video_id);
  let page = buffer_text_to(buffer);
  return page;
}
