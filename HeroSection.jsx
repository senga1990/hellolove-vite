import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    // Для ефекту з'явлення сердець
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.5}s`;
    });
  }, []); 

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("/hero.jpg")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
          Find Your Person. <br /> Right Here. Right Now.
        </h1>
        <button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 animate-fadeInUp delay-200">
          Enter HelloLove
        </button>

        {/* Анімовані серця */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="heart absolute text-pink-500 text-3xl animate-heartFloat"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
