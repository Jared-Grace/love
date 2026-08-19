import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
import { youtube_browse_lockups } from "./youtube_browse_lockups.mjs";
export async function youtube_lockups_paged(ask) {
  "Everything one question to youtube can reach, gathered by asking it and then asking again for each further page it offers, in the order youtube gives them.";
  "Youtube hands a long list over a hundred at a time and will not say in advance how many pages there are, so the pages are asked for until it stops offering another. A ceiling is kept anyway: a token that answered with itself would otherwise ask forever, and a run that never ends is worse than a short answer that can be seen to be short.";
  "The paging lives here once rather than beside each kind of list, because how youtube pages has nothing to do with what is being paged - a playlist of songs and a channel of playlists are turned the same way.";
  arguments_assert(arguments, 1);
  let items = [];
  let answer = await youtube_innertube_browse(ask);
  let page = youtube_browse_lockups(answer);
  items.push(...page.items);
  let continuation = page.continuation;
  let pages = 1;
  while (not_equal(continuation, null) && less_than(pages, 200)) {
    let more = await youtube_innertube_browse({
      continuation: continuation,
    });
    let found = youtube_browse_lockups(more);
    items.push(...found.items);
    continuation = found.continuation;
    pages = pages + 1;
  }
  return items;
}
