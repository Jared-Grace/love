export async function facebook_messenger_chat_profile_url(page) {
  "Answers the facebook profile address of the person in the messenger conversation open on page - the link their name carries at the top of the conversation - or null when there is none.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ THE NAME AT THE TOP LINKS TO THE PERSON, even in an encrypted conversation whose number is not theirs: on 2026-11-10 conversation 1702302727697315 linked to /100006328838160/.";
  let href = await page.evaluate(
    "(function(){var a=Array.from(document.querySelectorAll('[role=main] a[href]')).find(function(x){var h=x.getAttribute('href');return /^\\/[A-Za-z0-9.]+\\/?$/.test(h)&&!/^\\/messages/.test(h)});return a?a.getAttribute('href'):null})()",
  );
  if (href === null) {
    return null;
  }
  let r = "https://www.facebook.com" + href;
  return r;
}
