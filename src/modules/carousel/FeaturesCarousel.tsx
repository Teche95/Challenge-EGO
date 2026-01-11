import { useRef, useState } from "react"

type Feature = {
  name: string
  description: string
  image: string
}

type Props = {
  items: Feature[]
}

export const ModelFeaturesCarousel = ({ items }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const CARD_WIDTH = 280 
  const GAP = 24
  const PAGE_WIDTH = CARD_WIDTH + GAP

  const handleScroll = () => {
    if (!scrollRef.current) return
    const index = Math.round(
      scrollRef.current.scrollLeft / PAGE_WIDTH
    )
    setActiveIndex(index)
  }

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTo({
      left: index * PAGE_WIDTH,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full mt-10">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar sm:justify-evenly "
      >
        {items.map(item => (
          <div
            key={item.name}
            className="min-w-70 snap-center rounded-xl bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg"
            />
            <h3 className="mt-3 font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center sm:hidden gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`
              h-2 rounded-full transition-all
              ${activeIndex === index
                ? "w-6 bg-gray-500"
                : "w-2 bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  )
}
