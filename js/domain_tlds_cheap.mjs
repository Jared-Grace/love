import { domain_porkbun_pricing } from "./domain_porkbun_pricing.mjs";
import { domain_tlds_renewal_max } from "./domain_tlds_renewal_max.mjs";
export async function domain_tlds_cheap(renewal_max) {
  "Which endings are cheap right now, cheapest year first, asked straight of the registrar rather than remembered - a frozen list of endings and their prices is out of date the week it is written.";
  let ceiling = Number(renewal_max);
  let pricing = await domain_porkbun_pricing();
  let tlds = domain_tlds_renewal_max(pricing, ceiling);
  return tlds;
}
