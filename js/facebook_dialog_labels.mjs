export async function facebook_dialog_labels(page) {
  "$plain page";
  "The name and the words of every button in any open dialog, each written 'name | words'.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let r = await page.evaluate(
    "(function(){return [].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button,[role=dialog] [role=switch],[role=dialog] [role=checkbox]')).map(function(e){return (e.getAttribute('aria-label')||'')+' | '+(e.innerText||'').trim().slice(0,40)})})()",
  );
  return r;
}
