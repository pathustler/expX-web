import React from 'react';
import { useState } from 'react';

interface Result {
    result: Function;
}

const Question: React.FC<Result> = ({ result }) => {
    const handleSetValue = (option: string) => {
        if (option == "Option 3") {
            result("2")
        } else {
            result("1")
        }

        console.log(result)
    }

    return (
        <div className="bg-gray-100 rounded-2xl px-2 w-4/6 max-h-4/5 overflow-auto">
            <div className="p-4">
                <h2 className="text-lg font-semibold">Question 1</h2>
                <p className="text-base font-light text-black mt-2 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis orci ac urna scelerisque, nec fermentum
                    enim consequat. Proin in mi vel felis luctus viverra. Vivamus congue odio velit, id finibus nisi pharetra in.
                </p>
                <div className="flex items-center justify-center h-full">
                    <div className="bg-white rounded-md px-2 py-2 w-full">
                        <button
                            className="w-full bg-white hover:bg-gray-100 py-1 px-2 rounded-md my-1 text-left"
                            onClick={() => handleSetValue('Option 1')}
                        >
                            Option 1
                        </button>
                        <button
                            className="w-full bg-white hover:bg-gray-100 py-1 px-2 rounded-md my-1 text-left"
                            onClick={() => handleSetValue('Option 2')}
                        >
                            Option 2
                        </button>
                        <button
                            className="w-full bg-white hover:bg-gray-100 py-1 px-2 rounded-md my-1 text-left"
                            onClick={() => handleSetValue('Option 3')}
                        >
                            Option 3
                        </button>
                        <button
                            className="w-full bg-white hover:bg-gray-100 py-1 px-2 rounded-md my-1 text-left"
                            onClick={() => handleSetValue('Option 4')}
                        >
                            Option 4
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;