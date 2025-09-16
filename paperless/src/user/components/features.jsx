import React from "react";
import { FileText, Search, Headphones } from "lucide-react";
import { useAppContext } from "../../context/appcontext";

const features = [
  {
    title: "Storing Documents",
    desc: "Upload and organize all your documents securely in one place.",
    icon: FileText,
  },
  {
    title: "Easy Retrieval",
    desc: "Find what you need in seconds with our fast and simple search.",
    icon: Search,
  },
  {
    title: "Support",
    desc: "Get reliable support whenever you need help managing your files.",
    icon: Headphones,
  },
];

function FeaturesSection() {
  const { appMode, setAppMode } = useAppContext();
  return (
    <section className="py-16 " id="home">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-500 ">
          Our Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white shadow-sm ${
                  appMode ? "dark:bg-slate-800" : ""
                } rounded-2xl p-6 text-center hover:shadow-md transition`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <Icon className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg  text-gray-500 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
