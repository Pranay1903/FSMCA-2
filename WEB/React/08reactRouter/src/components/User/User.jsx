import React from "react";
import { useParams } from "react-router-dom"; //this use to take parameter from URL
function User() {
  const { userid } = useParams(); //with this we destructer the parameter from link
  return (
    <div
      className="bg-gray-500 text-white text-3xl p-4"
    >
      User: {userid}
    </div>
  );
}

export default User;
