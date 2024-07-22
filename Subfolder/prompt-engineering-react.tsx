import React, { useState } from 'react';

const PromptEngineeringIntro = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "What is Prompt Engineering?",
      content: "Prompt engineering is the practice of designing and refining input prompts to get the best possible output from large language models (LLMs)."
    },
    {
      title: "Key Elements",
      content: "1. Clear instructions\n2. Context provision\n3. Examples (few-shot learning)\n4. Constraints and guidelines"
    },
    {
      title: "Techniques",
      content: "1. Chain-of-thought prompting\n2. Self-consistency\n3. Constitutional AI\n4. Prompt templates"
    },
    {
      title: "Best Practices",
      content: "1. Be specific and explicit\n2. Break complex tasks into steps\n3. Iterate and refine\n4. Consider ethical implications"
    },
    {
      title: "Applications",
      content: "1. Content generation\n2. Code writing and debugging\n3. Data analysis and summarization\n4. Creative writing and brainstorming"
    }
  ];

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Prompt Engineering Basics</h1>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h2>
        <p className="whitespace-pre-line">{steps[currentStep].content}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
      </div>
    </div>
  );
};

export default PromptEngineeringIntro;
