import React from 'react'
import { useEffect } from "react";
export default function Error() {
    useEffect(() => {
        document.title = "404";
      }, []);
  return (
    <div className='error-page pt-5'>
      <p>not-found works!</p>
    </div>
  )
}
