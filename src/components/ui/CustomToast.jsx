const CustomToast = ({ type = "success", title, message }) => {
    const config = {
        success: { icon: "✓", color: "text-green-500", bg: "bg-green-50", border: "border-green-200" },
        error: { icon: "✕", color: "text-red-500", bg: "bg-red-50", border: "border-red-200" },
        info: { icon: "i", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
        warning: { icon: "!", color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-200" },
    };

    const { icon, color, bg, border } = config[type];

    return (
        <div className={`flex items-start gap-3 p-1`}>
            <span className={`${color} ${bg} ${border} border w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0`}>
                {icon}
            </span>
            <div>
                {title && <p className="text-sm font-semibold text-gray-900">{title}</p>}
                {message && <p className="text-xs text-gray-500 mt-0.5">{message}</p>}
            </div>
        </div>
    );
};

export default CustomToast;