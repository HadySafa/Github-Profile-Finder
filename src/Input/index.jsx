
import { IoMdSearch } from "react-icons/io";
import styles from './style.module.css'
import { useContext } from "react";
import { MyContext } from "../Context/Context";



function Input() {

    const {user,setUser,setSubmit} = useContext(MyContext);

    function handleChange(e){
        setUser(e.target.value)
    }

    function handleSubmission(e){
        e.preventDefault();
        setSubmit(true);
    }

    return (
        <section className={styles.section}>
            <form className={styles.form} onSubmit={handleSubmission}>
                <input value={user} onChange={handleChange} className={styles.input} type="text" placeholder='Enter a username' />
                <button className={styles.button} type="submit">< IoMdSearch /></button>
            </form>
        </section>
    )

}

export default Input