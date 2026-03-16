const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="cartCardOutline">
          <div className="productCardSkeleton animate-pulse">
            {/* Image */}
            <div className="w-30 h-30 bg-gray-200 rounded-xl" />

            <div className="p-5 pt-3 w-full flex flex-col gap-2">
              {/* Title */}
              <div className="h-3 bg-gray-200 rounded-full w-full" />
              <div className="h-3 bg-gray-200 rounded-full w-3/4" />
              {/* Price */}
              <div className="h-3 bg-gray-200 rounded-full w-1/4 mt-1" />
              {/* Button */}
              <div className="h-8 bg-gray-200 rounded-xl w-full mt-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;