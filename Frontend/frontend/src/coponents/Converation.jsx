const Converation = () => {
  return (
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounder-full">
          <img src={"../assets/react.svg"} alt="avatar" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <diV className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">Hithohs</p>
          <span className="text-xl">🎃</span>
        </diV>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default Converation;
