import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const StyledSearchBar = styled.div`
  display: flex;
  border-radius: 3rem;
  // width: 30%;
  overflow: hidden;
  color: var(--color-grey-700);
`;

const SearchButton = styled.button`
  width: 100%;
  width: 6rem;
  background: none;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  display: flex;
  text-align: center;
  align-items: center;
  background-color: var(--color-brand-600);

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-900);
    transition: all 0.3s;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex-grow: 1;
  border: none;
  padding-left: 10px;
  width: 35rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border: none;
    // border: 5px solid blue;
    transition: all 0.3s;
    width: 45rem;
  }

  &::placeholder {
    align-items: center;
    font-size: 2rem;
    padding: 3.5rem;
  }
`;

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchBarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setInputValue(""); // Clear the input if clicked outside
      }
    }

    // Step 2: Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClick() {
    searchParams.set("search", inputValue);
    if (searchParams.get("category")) {
      searchParams.set("category", "all");
      setInputValue("");
    }
    setSearchParams(searchParams);
    //console.log(inputValue);
  }

  //const deleteSearch = () => ;
  //const ref = useOutsideClick(setInputValue(""));
  return (
    <StyledSearchBar ref={searchBarRef}>
      <SearchButton onClick={(e) => handleClick(e)}>
        {<FaSearch color="white" />}
      </SearchButton>
      <SearchInput
        placeholder="Search for products"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
