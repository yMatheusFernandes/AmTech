export default function Button({ children, variant = "primary", href, onClick }) {
  const className = `btn ${variant}`;

  // Se passar href, renderiza <a>, senão <button>
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
