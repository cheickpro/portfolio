import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardContent({
  children,
}: Props) {
  return (
    <div className="mt-8">
      {children}
    </div>
  );
}