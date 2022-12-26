import Icon from "./Icon";
import { AiFillCloseCircle } from "react-icons/ai";
import classNames from "classnames";
import { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[268px] relative">
      <span
        className={classNames({
          "absolute text-[#8e8e8e] pointer-events-none top-0 left-0 h-9 w-9 flex items-center justify-center": true,
          hidden: open
        })}
      >
        <Icon name="search" />
      </span>
      <input
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        type="text"
        placeholder="Search"
        className="h-9 rounded w-full pl-9 outline-none focus:pl-3 bg-[#efefef]"
      />
      <button onClick={() => setOpen(false)} className={classNames({
        "absolute text-[#c7c7c7] rounded-xl hidden top-0 right-0 w-9 h-9 items-center justify-center": true,
        "!flex": open
      })}>
        <AiFillCloseCircle />
      </button>
    </div>
  );
}
