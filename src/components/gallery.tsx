import { sanityImageUrl } from "@/lib/utils";

interface GalleryProps {
  gallery: any[];
}

const Gallery = ({ gallery }: GalleryProps) => {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Gallery</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Explore our collection of stunning visuals and memorable moments.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((media, index) => (
          <GalleryItem
            key={index}
            imageUrl={media.image}
            topic={media.title}
            description={media.caption}
          />
        ))}
      </div>
    </section>
  );
};

interface GalleryItemProps {
  imageUrl: string;
  topic?: string;
  description?: string;
}

function GalleryItem({ imageUrl, topic, description }: GalleryItemProps) {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={sanityImageUrl(imageUrl)?.url()}
        alt="Gallery"
        className="w-full h-72 object-cover"
      />

      {(topic || description) && (
        <div
          className="
    absolute bottom-0 left-0 right-0 p-4
    bg-white/80
    opacity-0 translate-y-4
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-y-0
  "
        >
          <h4 className="font-semibold">{topic}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;
