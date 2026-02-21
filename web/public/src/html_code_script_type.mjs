export function html_code_script_type(script_type, middle) {
  const attributes = ` type="${script_type}"`;
  let v = `<script${attributes}> 
    ${middle}
  </script>`;
  return v;
}
