import type { CarModel } from "@/types/models";
import { Link, useNavigate } from "react-router-dom";

type InfoModelCardProps = {
  models: CarModel[];
  loading?: boolean;
};

export const InfoModelCard = ({ models, loading }: InfoModelCardProps) => {
  const navigate = useNavigate();

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {models.map((model) => (
        <div
          key={model.id}
          className="relative group flex flex-col items-center mt-7 "
        >
          <Link
            to={`/car/${model.id}`}
            className="absolute inset-0 z-10 lg:hidden"
            aria-label={`Ver modelo ${model.name}`}
          />

          <h3 className="text-[28px] font-semibold transition-colors duration-300 group-hover:text-[#EB0A1E]">
            {model.name}
          </h3>

          <p className="transition-colors duration-300">
            {model.year} | ${model.price.toLocaleString()}
          </p>

          <img
            src={model.photo}
            alt={model.name}
            className="my-4 h-52 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <button
            onClick={() => navigate(`/car/${model.id}`)}
            className="mt-3 px-12 py-2 rounded-full bg-black text-white opacity-0 translate-y-2 transition-all duration-30 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer font-semibold tracking-wider text-sm hidden lg:block z-20"
          >
            Ver modelo
          </button>
        </div>
      ))}
    </div>
  );
};
