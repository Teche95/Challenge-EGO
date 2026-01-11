import { useModels } from "@/hooks/useModels";
import { FiltersBar } from "@/modules/core/components/filters/Filter";
import { InfoModelCard } from "@/modules/core/components/InfoModelCard";

export const HomePage = () => {
  const {
    models,
    loading,
    error,
    activeFilter,
    activeSort,
    setActiveFilter,
    setActiveSort,
  } = useModels();

  return (
    <main className="px-3.75 py-4 leading-11 tracking-[-0.7px] mt-5 max-w-360 mx-auto">
      <h1 className="text-[35px] font-bold">Descubrí todos los modelos</h1>

      <FiltersBar
        segment={activeFilter}
        sort={activeSort}
        onSegmentChange={setActiveFilter}
        onSortChange={setActiveSort}
      />

      {loading && <p>Cargando modelos...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && <InfoModelCard models={models} />}
      
    </main>
  );
};

export default HomePage;
