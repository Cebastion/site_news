import type { FC } from "react";
import type { CategoryFilterProps } from "../interface/page/Filter.interface";

const categories = ["business", "technology", "sports", "health"];

const Filter: FC<CategoryFilterProps> = ({ category, setCategory }) => {
    return (
        <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`
            px-4 py-2
            rounded-lg
            border
            border-gray-300
            transition
            duration-200
            hover:bg-blue-100
            ${category === cat ? 'bg-blue-500 text-white font-semibold' : 'bg-white text-gray-700'}
          `}
                >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default Filter;

