import Image from "next/image";

function Hero() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Discover Delicious Food Around The World
            </h1>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Explore recipes, ingredients and amazing dishes from different cuisines.
              Cook like a professional chef with simple instructions.
            </p>

            <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
              View Menu
            </button>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/images/banner.png"
              alt="Hero Food"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;