import React, { useState, useEffect } from "react";
import { Collage } from "./collage";
import { Image } from "./image";
import { Search } from "./search";
import { getAlbum } from "./fetcher";

export const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [search, setSearch] = useState("");
  // const [n, setN] = useState(50);

  useEffect(() => {
    const download = async () => {
      if (search === "") {
        return;
      }

      let albums = await getAlbum(search);
      setImages(albums);
    };

    download();
  }, [search, setImages]);

  return (
    <div>
      <Search setSearch={setSearch} />
      <Collage images={images} titleVisible={true} />
    </div>
  );
};