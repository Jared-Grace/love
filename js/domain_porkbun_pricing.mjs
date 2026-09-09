export async function domain_porkbun_pricing() {
  "Porkbun's whole price list, one entry per ending, asked for over the interface it publishes to anybody: no account and no key.";
  "THESE ARE CATALOGUE RATES, NOT QUOTES. They say what an ordinary name under an ending costs. A name the registry has picked out for itself is priced separately and can be hundreds of times more, so use this to choose which endings to ask about and never to answer what a name costs.";
  "The prices here are written in dollars, unlike the search's, which are in cents.";
  let response = await fetch(
    "https://api.porkbun.com/api/json/v3/pricing/get",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "{}",
    },
  );
  let body = await response.json();
  let pricing = body.pricing;
  return pricing;
}
