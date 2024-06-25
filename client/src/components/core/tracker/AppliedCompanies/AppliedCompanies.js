import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PlusIcon from "../../../../assests/tracker/daily_target_plus.png";

const AppliedCompanies = () => {
  const [dailyTarget,setDailyTarget] = useState(0);
  return (
    <div>
      <div className="flex justify-end my-4">
        <div className="flex gap-0.5 dark:text-white items-center">
          Daily Target : <span>{dailyTarget}</span>
          <span>/</span>
          <span>40</span>
          <img src={PlusIcon} alt="Icon to increase target number" className="w-6 h-6 cursor-pointer" 
                onClick={(prev) => {
                  dailyTarget < 40 && setDailyTarget(prev => prev + 1);
                }}
          />
        </div>
      </div>
      <div className="px-2">
        <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
          <span className="text-white">Today</span>
          <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
        </div>
        <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
          <span className="text-white">Yesterday</span>
          <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
        </div>
        <div className="rounded-md bg-[#6A89CC] m-2 py-2 px-4 flex justify-between items-center">
          <span className="text-white">Day before Yesterday</span>
          <IoIosArrowDown className="w-8 h-8 fill-white mr-2" />
        </div>
      </div>
    </div>
  );
};

export default AppliedCompanies;