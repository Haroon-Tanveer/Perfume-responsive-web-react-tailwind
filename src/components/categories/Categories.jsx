import React from "react";
import product8 from "../../assets/product8.jpg";
import product9 from "../../assets/product9.jpg";
import product10 from "../../assets/product10.jpg";
import product11 from "../../assets/product11.jpg";
import product12 from "../../assets/product12.jpg";
import product13 from "../../assets/product13.jpg";

const categories = [
  {
    img: product8,
    alt: "Men`s Perfumes",
    title: "Men`s Collection",
    description:
      "Discover bold and refined fragrances crafted for the modern gentleman. Confidence in every note.",
    },
    {
      img: product9,
      alt: "Arabic Oud",
      title: "Arabic oud",
      description:
        "Experience the deep, rich heritage of oud. Traditional Arabic fragrances infused with timeless elegance.",
    },

    {
      img: product10,
      alt: "Luxury Perfumes",
      title: "Luxury Editions",
      description:
        "Indulge in our finest scents. A curated collection of exclusive, high-end fragrances for connoisseurs.",
    },
  {
    img: product11,
    alt: "Woman`s Perfumes",
    title: "Woman`s Collection",
    description:
      "Elegant, timeless, and irresistibly feminine — perfumes designed to express every woman's essence.",
  },


  {
    img: product12,
    alt: "Unisex Perfumes",
    title: "Men`s Editions",
    description:
      "Versatile and captivating — scents that transcend gender with a perfect balance of bold and soft notes.",
  },


  {
    img: product13,
    alt: "Gift Sets",
    title: "Gift Packages",
    description:
      "Perfect for any occasion. Thoughtfully curated perfume sets that make every moment unforgettable.",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 scroll-mt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-950 mb-3">
            Explore Our Fragrance Collections
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Discover a world of captivating scents with our exclusive fragrance
            collections. From fresh and floral to warm and woody, each fragrance
            is thoughtfully crafted to evoke emotion and express individuality.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {categories.map((category, index) => (
                <div key={index} className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                    <div className='h-64 overflow-hidden'>
                        <img src={category.img} alt={category.alt} 
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'/>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                    <div className='absolute bottom-0 left-0 p-6'>
                        <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
