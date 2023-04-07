const Divider = ({ width, margin }: { width: string; margin?: string }) => {
  return (
    <div
      className={`h-[1px] w-${width} bg-black divider rounded-lg opacity-30 ${
        margin && "mt-" + margin + " mb-" + margin
      }`}
    ></div>
  );
};

export default Divider;
