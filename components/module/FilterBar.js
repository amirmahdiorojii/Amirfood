import SearchBox from "./SearchBox";

function FilterBar({
  categories = [],
  selectedCategory,
  onCategoryChange,
  search,
  onSearch,
}) {
  return (
    <div className="flex flex-col gap-6 mb-8">
      
      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        
        {/* All Button */}
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-full border transition ${
            selectedCategory === "all"
              ? "bg-orange-500 text-white border-orange-500"
              : "hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {/* Dynamic Categories */}
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat.slug
                ? "bg-orange-500 text-white border-orange-500"
                : "hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="w-full md:w-1/3">
        <SearchBox
          value={search}
          onChange={onSearch}
        />
      </div>

    </div>
  );
}

export default FilterBar;