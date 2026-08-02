export async function app_replace_tests_proof_state(page) {
  "read the proof rail as a compact string: each state's symbols joined, a green (highlighted) symbol suffixed with *, states separated by |, or the word gone when no proof is on screen - so the proof interaction test can assert exactly which symbols are highlighted";
  "Nothing in here may be normalized. The inner function is handed to the page rather than called, so it is written out as text and run in the browser, where a name this repo keeps means nothing - a rewritten comparison lands there as a call to something undefined, and the read it belongs to then fails for a reason no gate can see.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  function extract() {
    let green = "rgb(0, 180, 0)";
    let dark = "rgb(30, 58, 138)";
    let v = document.querySelectorAll("p");
    let paragraphs = Array.from(v);
    function is_label(p) {
      let r5 = p.textContent.trim() === "Your steps:";
      return r5;
    }
    let label = paragraphs.find(is_label);
    if (label === undefined) {
      let r = "gone";
      return r;
    }
    let rows = [];
    function each_row(row) {
      function is_symbol(span) {
        let inside_button = span.closest("button");
        let bg = getComputedStyle(span).backgroundColor;
        let colored = bg === green || bg === dark;
        let r2 = inside_button === null && colored;
        return r2;
      }
      let v2 = row.querySelectorAll("span");
      let spans = Array.from(v2);
      let symbols = spans.filter(is_symbol);
      if (symbols.length === 0) {
        return;
      }
      function marker_slot(span) {
        let star = "";
        if (getComputedStyle(span).backgroundColor === green) {
          star = "*";
        }
        let r3 = span.textContent + star;
        return r3;
      }
      let v3 = symbols.map(marker_slot).join("");
      rows.push(v3);
    }
    let children = Array.from(label.parentElement.children);
    children.forEach(each_row);
    let r4 = rows.join("|");
    return r4;
  }
  let result = await page.evaluate(extract);
  return result;
}
