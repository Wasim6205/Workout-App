import React from "react";

const goals = [
  {
    id: 1,
    name: "Weight Loss",
  },
  {
    id: 2,
    name: "Muscle Gain",
  },
  {
    id: 3,
    name: "Flexibility and Mobility",
  },
  {
    id: 4,
    name: "General Fitness",
  },
  {
    id: 5,
    name: "Event - specific training",
  },
  {
    id: 6,
    name: "Mindfulness and Mental Health",
  },
];

const GoalsSection = () => {
  return (
    <section className="p-4">
      <h2 className="text-center font-medium text-xl">What are your goals?</h2>
      <div className="flex flex-col gap-4 mt-8">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-gray-300 flex justify-between px-4 py-2 rounded-md"
          >
            <p>{goal.name}</p>
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full mt-24 text-white bg-[#7B91FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
    </section>
  );
};

export default GoalsSection;
