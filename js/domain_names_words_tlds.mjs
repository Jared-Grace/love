export function domain_names_words_tlds(words, tlds) {
  "Every word paired with every ending, which is the list of domain names a bulk price check takes.";
  let names = [];
  for (let word of words) {
    for (let tld of tlds) {
      names.push(word + "." + tld);
    }
  }
  return names;
}
