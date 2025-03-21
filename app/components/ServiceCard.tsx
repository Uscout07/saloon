import Image from "next/image";

export default function ServiceCard({ 
  title, 
  description, 
  imageUrl, 
  price,
  duration
}: { 
  title: string, 
  description: string, 
  imageUrl: string, 
  price: string,
  duration: string
}) {
  return (
    <div className="bg-white border-2 border-neutral-100 shadow-xl rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
      <div className="relative">
        <Image 
          src={imageUrl} 
          alt={title} 
          width={400} 
          height={300} 
          className="w-full h-64 object-cover grayscale-75"
        />
        <div className="absolute top-6 right-6">
          <span className="bg-white/80 text-black px-4 py-2 rounded-full text-xs tracking-wider uppercase font-semibold">
            Signature
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bodoni text-3xl font-semibold text-neutral-800 tracking-wide">{title}</h3>
          <div className="text-gold-500 text-xl">
            ★★★★☆
          </div>
        </div>
        <p className="font-light text-neutral-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center mb-6">
          <span className="font-bodoni text-2xl font-bold text-neutral-800">{price}</span>
          <span className="text-neutral-500 font-light tracking-wide">{duration}</span>
        </div>
        <button className="w-full py-4 bg-neutral-900 text-white font-light tracking-widest uppercase text-sm hover:bg-neutral-700 transition-colors duration-300">
          Reserve Experience
        </button>
      </div>
    </div>
  );
}