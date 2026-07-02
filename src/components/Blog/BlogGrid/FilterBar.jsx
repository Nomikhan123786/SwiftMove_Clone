import POSTS from "./POSTS";
const FilterBar = ({ active, onChange }) => {
  const FILTERS = [
    { key: "all", label: "All" },
    ...Array.from(
      new Map(POSTS.map((p) => [p.category, p.categoryLabel])).entries(),
    ).map(([key, label]) => ({ key, label })),
  ];

  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
      {FILTERS.map((filter) => {
        const isActive = filter.key === active;
        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onChange(filter.key)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
