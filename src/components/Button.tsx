import styles from "./Button.module.css";

export default function Button({
    children,
    type,
    onClick,
}: {
    children?: JSX.Element | string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
    return (
        <button
            type={type ?? "button"}
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
