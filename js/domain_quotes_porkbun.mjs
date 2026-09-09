import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { domain_porkbun_session_new } from "./domain_porkbun_session_new.mjs";
import { domain_porkbun_search_start } from "./domain_porkbun_search_start.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { domain_porkbun_checks } from "./domain_porkbun_checks.mjs";
import { domain_quote_row } from "./domain_quote_row.mjs";
export async function domain_quotes_porkbun(names) {
  "Prices up to a hundred domain names at Porkbun in one ask, waiting until every name it took on has answered or the check is spent, and hands back a row for each one.";
  "THIS IS THE BUYING PATH, WHICH IS WHY THE PRICES ARE REAL. A registry prices a wanted name for itself, so a table of what an ending costs answers a different question than what a name costs.";
  let session = await domain_porkbun_session_new();
  let search = await domain_porkbun_search_start(session, names);
  let rows = new Map();
  for (let attempt = 0; less_than(attempt, 24); attempt++) {
    await sleep_seconds(2);
    let body = await domain_porkbun_checks(session, search);
    let results = body.results || [];
    for (let result of results) {
      let row = domain_quote_row(result);
      rows.set(result.domain, row);
    }
    let settled = greater_than_equal(rows.size, search.wanted);
    let waiting = Number(body.pending || 0);
    if (settled && equal(waiting, 0)) {
      break;
    }
  }
  let quotes = [...rows.values()];
  return quotes;
}
