import { useState } from "react";
import { Card } from "../others/Card";
import { Button } from "../others/Button";
import { Input } from "../others/Input";

export default function CreateMarket() {
    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [image, setImage] = useState(null);

    //   const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onloadend = () => setImage(reader.result);
    //       reader.readAsDataURL(file);
    //     }
    //   };

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-8 bg-black text-white min-h-screen">
            <Card className="flex-1 p-6 rounded-lg border border-gray-700">
                {/* Left Section: Market Creation Form */}
                <h2 className="text-xl font-semibold italic text-black">Enter Market Question</h2>
                <Input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter market question"
                    className="mt-2 bg-gray-800 border-gray-600 p-2 rounded w-full"
                />

                <h3 className="text-lg font-bold mt-4 text-black">Description:</h3>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter market description"
                    className="mt-2 bg-gray-800 border-gray-600 p-2 rounded w-full h-24"
                />

                <div className="mt-4 flex gap-4 items-center">
                    <label className="cursor-pointer bg-gray-800 p-3 rounded-lg border border-gray-600">
                        Upload Image
                        <input type="file" className="hidden" />
                    </label>
                    {image && <img src={image} alt="Uploaded" className="w-20 h-20 rounded-lg" />}
                </div>

                <div className="mt-6 border border-gray-600 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-black">Fund Market (Dev Buy)</h3>
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount in SOL"
                        className="mt-2 bg-gray-800 border-gray-600 p-2 rounded w-full"
                    />
                    <Button className="mt-2 bg-green-600 hover:bg-green-700 p-2 rounded w-full">
                        Confirm
                    </Button>
                </div>
                {/* Cost and Disclaimer */}
                <div className="w-full p-6 border border-purple-600 bg-gray-800 rounded-lg text-center mt-6">
                    <p className="text-sm text-gray-300">Liquidity pool: 30 SOL</p>
                    <p className="text-sm text-gray-300">Creation Fee: 0.02 SOL</p>
                    <p className="text-lg font-semibold mt-2">Total Cost: 1.02 SOL</p>
                </div>
                <div className="flex items-center justify-between bg-gray-800 w-full border border-gray-700 p-4 rounded-lg mt-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)} />
                        <span>Disclaimer, Terms of Agreement</span>
                    </label>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg float-right mt-5">Create Market</Button>
            </Card>

            {/* Right Section: Recently Proposed Markets */}
            <Card className="w-96 p-6 rounded-lg border border-gray-700">
                <h2 className="text-lg font-semibold">Recently Proposed Markets</h2>
                <ul className="mt-4 space-y-3">
                    {Array(5).fill("Will the United Healthcare CEO Assassin be located before December 20th?").map((item, index) => (
                        <li key={index} className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            {item}
                            <div className="mt-2 bg-gray-600 h-2 rounded-full">
                                <div className="bg-green-500 h-2 w-1/3 rounded-full"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Card>


        </div>
    );
}
