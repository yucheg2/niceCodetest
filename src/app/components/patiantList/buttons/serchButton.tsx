import * as React from "react";

const SerchButton = ({
    onClick,
    active,
}: {
    active: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            className={"serchButton" + (active ? " active" : "")}
            onClick={onClick}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_3_8765)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2641 14.2379L17.7871 16.761C18.071 17.0448 18.071 17.5035 17.7872 17.7873C17.6456 17.9289 17.4598 18 17.274 18C17.0881 18 16.9023 17.9289 16.7608 17.7873L14.2378 15.2643L15.2641 14.2379ZM14.311 13.1555C15.2361 11.9815 15.7909 10.503 15.7909 8.89555C15.7909 5.09357 12.6974 2 8.89544 2C5.0935 2 2 5.09353 2 8.89552C2 12.6975 5.09353 15.7911 8.89547 15.7911C10.4143 15.7911 11.8181 15.2957 12.9586 14.4606L12.9576 14.4597C12.9576 14.4597 13.4889 14.0253 13.7818 13.7324C14.0522 13.462 14.278 13.1949 14.311 13.1555ZM3.45169 8.89552C3.45169 11.8976 5.89339 14.3394 8.89547 14.3394C11.8975 14.3394 14.3393 11.8976 14.3393 8.89552C14.3393 5.89341 11.8975 3.45167 8.89547 3.45167C5.89339 3.45167 3.45169 5.89341 3.45169 8.89552Z"
                        fill="#616F82"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_3_8765">
                        <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(2 2)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </button>
    );
};

export default SerchButton;
