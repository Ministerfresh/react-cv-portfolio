function Button({ children, href, variant = "primary", className = "", ...props }) {
    const baseStyles = "inline-flex items-center justify-center text-center px-6 py-3 rounded-lg font-semibold transition";

    const variants = {
        primary:
        "bg-blue-600 text-white hover:bg-blue-700",
        secondary:
        "border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white",
    };

    return (
        <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </a>
    );
}

export default Button;