import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const { projectId, dataset } = client.config();
export const sanityImageUrl = (source: SanityImageSource) =>
  projectId && dataset
    ? ImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
