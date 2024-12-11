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

const Timer = ({ targetDate }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

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