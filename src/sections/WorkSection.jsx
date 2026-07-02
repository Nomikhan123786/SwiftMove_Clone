import WorkComponent from "../components/WorkComponent";

const WorkSection = () => {
  return (
    <div
      id="work"
      data-aos="fade-up"
      className="text-center bg-white  lg:py-28 dark:bg-gray-950"
    >
      <div
        className="mb-4 inline-flex items-center rounded-full bg-blur-100 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
        data-aos="fade-up"
      >
        How It Works
      </div>
      <WorkComponent />
    </div>
  );
};

export default WorkSection;
