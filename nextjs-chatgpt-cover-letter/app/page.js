"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [degree, setDegree] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [specialtyOne, setSpecialtyOne] = useState("");
  const [specialtyTwo, setSpecialtyTwo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <main className="bg-gray-100 min-h-screen ">
      <div className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-2xl sm:text-2xl md:text-3xl sm:text-2xl font-bold text-center">
          Cover Letter Generator
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-3/4 md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="company"
              >
                Name of Company applying to
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="degree"
              >
                Position applying for
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Frontend developer"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="degree"
              >
                Degree
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Mathematics"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="experience"
              >
                Year of Experience(s)
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                type="number"
                placeholder="3"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="specialtyOne"
              >
                Skill
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder=" JavaScript"
                value={specialtyOne}
                onChange={(e) => setSpecialtyOne(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="specialtyTwo"
              >
                Additional skill
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder=" Figma"
                value={specialtyTwo}
                onChange={(e) => setSpecialtyTwo(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center mb-20">
              <button
                className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {loading ? "loading..." : "Generate Cover Letter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
