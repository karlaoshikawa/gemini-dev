"use client";

import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const HomePage: React.FC = () => {
  const [geminiData, setGeminiData] = useState("");

  // Access your API key as an environment variable (see "Set up your API key" above)
  // const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyB3Qu9Jd5SWg1RwNa7r7tfNSLiGFhsc3jc"
  );

  useEffect(() => {
    const run = async () => {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = "como falo batata em ingles";
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setGeminiData(text);
      console.log(text);
    };

    run();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Gemini</h1>
      <h2>{geminiData}</h2>
    </div>
  );
};

export default HomePage;
