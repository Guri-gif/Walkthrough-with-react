import React from "react";

export default function Lists({ items }) {
  return (
    <ul className="ml-4 list-disc">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
