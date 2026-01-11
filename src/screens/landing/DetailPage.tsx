import useGetModelById from "@/hooks/useGetModelById";
import { ModelFeaturesCarousel } from "@/modules/carousel/FeaturesCarousel";
import { useParams } from "react-router-dom";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const modelId = Number(id);
  const { models } = useGetModelById(modelId);

  return (
    <div className="px-4 max-w-360 mx-auto">
      <div className="gap-5 flex flex-col lg:flex-row lg:items-center lg:justify-center">
        <img src={models?.photo} alt="" />
        <div className="lg:flex lg:flex-col">
          <h1 className="font-semibold text-[20px] leading-6.75 text-[#373737]">
            {models?.name}
          </h1>
          <span className="font-semibold lg:mt-2 lg:mb-7 lg:text-[50px] lg:leading-14 lg:tracking-[-1px] text-[35px] leading-11 tracking-[-0.7px] text-[#191919] ">
            {models?.title}
          </span>
          <div
            className="[&_p]:font-normal [&_p]:text-base [&_p]:leading-6.75 [&_p]:tracking-[-0.1px][&_p]:text-[#373737]"
            dangerouslySetInnerHTML={{ __html: models?.description || "" }}
          />
        </div>
      </div>

      <ModelFeaturesCarousel items={models?.model_features ?? []} />

      <div className="flex flex-col gap-10">
        {models?.model_highlights.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col-reverse gap-10 items-center justify-center mt-10 ${
              index % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } 
        text-[#373737]
      `}
          >
            <img src={item.image} alt="" />
            <div className="lg:w-1/3  ">
              <h1 className="font-semibold text-[20px]">{item.title}</h1>
              <div
                className=" [&_p]: font-normal [&_p]: text-[16px] [&_p]: leading-7 [&_p]: tracking-[-0.1px]"
                dangerouslySetInnerHTML={{ __html: item.content || "" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
