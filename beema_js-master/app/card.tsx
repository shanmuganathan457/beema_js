type Card = {
  image: string;
  label: string;
  description?: string;
  isPrimary?: boolean;
  buttonText?: string;
};

export default function CardDesign({ cards }: { cards: Card[] }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-[1480px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              w-[180px] h-[200px]
              sm:w-[200px] sm:h-[220px]
              md:w-[220px] md:h-[240px]
              rounded-[30px] bg-buttoncol relative overflow-hidden 
              flex flex-col items-center justify-start p-4
            `}
          >
            {/* Image Container */}
            <div className="w-[100px] h-[100px] flex items-center justify-center mb-6">
              <img
                src={card.image}
                alt={card.label}
                className="w-full h-full object-contain mx-auto shrink-0"
              />
            </div>

            {/* Glassmorphism Label */}
            <div className="absolute bottom-3 w-[90%] h-[52px] flex items-center justify-center bg-white/20 backdrop-blur-md text-center text-black font-bold font-futura text-[16px] rounded-full border border-white/50">
              {card.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
