import React from "react";
import { useFilter } from "../contexts/FilterContext";
import { FetchCoordinates, GetUserCoordinates, SearchResult } from "../service";
import debounce from "../utils/debounce";

export function SearchBar() {
  const { searchLocation, setSearchLocation } = useFilter();
  const [text, setText] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);

  const getSearchResults = debounce(async () => {
    if (text === "") {
      setSearchResults([]);
      setSearchLocation(null);
      return;
    }

    const data = await FetchCoordinates(text);

    if (!data) {
      return;
    }
    setSearchResults(data);
  }, 1000);

  React.useEffect(() => {
    if (searchLocation) {
      setText(searchLocation.name);
    } else {
      setText("");
    }
  }, [searchLocation]);

  React.useEffect(() => {
    GetUserCoordinates()
      .then((data) => {
        if (data) {
          console.log({ data });
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <div className="bg-[#364f5d] text-white w-[220px] h-[40px] rounded-[8px] p-1 px-3 relative border">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Search here"
        className="bg-transparent outline-none w-full h-full"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getSearchResults();
          }
        }}
      />
      {searchResults.length > 0 && (
        <div className="absolute text-gray-800 -bottom-[200%] w-full left-0 -translate-y-1/2 bg-white rounded-[8px] shadow-lg p-1">
          {searchResults.map((result, index) => (
            <div
              onClick={() => {
                updateSearchQuery(result);
              }}
              key={result.name + index}
              className="px-4 py-4 hover:bg-gray-200 cursor-pointer"
            >
              <span className="font-bold text-black">{result.name}</span>,{" "}
              <span>
                {result.state}, {result.country}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  function updateSearchQuery(location: SearchResult) {
    setText(location.name);
    setSearchLocation(location);
    setSearchResults([]);
  }
}
