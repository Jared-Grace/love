export function text_url_escaped_removed(text) {
  "The text with every character taken out that an address would have to escape, so what is left reads the same in the address bar as it does here - letters, digits, and - _ . ! ~ * ' ( ).";
  "These are exactly the characters encodeURIComponent leaves as they are, so what this hands back goes through that unchanged.";
  let removed = text.replace(/[^A-Za-z0-9\-_.!~*'()]/g, "");
  return removed;
}
