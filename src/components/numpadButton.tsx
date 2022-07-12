export function NumpadButtonComponent(props: { label: string; handleClick: any }) {
  return (
    <div style={{ fontSize: '30px' }} onClick={() => props.handleClick(props.label)}>
      {props.label}
    </div>
  );
}
