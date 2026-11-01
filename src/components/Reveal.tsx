import type { ReactNode } from "react"

export default function Reveal({ children }: { children: ReactNode; delay?: number }) {
  return <div className="rv">{children}</div>
}
