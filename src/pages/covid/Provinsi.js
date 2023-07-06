import AddCovidForm from "../../components/AddCovidForm";
import Hero from "../../components/Hero";
import Table from "../../components/Table";

function CovidProvinsi({provinces, setProvinces}){
    return(
        <>
            <Hero />
            <Table provinces={provinces} setProvinces={setProvinces} />
            <AddCovidForm provinces={provinces} setProvinces={setProvinces} />
        </>
    )
}

export default CovidProvinsi;