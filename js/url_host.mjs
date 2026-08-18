export function url_host(url) {
  "The host name a web address points at, or nothing at all when the text is not an address.";
  "Text that cannot be read as an address answers with an empty word rather than throwing. The callers here are counting what happened, not fetching anything, and a single unreadable line in a record of thousands should cost that line and not the whole reading.";
  try {
    let parsed = new URL(url);
    let host = parsed.hostname;
    return host;
  } catch (e) {
    let none = "";
    return none;
  }
}
