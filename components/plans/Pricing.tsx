import React from "react";

const Pricing = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Free</h3>
            <p className="text-4xl font-bold text-gray-800 mt-4">$0</p>
            <p className="text-gray-500 mt-2">Capture ideas and find them quickly</p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>✔ Sync unlimited devices</li>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 200 MB max. note size</li>
              <li>✔ Customize Home dashboard and access extra widgets</li>
              <li>✔ Connect primary Google Calendar account</li>
              <li>✔ Add due dates, reminders, and notifications to your tasks</li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>

          {/* Personal Plan */}
          <div className="bg-[#043873] text-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold">Personal</h3>
            <p className="text-4xl font-bold mt-4">$11.99</p>
            <p className="mt-2">Keep home and family on track</p>
            <ul className="mt-6 space-y-4">
              <li>✔ Sync unlimited devices</li>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 200 MB max. note size</li>
              <li>✔ Customize Home dashboard and access extra widgets</li>
              <li>✔ Connect primary Google Calendar account</li>
              <li>✔ Add due dates, reminders, and notifications to your tasks</li>
            </ul>
            <button className="mt-6 w-full bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
              Get Started
            </button>
          </div>

          {/* Organization Plan */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Organization</h3>
            <p className="text-4xl font-bold text-gray-800 mt-4">$49.99</p>
            <p className="text-gray-500 mt-2">Capture ideas and find them quickly</p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>✔ Sync unlimited devices</li>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 200 MB max. note size</li>
              <li>✔ Customize Home dashboard and access extra widgets</li>
              <li>✔ Connect primary Google Calendar account</li>
              <li>✔ Add due dates, reminders, and notifications to your tasks</li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
