import ServicesComponent from "../components/ServicesComponent";

const ServiceSection = () => {
  return (
    <div className="text-center bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div
        className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
        data-animate="fade-in-up"
      >
        Services
      </div>
      <ServicesComponent />
    </div>
  );
};

export default ServiceSection;
