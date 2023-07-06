import { useSelector } from "react-redux";
import TableBody from "../TableBody";
import styles from "./TableHead.module.css"

function TableHead({provinces}){
    //akses state redux
    // const provinces = useSelector((state)=> state.provinces.provinces)

    let angka ='';
    
    return(
        <>
            <thead className={styles.table__head}>
                            <tr className={styles.table__row}>
                                <th className={styles.th}>No</th>
                                <th className={styles.th}>Provinsi</th>
                                <th className={styles.th}>Positif</th>
                                <th className={styles.th}>Sembuh</th>
                                <th className={styles.th}>Dirawat</th>
                                <th className={styles.th}>Meninggal</th>
                            </tr>
                        </thead>
                        {provinces.map((kota)=>{
                            angka++
                            return <TableBody key={angka} kota={kota} no={angka} />
                        })}
        </>
    )
}

export default TableHead;