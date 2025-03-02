import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nort Developer",
    short_name: "Nort",
    description: "The perfect place to explore my work and get in touch",
    start_url: "/",
    display: "standalone",
    background_color: "#1D1D1D",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icons/icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}