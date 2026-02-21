export function html_code_script_attributes(attributes, middle) {
  let r = `<script${attributes}> 
    ${middle}
  </script>`;
  return r;
}
