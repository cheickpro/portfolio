interface Props {
  children: React.ReactNode;
}

export default function CardTitle({
  children,
}: Props) {
  return (
    <h3 className="text-lg font-semibold">
      {children}
    </h3>
  );
}