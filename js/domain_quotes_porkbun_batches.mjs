import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { domain_quotes_porkbun } from "./domain_quotes_porkbun.mjs";
export async function domain_quotes_porkbun_batches(names) {
  "Prices any number of domain names by handing them over a hundred at a time, waiting between batches, and joining the answers into one list.";
  "THE WAIT IS THE WHOLE TRICK AND IT IS SLOW ON PURPOSE. Measured, Porkbun takes about one bulk search every ninety seconds; over that it answers with no rows at all rather than complaining, so hurrying reads back as a list of bad names. Four words across four hundred endings took about half an hour.";
  let batches = list_chunk(names, 100);
  let quotes = [];
  for (let index = 0; less_than(index, batches.length); index++) {
    if (greater_than(index, 0)) {
      await sleep_seconds(90);
    }
    let batch = await domain_quotes_porkbun(batches[index]);
    for (let quote of batch) {
      quotes.push(quote);
    }
  }
  return quotes;
}
