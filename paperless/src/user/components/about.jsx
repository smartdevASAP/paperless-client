import React from "react";
import {
  Shield,
  Cloud,
  Users,
  Search,
  Smartphone,
  Infinity,
} from "lucide-react";
import { useAppContext } from "../../context/appcontext";

const features = [
  {
    title: "All-in-One Document Hub",
    desc: "Upload, organize, and retrieve your PDFs instantly without juggling multiple platforms.",
    icon: Cloud,
  },
  {
    title: "Cloud-First & Secure",
    desc: "Your files are encrypted and stored safely in the cloud, so you’ll never lose a document again.",
    icon: Shield,
  },
  {
    title: "Free & Unlimited Access",
    desc: "Store, retrieve, and save your documents at no cost — efficiency should be free.",
    icon: Infinity,
  },
  {
    title: "Seamless Collaboration",
    desc: "Share documents effortlessly and work smarter with teammates, clients, or classmates.",
    icon: Users,
  },
  {
    title: "Smart Search & Organization",
    desc: "Find what you need in seconds with powerful search and categorization.",
    icon: Search,
  },
  {
    title: "Cross-Device Access",
    desc: "Whether on phone, tablet, or desktop, your documents are always just a tap away.",
    icon: Smartphone,
  },
];

function Features() {
  const { appMode } = useAppContext();
  return (
    <section
      id="about"
      className={`py-12 bg-gray-100 ${
        !appMode ? "bg-gray-100/1.5" : "bg-zinc-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 dark:text-gray-500 mb-10">
          What Sets Paperless Apart
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white ${
                  appMode ? "dark:bg-slate-800" : ""
                } shadow-sm rounded-2xl p-6 hover:shadow-md transition`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100  rounded-xl">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-600">
                    {feature.title}
                  </h3>
                </div>
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

export default Features;
//dark:bg-slate-800
//dark:bg-blue-900
