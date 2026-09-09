import { json_from } from "./json_from.mjs";
import { domain_porkbun_post } from "./domain_porkbun_post.mjs";
export async function domain_porkbun_checks(session, search) {
  "Asks once for whichever answers to a started search are ready: Porkbun hands back the names it has priced so far and how many it is still looking up.";
  "AN EMPTY ANSWER WITH NOTHING PENDING MEANS THE TICKET IS SPENT. The page throws its checks away after about fifty seconds, and a spent one answers as though nothing was ever asked.";
  let text = await domain_porkbun_post(session, "/api/domains/getChecks", {
    checkId: search.check_id,
    addToCart: "0",
    searchHash: search.search_hash,
    have: "",
    haveTypes: "",
    isajax: "true",
  });
  let body = json_from(text);
  return body;
}
