interface PageProps {
  name: string;
}

export function Page({ name }: PageProps) {
  return (
    <div className="main">
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        {name} 정보
      </h1>
    </div>
  );
}