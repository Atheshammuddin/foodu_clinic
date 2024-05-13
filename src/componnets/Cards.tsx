export function Cards({ title, icon, Amount }: any) {
  return (
    <div className="bg-white w-full p-10 rounded-lg shadow-lg m-2 flex flex-col items-start">
      <div className="flex justify-center w-full">
        <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center">
          <p className="text-white">{icon}</p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <h5 className="text-xl font-bold mt-4">{title}</h5> {/* Left-aligned */}
        <h5 className="text-xl font-bold mt-4">{Amount}</h5>
      </div>
    </div>
  );
}
