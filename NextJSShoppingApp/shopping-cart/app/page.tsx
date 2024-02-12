"use client";
import React, { useEffect, useState } from "react";
import { FechedTypes } from "../lib/types/FetchDataTypes";
import { GetData } from "../lib/getdata/GetData";
import { CardList } from "@/components/cartlist/Cardlist";

const Page = () => {
  const [info, setInfo] = useState<FechedTypes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetData.getAllData();
        setInfo(data);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Added empty dependency array to run effect only once

  console.log(info);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <CardList info={info} />
        </div>
      )}
    </div>
  );
};

export default Page; // Corrected component name to start with uppercase letter
