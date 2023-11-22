import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit} className="w-[80%] mb-8 flex gap-2 justify-center items-center bg-slate-500 rounded-md shadow-md shadow-slate-200">
            <input 
                value={query}
                className="h-12 w-[80%] bg-transparent border-transparent outline-none text-blue-100"
                placeholder="Search Meal....."
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="h-full text-slate-50 font-semibold cursor-pointer"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;