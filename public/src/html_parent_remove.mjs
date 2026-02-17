export function html_parent_remove(from_e) {
  const parent = from_e.parentNode;
  parent.removeChild(from_e);
}
