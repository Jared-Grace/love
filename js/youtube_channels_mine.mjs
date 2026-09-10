import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function youtube_channels_mine() {
  "Every channel the saved permission actually reaches, each as its word, its handle and what it is called.";
  "It answers the question a token cannot be asked directly: permission is granted to one channel at the moment somebody picks one on the consent screen, and nothing written down afterwards says which was picked. A job that writes to the wrong channel is not refused - it succeeds somewhere nobody was looking.";
  "It is also the cheapest liveness test there is. Permission granted while an application is still in testing dies after a week, and the failure reads as a refusal rather than as an expiry, so asking this first tells apart a dead permission from a wrong one.";
  arguments_assert(arguments, 0);
  let params = {
    part: "snippet,contentDetails",
    mine: "true",
  };
  let answer = await youtube_api_get("channels", params);
  let items = property_get(answer, "items");
  let channels = [];
  for (let item of items) {
    let snippet = property_get(item, "snippet");
    let content_details = property_get(item, "contentDetails");
    let related = property_get(content_details, "relatedPlaylists");
    let entry = {
      channel_id: property_get(item, "id"),
      title: property_get(snippet, "title"),
      custom_url: property_get(snippet, "customUrl"),
      uploads_playlist: property_get(related, "uploads"),
    };
    list_add(channels, entry);
  }
  return channels;
}
