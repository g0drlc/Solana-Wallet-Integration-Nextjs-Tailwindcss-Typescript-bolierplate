import { useState } from "react";
import { Input } from "../others/Input";
import { Button } from "../others/Button";
import { Card } from "../others/Card";

export default function MarketDetails() {
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { user: "anonymous", timestamp: "20:28 12/7/2025", text: "comment text" },
    { user: "anonymous", timestamp: "20:28 12/7/2025", text: "comment text" }
  ]);

  const submitComment = () => {
    if (comment.trim()) {
      setComments([...comments, { user: "anonymous", timestamp: new Date().toLocaleString(), text: comment }]);
      setComment("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-8 bg-black text-white min-h-screen mt-40">
      {/* Left Sidebar: Market List */}
      <div className="w-1/3 p-4 border border-gray-700 rounded-lg">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search markets..."
          className="bg-gray-800 border-gray-600 p-2 rounded w-full"
        />
        <h3 className="text-sm text-gray-400 mt-4">Sort By:</h3>
        <div className="flex gap-2 mt-2">
          <Button className="p-2 bg-gray-700 rounded">🔼</Button>
          <Button className="p-2 bg-gray-700 rounded">🔽</Button>
          <Button className="p-2 bg-gray-700 rounded">🔍</Button>
        </div>
        <div className="mt-4 space-y-2">
          {Array(5).fill("Will the United Healthcare CEO Assassin be located before December 20th?").map((item, index) => (
            <Card key={index} className="p-3 bg-gray-800 border text-black border-gray-600 rounded-lg">
              {item}
              <div className="mt-2 bg-gray-600 h-2 rounded-full">
                <div className="bg-green-500 h-2 w-3/4 rounded-full"></div>
              </div>
              <p className="text-xs text-green-400">48 hours left</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-1">
          {/* Main Content: Market Details */}
          <div className="flex-1 p-6 border border-gray-700 rounded-lg">
            <h2 className="text-2xl font-bold">Will the United Healthcare Assassin be located before December 20th?</h2>
            <p className="text-gray-400 text-sm">anonymous • date published</p>
            <p className="mt-4 text-gray-300">Description text goes here...</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg">Cast Vote</Button>

            <div className="mt-6 p-4 border border-gray-600 rounded-lg">
              <h3 className="text-lg font-bold">Market Making</h3>
              <div className="flex flex-row justify-between ">
                <div className="text-center border border-gray-600 rounded-lg">Liquidity Pooled: $4505.20</div>
                <div className="text-center border border-gray-600 rounded-lg">Yield Return Fee: 1.25%</div>
                <div className="text-center border border-gray-600 rounded-lg">TVL Threshold: $5000.00</div>
              </div>
              <div className="mt-2 border border-gray-600 rounded-lg w-full h-100">
                <Button className="mt-4 bg-green-600 hover:bg-green-700 p-2 rounded-lg">Pool</Button>

              </div>
            </div>
          </div>

          {/* Right Sidebar: Voting & Providers */}
          <div className="w-1/4 p-4 border border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold">Time Remaining: 48 hours</h3>
            <div className="mt-2 bg-gray-600 h-2 rounded-full">
              <div className="bg-green-500 h-2 w-3/4 rounded-full"></div>
            </div>
            <h4 className="mt-4 font-bold">Voters</h4>
            <ul className="text-gray-300 text-sm">
              {Array(5).fill("holder 1 - 5 votes").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4 className="mt-4 font-bold">Providers</h4>
            <ul className="text-gray-300 text-sm">
              {Array(5).fill("holder 1 - 14.4%").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comments Section */}
        <div className="w-full p-4 border border-gray-700 rounded-lg mt-4">
          <h3 className="text-lg font-bold">Comments</h3>
          <div className="mt-4 space-y-3">
            {comments.map((c, index) => (
              <div key={index} className="p-3 bg-gray-800 border border-gray-600 rounded-lg">
                <p className="text-gray-400 text-xs">{c.user} • {c.timestamp}</p>
                <p className="text-gray-200">{c.text}</p>
              </div>
            ))}
          </div>
          <Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a reply"
            className="mt-4 bg-gray-800 border-gray-600 p-2 rounded w-full"
          />
          <Button onClick={submitComment} className="mt-2 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg">Submit</Button>
        </div>
      </div>

    </div>
  );
}
