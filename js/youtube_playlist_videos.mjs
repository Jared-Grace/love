import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
import { youtube_browse_videos } from "./youtube_browse_videos.mjs";
export async function youtube_playlist_videos(playlist_id) {
  "Every video of one public youtube playlist, in the order the playlist puts them, each as its watch code and its title.";
  "Youtube hands a long playlist over a hundred at a time and will not say in advance how many pages there are, so the pages are asked for until it stops offering another. A ceiling is kept anyway: a token that answered with itself would otherwise ask forever, and a run that never ends is worse than a short answer that can be seen to be short.";
  arguments_assert(arguments, 1);
  let videos = [];
  let answer = await youtube_innertube_browse({ browseId: "VL" + playlist_id });
  let page = youtube_browse_videos(answer);
  videos.push(...page.videos);
  let continuation = page.continuation;
  let pages = 1;
  while (continuation !== null && pages < 200) {
    let more = await youtube_innertube_browse({ continuation: continuation });
    let found = youtube_browse_videos(more);
    videos.push(...found.videos);
    continuation = found.continuation;
    pages = pages + 1;
  }
  return videos;
}
