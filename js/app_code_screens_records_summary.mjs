export async function app_code_screens_records_summary(url_prefix) {
  arguments_assert(arguments, 1);
  ("one crawl of every code screen, handed back as both halves at once: the raw records and the mechanical summary read off them");
  ("the crawl is the expensive part - a headless browser walking every lesson - so the two callers that want a summary want the records from the same walk, not a second one. Both opened by crawling, unpacking the two names the capture holds, and summarising them.");
  let collected = await app_code_screens_records(url_prefix);
  let records = property_get(collected, "records");
  let errors = property_get(collected, "errors");
  let summary = app_code_screens_crawl_summary(records, errors);
  let both = {
    records,
    summary,
  };
  return both;
}
