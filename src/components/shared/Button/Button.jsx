import React from 'react'

export default function Button(props) {
  const { children, text, img } = props;
  return (
    <button className={`text-white p-2 w-50 bg-[#287FE8]`}>
      {text}
      {children}
      {img}
    </button>
  );
}