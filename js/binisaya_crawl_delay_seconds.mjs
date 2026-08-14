export function binisaya_crawl_delay_seconds() {
  "How long to wait between two askings of binisaya.com, in seconds.";
  "The number is not a guess at what would be polite. The site says it out loud, at binisaya.com/robots.txt, under the block addressed to everyone: Crawl-delay: 20. Asking faster than that is not impoliteness that might be forgiven - it is being told a rate and ignoring it.";
  "The shared waiting the rest of this repo uses is a few seconds, which is courteous where nothing has been said and too fast here by three times over. So this stands apart from it: a site that states a rate has one, and a site that states nothing gets the shared guess.";
  let r = 20;
  return r;
}
