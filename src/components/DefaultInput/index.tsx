import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  labelText,
  type,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      )}
      <input type={type} id={id} className={styles.input} {...rest} />
    </>
  );
}
