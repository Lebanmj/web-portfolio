import React, { useEffect, useState } from "react";
import { photographyItems } from "./photography-data";

const PAGE_SIZE = 9;
const STORAGE_KEY = "photographyPage";

const PhotographySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = Number(window.localStorage.getItem(STORAGE_KEY) || "1");
    if (stored > 1) {
      setPage(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, String(page));
  }, [page]);

  const totalPages = Math.ceil(photographyItems.length / PAGE_SIZE);
  const visiblePhotos = photographyItems.slice(0, page * PAGE_SIZE);
  const hasMore = page < totalPages;

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

<div className="mt-20 grid grid-cols-3 gap-2 md:gap-6 md:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
  {visiblePhotos.map((item, index) => (
    <button
      key={`${item.image}-${index}`}
      type="button"
      onClick={() => setSelectedImage(item.image)}
      className="group relative overflow-hidden rounded-lg md:rounded-[1.5rem] border border-gray-800/70 bg-gray-900/50 text-left aspect-square"
    >
      <img
        src={item.image}
        alt="Photography gallery item"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </button>
  ))}
</div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Show more photos
          </button>
        </div>
      )}

      <div className="mt-4 text-center text-sm text-gray-400">
        Showing {visiblePhotos.length} of {photographyItems.length} photos
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
              <img
                src={selectedImage || ''}
                alt="Selected photography"
                loading="eager"
                className="h-full w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotographySection;
