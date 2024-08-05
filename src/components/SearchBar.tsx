import React from "react";
import { useFilter } from "../contexts/FilterContext";
import { GetUSerCoordinates } from "../service";

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useFilter();
  const [text, setText] = React.useState<string>("");

  React.useEffect(() => {
    setText(searchQuery);
  }, [searchQuery]);

  React.useEffect(()=>{
    GetUSerCoordinates().then((data) =>{
      if(data){
        console.log({data});
      }
    })
    .catch((error) =>{
      console.error(error);
    });
  }, [])

  return (
    <div className="bg-[#364f5d] text-white w-[220px] h-[40px] rounded-[8px] p-1 px-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search here"
        className="bg-transparent outline-none w-full h-full"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateSearchQuery();
          }
        }}
      />
    </div>
  );

  function updateSearchQuery() {
    setSearchQuery(text);
  }
}
