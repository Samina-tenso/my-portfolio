import * as React from "react";

function Arrow(props) {
    return (
        <svg
            width={24}
            height={62}
            fill="none"
            className="my-4 m-auto"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.94 61.06a1.5 1.5 0 002.12 0l9.547-9.545a1.5 1.5 0 10-2.122-2.122L12 57.88l-8.485-8.486a1.5 1.5 0 10-2.122 2.122l9.546 9.546zM10.5 0v60h3V0h-3z"
                fill="#000"
            />
        </svg>
    );
}

export default Arrow;


