import { baseline_known_write } from "./baseline_known_write.mjs";
import { pages_published_baseline_path } from "./pages_published_baseline_path.mjs";
import { pages_published_names } from "./pages_published_names.mjs";
export async function pages_published_baseline_write() {
  "Rewrite the record of published addresses from what is being served right now. For seeding it once, for a page deliberately added, and for a page deliberately retired.";
  "This one is allowed to grow as well as shrink, which is unlike the rest of its family, and the reason is what it holds. A new page is a new address and there is nothing wrong with a new address; what the record is for is that the old ones keep answering. So the writer says yes to both directions and the gate is what makes somebody run the writer on purpose.";
  let names = await pages_published_names();
  let path = pages_published_baseline_path();
  let r = await baseline_known_write(names, path);
  return r;
}
