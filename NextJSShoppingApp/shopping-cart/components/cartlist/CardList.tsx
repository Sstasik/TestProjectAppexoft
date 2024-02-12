"use client";
import { FechedTypes } from "@/lib/types/FetchDataTypes";
import React, { ChangeEvent, useState } from "react";

import CarItem from "../cartitem/CardItem";
import Image from "next/image";
import search from "@/public/search.svg";

interface Props {
  info: FechedTypes[];
}

export function CardList({ info }: Props) {
  const [searchItem, setSearchItem] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const searchFilter = () => {
    return info.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
  };

  const filteredItemList = searchFilter();

  return (
    <>
      <div>
        <div className="flex justify-center mb-6">
          <div className="flex border border-black-400 rounded-lg p-1 bg-white">
            <input
              className="rounded-l-lg max-w-[100%] pl-2 focus:outline-none  "
              placeholder="What you are looking for ..."
              onChange={handleSearchChange}
            />
            <span className="bg-white pr-2 rounded-r-lg  ">
              <Image width={25} height={25} src={search} alt="CartImg" />
            </span>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-5">
          {filteredItemList.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
