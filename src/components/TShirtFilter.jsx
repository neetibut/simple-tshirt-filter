import { useState, useEffect } from "react";

const TShirtFilter = () => {
  // Mock data for T-shirts
  const tshirts = [
    { id: 1, color: "BLACK", size: "S", name: "Black Small Tee" },
    { id: 2, color: "BLACK", size: "M", name: "Black Medium Tee" },
    { id: 3, color: "RED", size: "S", name: "Red Small Tee" },
    { id: 4, color: "BLUE", size: "L", name: "Blue Large Tee" },
  ];

  // State for selected filters
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [filteredTShirts, setFilteredTShirts] = useState(tshirts);

  // Update filtered T-shirts when filters change
  useEffect(() => {
    const filtered = tshirts.filter(
      (tshirt) =>
        (!selectedColor || tshirt.color === selectedColor) &&
        (!selectedSize || tshirt.size === selectedSize)
    );
    setFilteredTShirts(filtered);
  }, [selectedColor, selectedSize]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">T-Shirt Filter</h1>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        {/* Color Filter */}
        <div>
          <label
            htmlFor="color"
            className="block text-gray-700 font-medium mb-1"
          >
            Color:
          </label>
          <select
            id="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">-- All Colors --</option>
            <option value="BLACK">Black</option>
            <option value="RED">Red</option>
            <option value="BLUE">Blue</option>
          </select>
        </div>

        {/* Size Filter */}
        <div>
          <label
            htmlFor="size"
            className="block text-gray-700 font-medium mb-1"
          >
            Size:
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">-- All Sizes --</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      {/* Filtered T-Shirts */}
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Filtered T-Shirts
        </h2>
        {filteredTShirts.length === 0 ? (
          <p className="text-gray-700">
            No T-shirts match the selected filters.
          </p>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {filteredTShirts.map((tshirt) => (
              <li key={tshirt.id} className="text-gray-700">
                {tshirt.name} - {tshirt.color} - {tshirt.size}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TShirtFilter;
