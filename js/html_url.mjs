export function html_url() {
  "The address of the page as it stands, hash and all. BESPOKE (window.location) - do NOT auto-canonicalize.";
  "The twin next door strips the hash, because an address used as an identity should not change when the reader moves around inside one page. This one keeps it, for the opposite reason: it is used to record where somebody was, and inside these apps the hash is the screen they were on.";
  let url = window.location.href;
  return url;
}
