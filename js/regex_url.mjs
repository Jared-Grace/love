export function regex_url() {
  "A web address written into a line of prose, starting at its http or https and ending where the address does.";
  "The last character may not be a full stop, a comma, a closing bracket or another mark that ends a sentence, because prose puts those straight after an address: 'let us know at https://eBible.org/cgi-bin/contact.cgi.' means the address without the stop. An address that really ends in one of those is rare, and losing its last character costs less than every sentence-final address leading nowhere.";
  "Only addresses that say how to reach them are found. A bare name such as eBible.org is left as words, because prose names a site far more often than it points at one - 'a Trademark of eBible.org' is a statement about who owns a name, not an invitation to go there.";
  "The whole address sits inside one capturing group, so splitting a line at this keeps the addresses in the list rather than throwing them away.";
  let r = /(https?:\/\/[^\s<>"]*[^\s<>".,;:!?)\]'])/u;
  return r;
}
