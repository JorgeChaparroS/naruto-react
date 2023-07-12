import styles from './input.module.scss';

export default function MyInput({placeholder, handleChange}) {
    return <input type='text'
        className={['text w-100 py-1 px-2', styles.input].join(' ')}
        placeholder={placeholder}
        onChange={handleChange}/>
}