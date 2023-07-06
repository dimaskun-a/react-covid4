import styles from "./AddCovidForm.styled.js"
import img from "../../assets/img/img6.svg"
import {useState} from 'react';
import Alert from "../Alert";
import StyledAddCovidForm from "./AddCovidForm.styled.js";
import Button from "../ui/Button/index.js";

function AddCovidForm(props){

    const {provinces,setProvinces} = props;

    const [provinsi,setProvinsi] = useState("Jakarta")
    const [status,setStatus] = useState("kasus")
    const [jumlah,setJumlah] = useState("")
    const [isJumlahError,setIsJumlahError] = useState(false)

    function updateProvinces(){
        const index = provinces.findIndex((item) => item.kota === provinsi);
        const foundProvince = provinces.find((item) => item.kota === provinsi);

        provinces[index] = {
            ...foundProvince,
            [status]: parseInt(foundProvince[status]) + parseInt(jumlah),
        }

        setProvinces([...provinces])
        setIsJumlahError(false)
    }

    function handleProvinsi(e){
        setProvinsi(e.target.value)
    }
    
    function handleStatus(e){
        setStatus(e.target.value)
    }
    
    function handleJumlah(e){
        setJumlah(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault();

        if(jumlah === ""){
            setIsJumlahError(true);
        }else {
            updateProvinces();
        }

    }

    return(
        <StyledAddCovidForm>
                <div>
                    <section>
                        <div className="form__left">
                            <img
                            src={img} 
                            alt="" />
                        </div>
                        <div className="form__right">
                            <h2>Form Covid</h2>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form__group">
                                    <label htmlFor="" className="form__label">Provinsi</label>
                                    <select 
                                    name="provinsi" 
                                    id="" 
                                    value={provinsi}
                                    onChange={handleProvinsi}
                                    >
                                    {provinces.map((kota)=>{
                                            return <option key={kota.kota} value={kota.kota}>{kota.kota}</option>
                                    })}
                                    </select>
                                </div>
                                <div className="form__group">
                                    <label htmlFor="" className="form__label">Status</label>
                                    <select 
                                    name="status" 
                                    id="" 
                                    className={styles.form__select}
                                    value={status}
                                    onChange={handleStatus}
                                    >
                                    <option value="kasus">Positif</option>
                                    <option value="sembuh">Sembuh</option>
                                    <option value="dirawat">dirawat</option>
                                    <option value="meninggal">Meninggal</option>
                                    </select>
                                </div>
                                <div className="form__group">
                                    <label htmlFor="" className="form__label">Jumlah</label>
                                    <input 
                                    name="jumlah"
                                    type="number" 
                                    min="0"
                                    value={jumlah}
                                    onChange={handleJumlah}
                                    />{isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
                                </div>
                                <div>
                                    <Button variant='secondary' size='lg'>Submit</Button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
        </StyledAddCovidForm>
            )
}

export default AddCovidForm;