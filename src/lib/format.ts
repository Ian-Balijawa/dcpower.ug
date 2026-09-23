export const ugx = (n: number | null) => (n === null ? 'Request a quote' : `UGX ${n.toLocaleString('en-UG')}`);
