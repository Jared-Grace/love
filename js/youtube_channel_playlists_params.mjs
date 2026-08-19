export function youtube_channel_playlists_params() {
  "The word that tells youtube it is the playlists page of a channel being asked for and not the videos page.";
  "A channel answers to one word for all of its pages, and youtube writes this second word itself - it is the same for every channel there is. It is written down rather than scraped off a page each time because a scrape is one more thing that can fail on a day the page is laid out differently.";
  let params = "EglwbGF5bGlzdHPyBgQKAkIA";
  return params;
}
