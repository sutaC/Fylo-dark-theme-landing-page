import styles from "./Button.module.css";

export default function Button({
    children,
    onClick,
}: {
    children?: JSX.Element | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
