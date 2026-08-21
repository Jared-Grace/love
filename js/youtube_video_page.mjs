import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { retry_standard } from "./retry_standard.mjs";
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
  "IT ASKS AGAIN WHEN THE LINE DROPS. A sweep over this channel is more than a thousand of these, and a single connection dying part way through was enough to lose the whole run twice. One read in a thousand going wrong is ordinary; a thousand reads all having to go right is not something to build on.";
  "Both addresses are inside the asking-again rather than each having their own. A short refusing the ordinary address is not the line dropping, and waiting a second, then two, then four before trying what was always going to work would cost hours over a channel that is nearly all shorts. Wrapping the pair means a real drop is tried again and a redirection is not.";
  "A PAGE THAT CARRIES NO PLAYER IS REFUSED RATHER THAN HANDED BACK, and that is what makes asking again mean anything. Youtube answers a sweep it has had enough of with two hundred and a page - a sign-in wall, a consent screen, something that is not the video - and a reader looking for one word in that page finds nothing and reports the video as carrying nothing. Measured 2026-08-21: two readings of the same thirteen hundred videos, minutes apart, said twenty-seven were bare and then four hundred and thirty-seven, and every one sampled was carrying its words all along.";
  "So the page has to say it is about a video before anything is read out of it. The player's own account of the video is what says so, and it is there on every real page whether or not the video has any words under it. Without that check a refusal and an empty description are the same answer, and the one thing a reader must never do is make up a fact quietly.";
  arguments_assert(arguments, 1);
  async function lambda$page() {
    async function lambda$watch() {
      let buffer_watched = await http(
        "https://www.youtube.com/watch?v=" + video_id,
      );
      return buffer_watched;
    }
    let watched = await catch_null_async(lambda$watch);
    let page_answered = null;
    if (not_equal(watched, null)) {
      page_answered = buffer_text_to(watched);
    }
    if (equal(page_answered, null)) {
      let buffer = await http("https://www.youtube.com/shorts/" + video_id);
      page_answered = buffer_text_to(buffer);
    }
    let told = page_answered.indexOf('"videoDetails"');
    let playerless = less_than(told, 0);
    if (playerless) {
      throw new Error(
        "youtube answered for " +
          video_id +
          " with a page carrying no player, so it said nothing about the video",
      );
    }
    return page_answered;
  }
  let page = await retry_standard(lambda$page);
  return page;
}
