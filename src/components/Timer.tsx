import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerProps {
  targetDate: string; // ISO date string
}

const STORAGE_KEY = 'timerTargetDate';

const Timer = ({ targetDate }: TimerProps) => {
  // Get the stored target date or use the prop
  const storedTargetDate = localStorage.getItem(STORAGE_KEY) || targetDate;

  // Store the target date if it's not already stored
  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, targetDate);
    }
  }, [targetDate]);

  const calculateTimeLeft = () => {
    const target = new Date(storedTargetDate).getTime();
    const now = Date.now(); // Gets UTC timestamp
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [storedTargetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center bg-black/70 border-2 border-white rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <span className="text-3xl font-bold text-[#dbff3d] font-cyber">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm mt-2 text-[#dbff3d] font-cyber">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-4">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <TimeUnit value={timeLeft.minutes} label="MINUTES" />
      <TimeUnit value={timeLeft.seconds} label="SECONDS" />
    </div>
  );
};

export default Timer;