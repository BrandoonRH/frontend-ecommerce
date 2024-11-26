import {cn} from "@/lib/utils";

interface IconButtonProps {
    onClick: () => void;
    icon: React.ReactElement;
    className?: string;
}

export const IconButton = (props: IconButtonProps) => {
    const {onClick, icon, className} = props;

    return (
        <button
                onClick={onClick}
                className={cn("rounded-full flex items-center bg-white border shadow-md hover:scale-110 p-2 transition", className)}
        >
            {icon}
        </button>
    )
}
