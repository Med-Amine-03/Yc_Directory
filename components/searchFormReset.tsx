"use client";

import Link from "next/link";
import {X} from "lucide-react";

const searchFormReset = () => {
    const reset=()=>{
        const form =document.querySelector('.search-form') as HTMLFormElement;
        if(form){
            form.reset();
        }
    }
  return (
    <div>
      <button type='reset' onClick={reset}>
    <Link href="/" className="search-btn text-white">< X className="size-50"/></Link>
        </button>
    </div>
  )
}

export default searchFormReset
