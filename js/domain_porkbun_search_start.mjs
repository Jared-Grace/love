import { domain_porkbun_post } from "./domain_porkbun_post.mjs";
export async function domain_porkbun_search_start(session, names) {
  "Hands Porkbun up to a hundred names to price in one go, and reads back the ticket for the answer: the check to ask about, the hash that goes with it, and how many of the names it actually took on.";
  "IT SILENTLY DROPS ENDINGS IT DOES NOT SELL, so the count of names asked about is not the count to wait for - the accepted ones are the rows the page came back with.";
  "NO ROWS AT ALL MEANS THE RATE LIMIT, NOT A BAD NAME. Measured, roughly one bulk search every ninety seconds is accepted; over that it answers a perfectly good list with nothing and says nothing about why.";
  let html = await domain_porkbun_post(session, "/checkout/search", {
    bulk: "1",
    bulkAction: "bulkSearchList",
    searchDomains: names.join("\n"),
    tlds: "",
    idnLanguage: "",
    prb: "",
  });
  let check = html.match(/checkId = '([a-f0-9]+)'/);
  let hash = html.match(/searchHash = '([a-f0-9]+)'/);
  let rows = html.match(/searchResultRow_[a-z0-9_-]+/g) || [];
  let accepted = new Set(rows);
  let search = {
    check_id: check ? check[1] : "",
    search_hash: hash ? hash[1] : "",
    wanted: accepted.size,
  };
  return search;
}
