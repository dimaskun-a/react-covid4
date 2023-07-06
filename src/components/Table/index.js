import TableHead from "../TableHead";
import styles from "./Table.module.css";

function Table({provinces}){

    return(
            <div className={styles.container}>
                <section className={styles.table__provinsi}>
                    <h2 className={styles.title}>Provinsi</h2>
                    <p className={styles.tagline}>Data Covid Berdasarkan Provinsi</p>
                        <table className={styles.table}>
                            <TableHead provinces={provinces}/>
                        </table>
                </section>
            </div>
    )
}

export default Table;