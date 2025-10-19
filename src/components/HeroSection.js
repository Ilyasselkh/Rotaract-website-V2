export default function HeroSection() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4 bg-black/50 p-4 rounded-xl">
        Rotaract Sale Bab Lamrissa
      </h1>
      <p className="text-lg bg-black/40 px-4 py-2 rounded-lg">
        Service, Amitié et Leadership au cœur de nos actions 💫
      </p>
    </div>
  )
}
