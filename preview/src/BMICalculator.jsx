import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Scale, Ruler, Info, ArrowLeft, Dumbbell, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";

const BMICalculator = () => {
  const [unit, setUnit] = useState("imperial");
  const [height, setHeight] = useState({ feet: 5, inches: 10, cm: 175 });
  const [weight, setWeight] = useState({ lbs: 170, kg: 77 });
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState(null);
  const [animate, setAnimate] = useState(false);

  const calculateBMI = () => {
    let heightInMeters;
    let weightInKg;

    if (unit === "imperial") {
      const totalInches = (parseInt(height.feet) || 0) * 12 + (parseInt(height.inches) || 0);
      heightInMeters = totalInches * 0.0254;
      weightInKg = (parseFloat(weight.lbs) || 0) * 0.453592;
    } else {
      heightInMeters = (parseFloat(height.cm) || 0) / 100;
      weightInKg = parseFloat(weight.kg) || 0;
    }

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);

      if (calculatedBMI < 18.5) setCategory("underweight");
      else if (calculatedBMI < 25) setCategory("normal");
      else if (calculatedBMI < 30) setCategory("overweight");
      else setCategory("obese");
    }
  };

  const getCategoryInfo = () => {
    const info = {
      underweight: {
        color: "#3b82f6",
        label: "Underweight",
        description: "You may need to gain muscle mass",
        tips: ["Focus on strength training", "Increase protein intake", "Consult a nutritionist"],
      },
      normal: {
        color: "#22c55e",
        label: "Healthy Weight",
        description: "You're in the healthy range!",
        tips: ["Maintain your current routine", "Stay consistent with exercise", "Keep balanced nutrition"],
      },
      overweight: {
        color: "#f59e0b",
        label: "Overweight",
        description: "A fitness plan could help you reach your goals",
        tips: ["Increase cardio sessions", "Watch portion sizes", "Consider personal training"],
      },
      obese: {
        color: "#ef4444",
        label: "Obese",
        description: "Let's work together to improve your health",
        tips: ["Start with low-impact exercises", "Get a personalized plan", "Work with our trainers"],
      },
    };
    return info[category] || info.normal;
  };

  const getBMIPosition = () => {
    if (!bmi) return 0;
    const minBMI = 15;
    const maxBMI = 40;
    const position = ((bmi - minBMI) / (maxBMI - minBMI)) * 100;
    return Math.max(0, Math.min(100, position));
  };

  return (
    <div className="min-h-screen bg-[#2c2c2c] text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:top-5 md:px-6 md:pt-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-3 py-2.5 shadow-[0_0_35px_rgba(0,0,0,.45)] backdrop-blur-2xl md:px-6 md:py-3">
          <Link to="/" className="flex items-center gap-2.5 md:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-red-600/60 bg-black shadow-[0_0_20px_rgba(220,38,38,.35)] md:h-11 md:w-11">
              <span className="text-xs font-black tracking-tight text-white md:text-sm">
                <span className="text-red-600">P</span>F
              </span>
            </div>
            <div className="leading-none">
              <p className="text-xs font-black uppercase tracking-[0.38em] text-white md:text-sm">Prestige</p>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.55em] text-red-500 md:mt-1 md:text-[10px]">Fitness</p>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:border-red-600 hover:text-red-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-red-600 bg-black shadow-[0_0_40px_rgba(220,38,38,.5)] md:h-24 md:w-24"
          >
            <Calculator className="h-8 w-8 text-red-500 md:h-10 md:w-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-black tracking-[0.35em] text-red-500 md:text-sm"
          >
            FREE TOOL
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl font-black uppercase md:text-5xl lg:text-6xl"
          >
            BMI <span className="text-red-600">Calculator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-gray-400 md:text-lg"
          >
            Calculate your Body Mass Index and get personalized recommendations for your fitness journey.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-4 pb-16 md:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Unit Toggle */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-black/50 p-1">
              <button
                onClick={() => setUnit("imperial")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  unit === "imperial" ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Imperial (ft/lbs)
              </button>
              <button
                onClick={() => setUnit("metric")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  unit === "metric" ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Metric (cm/kg)
              </button>
            </div>
          </div>

          {/* Input Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-[#3d3d3d] p-6 md:p-8"
          >
            {/* Height */}
            <div className="mb-6">
              <label className="mb-3 flex items-center gap-2 text-sm font-bold">
                <Ruler className="h-4 w-4 text-red-500" />
                Height
              </label>
              {unit === "imperial" ? (
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={height.feet}
                      onChange={(e) => setHeight({ ...height, feet: e.target.value })}
                      placeholder="Feet"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-center text-xl font-bold outline-none transition focus:border-red-600"
                    />
                    <p className="mt-1 text-center text-xs text-gray-400">Feet</p>
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      value={height.inches}
                      onChange={(e) => setHeight({ ...height, inches: e.target.value })}
                      placeholder="Inches"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-center text-xl font-bold outline-none transition focus:border-red-600"
                    />
                    <p className="mt-1 text-center text-xs text-gray-400">Inches</p>
                  </div>
                </div>
              ) : (
                <div>
                  <input
                    type="number"
                    value={height.cm}
                    onChange={(e) => setHeight({ ...height, cm: e.target.value })}
                    placeholder="Centimeters"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-center text-xl font-bold outline-none transition focus:border-red-600"
                  />
                  <p className="mt-1 text-center text-xs text-gray-400">Centimeters</p>
                </div>
              )}
            </div>

            {/* Weight */}
            <div className="mb-8">
              <label className="mb-3 flex items-center gap-2 text-sm font-bold">
                <Scale className="h-4 w-4 text-red-500" />
                Weight
              </label>
              {unit === "imperial" ? (
                <div>
                  <input
                    type="number"
                    value={weight.lbs}
                    onChange={(e) => setWeight({ ...weight, lbs: e.target.value })}
                    placeholder="Pounds"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-center text-xl font-bold outline-none transition focus:border-red-600"
                  />
                  <p className="mt-1 text-center text-xs text-gray-400">Pounds (lbs)</p>
                </div>
              ) : (
                <div>
                  <input
                    type="number"
                    value={weight.kg}
                    onChange={(e) => setWeight({ ...weight, kg: e.target.value })}
                    placeholder="Kilograms"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-center text-xl font-bold outline-none transition focus:border-red-600"
                  />
                  <p className="mt-1 text-center text-xs text-gray-400">Kilograms (kg)</p>
                </div>
              )}
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateBMI}
              className="w-full rounded-full bg-red-600 px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition hover:scale-[1.02] hover:bg-red-500 active:scale-[0.98] md:text-lg"
            >
              Calculate BMI
            </button>
          </motion.div>

          {/* Results */}
          <AnimatePresence>
            {bmi && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mt-8 rounded-3xl border border-white/10 bg-[#3d3d3d] p-6 md:p-8"
              >
                {/* BMI Display */}
                <div className="text-center">
                  <motion.p
                    animate={animate ? { scale: [1, 1.2, 1] } : {}}
                    className="text-6xl font-black md:text-7xl"
                    style={{ color: getCategoryInfo().color }}
                  >
                    {bmi.toFixed(1)}
                  </motion.p>
                  <p className="mt-2 text-xl font-bold" style={{ color: getCategoryInfo().color }}>
                    {getCategoryInfo().label}
                  </p>
                  <p className="mt-1 text-gray-400">{getCategoryInfo().description}</p>
                </div>

                {/* BMI Scale */}
                <div className="mt-8">
                  <div className="relative h-4 rounded-full bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500">
                    <motion.div
                      initial={false}
                      animate={{ left: `${getBMIPosition()}%` }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-lg border-4"
                      style={{ borderColor: getCategoryInfo().color }}
                    />
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-gray-400">
                    <span>15</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                  <div className="mt-2 flex justify-between text-xs">
                    <span className="text-blue-500">Under</span>
                    <span className="text-green-500">Healthy</span>
                    <span className="text-yellow-500">Over</span>
                    <span className="text-red-500">Obese</span>
                  </div>
                </div>

                {/* Tips */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold">
                    <Target className="h-4 w-4 text-red-500" />
                    Recommendations
                  </p>
                  <ul className="space-y-2">
                    {getCategoryInfo().tips.map((tip, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <Link
                    to="/personal-training"
                    className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold uppercase transition hover:bg-red-500"
                  >
                    <Dumbbell className="h-4 w-4" />
                    Get a Trainer
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase transition hover:border-red-600"
                  >
                    <Heart className="h-4 w-4" />
                    Join the Gym
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 rounded-2xl border border-white/10 bg-[#3d3d3d] p-6"
          >
            <div className="flex gap-3">
              <Info className="h-5 w-5 shrink-0 text-red-500" />
              <div>
                <p className="font-bold">About BMI</p>
                <p className="mt-2 text-sm text-gray-400">
                  Body Mass Index (BMI) is a simple calculation using your height and weight. 
                  While BMI is a useful screening tool, it doesn't directly measure body fat or 
                  account for muscle mass, bone density, and other factors. For a complete 
                  health assessment, consult with a healthcare professional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BMICalculator;
