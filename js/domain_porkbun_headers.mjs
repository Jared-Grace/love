export function domain_porkbun_headers() {
  "The headers Porkbun's own search page sends, so a price check asked from here is answered the same way it is answered in a browser.";
  let headers = {
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
  };
  return headers;
}
