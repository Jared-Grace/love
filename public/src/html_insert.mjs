export function html_insert() {
  const i = 2;
  if (i >= parent.children.length) {
    parent.appendChild(newChild);
  } else {
    parent.insertBefore(newChild, parent.children[i]);
  }
}
