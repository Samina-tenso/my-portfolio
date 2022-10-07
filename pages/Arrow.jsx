import * as React from "react";



function Arrow(props) {
    return (
        <svg
            width={24}
            height={89}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=' mb-6 ml-10 mt-6 hover:animate-bounce'
            {...props}
        >
            <path
                d="M13.5 2V.5h-3V2h3zm-2.56 86.06a1.5 1.5 0 002.12 0l9.547-9.545a1.5 1.5 0 10-2.122-2.122L12 84.88l-8.485-8.486a1.5 1.5 0 10-2.122 2.122l9.546 9.546zM10.5 2v85h3V2h-3z"
                fill="#E2572C"
            />
        </svg>
    );
}



export default Arrow;