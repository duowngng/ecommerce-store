"use client";

import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6" >
          {images.map((image) => (
            <GalleryTab key={image} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image} className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
            <Image
              fill
              src={image}
              alt="Image"
              className="object-cover object-center"
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

export default Gallery;