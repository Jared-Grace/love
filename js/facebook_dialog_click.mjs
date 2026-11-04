export async function facebook_dialog_click(page, label) {
  "$plain page";
  "$plain label";
  "Clicks the last visible button of that name in any open dialog and answers 'clicked', 'disabled', or null when there is none: a post stacks its pages as dialogs, and the one in front is the last.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let found = await page.evaluate(
    "(function(w){var es=[].slice.call(document.querySelectorAll('[role=dialog] [role=button],[role=dialog] button,[role=dialog] [role=switch],[role=dialog] [role=checkbox]')).filter(function(x){var r=x.getBoundingClientRect();return r.width>0&&r.height>0&&((x.getAttribute('aria-label')||'')===w||(x.innerText||'').trim()===w)});var e=es[es.length-1];if(!e)return null;if(e.getAttribute('aria-disabled')==='true')return 'disabled';e.click();return 'clicked'})(" +
      JSON.stringify(label) +
      ")",
  );
  return found;
}
