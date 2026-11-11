import { not_equal } from "./not_equal.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
export function bible_word_article_sites_published_rows() {
  "The sites a tapped bible word can be opened on, as they are written out for readers' apps: each site's name and the start of its addresses.";
  "AN ADDRESS IS ITS START AND THE ARTICLE'S FILE, joined. Every site is asked to prove that of itself before it is written out, so a site whose addresses are built some other way stops the writing here instead of sending readers to wrong pages.";
  let r = [];
  for (let site of bible_word_article_sites()) {
    let prefix = site.url("");
    let probe = site.url("probe.htm");
    if (not_equal(probe, prefix + "probe.htm")) {
      throw new Error(
        site.name +
          " does not build its addresses as a start followed by the file",
      );
    }
    r.push({
      name: site.name,
      prefix,
    });
  }
  return r;
}
