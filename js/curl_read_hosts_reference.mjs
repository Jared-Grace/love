export function curl_read_hosts_reference() {
  "Public Bible reference sites that a fetch may read without asking the human first.";
  "They are not this repo's own, so the reason they are safe is narrower than for the rest of the list: a read can still carry words out inside its address, and whoever runs the site sees them. That is acceptable for a site that is a public reference library and nothing more, because there is nothing an agent here would be putting in such an address but the name of a page to read.";
  "Agents writing about places and words in the Bible fetch these pages over and over, and every fetch asked the human, who wanted no prompts where none were needed.";
  let r = ["www.gotquestions.org", "biblehub.com"];
  return r;
}
