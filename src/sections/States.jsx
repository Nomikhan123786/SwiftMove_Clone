import { useRef } from "react";
import { useCountUp } from "react-countup";

const States = () => {
  // Sab counters ke alag alag references (useRef direct use hoga, React.useRef nahi)
  const countRef1 = useRef(null);
  const countRef2 = useRef(null);
  const countRef3 = useRef(null);
  const countRef4 = useRef(null);

  // Stat 1
  useCountUp({
    ref: countRef1,
    start: 0,
    end: 10000,
    duration: 3,
    suffix: "+",
  });

  // Stat 2
  useCountUp({
    ref: countRef2,
    start: 0,
    end: 99,
    duration: 3,
    suffix: "%",
  });

  // Stat 3
  useCountUp({
    ref: countRef3,
    start: 0,
    end: 50,
    duration: 3,
    suffix: "+",
  });

  // Stat 4
  useCountUp({
    ref: countRef4,
    start: 0,
    end: 15,
    duration: 3,
    suffix: "+",
  });

  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Stat 1 */}
          <div className="text-center" data-animate="fade-in-up" data-delay="0">
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span ref={countRef1} />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Successful Moves
            </div>
          </div>

          {/* Stat 2 */}
          <div
            className="text-center"
            data-animate="fade-in-up"
            data-delay="100"
          >
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span ref={countRef2} />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              On-Time Rate
            </div>
          </div>

          {/* Stat 3 */}
          <div
            className="text-center"
            data-animate="fade-in-up"
            data-delay="200"
          >
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span ref={countRef3} />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Trucks & Vehicles
            </div>
          </div>

          {/* Stat 4 */}
          <div
            className="text-center"
            data-animate="fade-in-up"
            data-delay="300"
          >
            <div className="text-4xl font-bold text-blue-600 lg:text-5xl dark:text-blue-400">
              <span ref={countRef4} />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
