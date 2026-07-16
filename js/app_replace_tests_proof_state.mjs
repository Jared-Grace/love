export async function app_replace_tests_proof_state(page) {
  "read the proof rail as a compact string: each state's symbols joined, a green (highlighted) symbol suffixed with *, states separated by |, or the word gone when no proof is on screen - so the proof interaction test can assert exactly which symbols are highlighted";
  function extract() {
    let green = "rgb(0, 180, 0)";
    let dark = "rgb(30, 58, 138)";
    let paragraphs = Array.from(document.querySelectorAll("p"));
    function is_label(p) {
      return p.textContent.trim() === "Your steps:";
    }
    let label = paragraphs.find(is_label);
    if (label === undefined) {
      return "gone";
    }
    let rows = [];
    function each_row(row) {
      function is_symbol(span) {
        let inside_button = span.closest("button");
        let bg = getComputedStyle(span).backgroundColor;
        let colored = bg === green || bg === dark;
        return inside_button === null && colored;
      }
      let spans = Array.from(row.querySelectorAll("span"));
      let symbols = spans.filter(is_symbol);
      if (symbols.length === 0) {
        return;
      }
      function marker(span) {
        let star = "";
        if (getComputedStyle(span).backgroundColor === green) {
          star = "*";
        }
        return span.textContent + star;
      }
      rows.push(symbols.map(marker).join(""));
    }
    let children = Array.from(label.parentElement.children);
    children.forEach(each_row);
    return rows.join("|");
  }
  let result = await page.evaluate(extract);
  return result;
}
