export const BackgroundOverlay = () => {
  return (
    <div className="fixed inset-0 z-10 flex h-full w-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] h-full w-full">
          {Array.from({ length: 1600 }).map((_, i) => (
            <div
              key={i}
              className="border-[0.5px] border-gray-700"
              style={{
                animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i % 10) * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

