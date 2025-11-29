/** @format */

"use client";

import { FilterX } from "lucide-react";
import { useEffect, useState } from "react";
import { Funnel } from "recharts";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
export default function ColumnFilter({ label, value, onChang, placeholder }) {
  const [inputValue, setInputValue] = useState(value || "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleApply = () => {
    onchange(inputValue);
    setOpen(false);
  };

  const handleClear = () => {
    setInputValue("");
    onChang("");
  };
  return (
    <div className='flex items-center gap-1'>
      {label}
      {value ? (
        <Button variant='ghost' size='icon' className='h-6 w-6 text-primary' onClick={handleClear}>
          <FilterX className='h-4 w-4' />
        </Button>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant='ghost' size='icon' className='h-6 w-6 p-1'>
              <Funnel className='h-4 w-4' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-52'>
            <Input
              placeholder={placeholder}
              value={inputValue}
              onChang={(e) => setInputValue(e.target.value)}
              className='mb-2'
            />
            <Button onClick={handleApply}>Apply</Button>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
