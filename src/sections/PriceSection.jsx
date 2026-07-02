import PriceComponent from "../components/PriceComponent";

const PriceSection = () => {
  return (
    <div data-aos="fade-up" className="bg-white py-20 lg:py-28 dark:bg-gray-950 text-center">
      <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
        Pricing
      </div>
      <PriceComponent />
    </div>
  );
};

export default PriceSection;
