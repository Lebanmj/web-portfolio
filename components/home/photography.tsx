import Image from "next/image";
import React, { useState } from "react";
import { photographyItems } from "./photography-data";

const PhotographySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="photography" className="w-full relative select-none py-24 section-container">
      <div className="mb-10">
        <p className="section-title-sm">Photography</p>
        <h1 className="section-heading mt-2">Moments behind the lens</h1>
      </div>

      <div className="mb-16 rounded-[2rem] border border-gray-800/70 bg-gray-900/50 p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Studio</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">LJC Studios</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          I cover sports, wedding photography, and videography with a cinematic and
          storytelling-driven approach. You can follow my work on Instagram and YouTube.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-200">
          <a
            href="https://www.instagram.com/ljc.studios/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 transition hover:bg-white/10"
          >
            Instagram: @ljc.studios
          </a>
          <a
            href="https://www.youtube.com/@leban_LJC"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 transition hover:bg-white/10"
          >
            YouTube: @leban_LJC
          </a>
        </div>
      </div>
         <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[1.5rem] border border-gray-800/70 bg-gray-900/50">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/-_TL_0FjIUo?si=0p9jH6Y3FyBCDATv&amp;start=1"
            title="LJC Studios video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-gray-800/70 bg-gray-900/50">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/DoBILzbABEY?si=QQ4cD_Yeb00AZHCV&amp;start=1"
            title="LJC Studios video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
        {photographyItems.map((item, index) => (
          <button
            key={`${item.image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(item.image)}
            className={`group relative overflow-hidden rounded-[1.5rem] border border-gray-800/70 bg-gray-900/50 text-left ${item.className}`}
          >
            <Image
              src={item.image}
              alt="Photography gallery item"
              layout="fill"
              objectFit="cover"
              className="transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </button>
        ))}
      </div>

   

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-4 py-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-black"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <div className="relative h-[80vh] w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={selectedImage}
                alt="Selected photography"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotographySection;
