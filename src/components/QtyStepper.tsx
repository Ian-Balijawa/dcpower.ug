export default function QtyStepper({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) {
  return (
    <div className="qty" role="group" aria-label={`Quantity for ${label}`}>
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity" disabled={value <= 1}>-</button>
      <output aria-live="polite">{value}</output>
      <button type="button" onClick={() => onChange(Math.min(99, value + 1))} aria-label="Increase quantity">+</button>
    </div>
  );
}
