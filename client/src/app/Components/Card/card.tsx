import React from "react";
import { Text } from "../Text/text";

export interface CardProps {
  title: string;
  location: string;
  capacity: number;
  available: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  location,
  capacity,
  available,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-96 h-64">
      <div className="p-4">
        <div>
          <Text className="text-2xl font-bold text-gray-900">{title}</Text>
          <p className="text-sm font-light text-gray-500">{location}</p>
        </div>
        <div className="flex flex-row mb justify-between items-center">
          <p className="text-sm font-light text-gray-500">
            Capacity: {capacity}
          </p>
          <p className="text-sm font-light text-gray-500">
            Available: {available ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};
