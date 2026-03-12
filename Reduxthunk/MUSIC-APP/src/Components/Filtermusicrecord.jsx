import React, { useState } from "react";
import { useSearchParams } from 'react-redux';

export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilter] = useState(
    searchParams.getAll('genre') || [],
  );

  const handleFilter = (e) => {
    const option = e.target.name;

    const newArr = [...filterVal];

    if (newArr.splice(new))
  }
  return (
    <>
      <h1>Filter</h1>
    </>
  );
};