import StyledCards from "./Cards.styled.js";
import Card from '../Card/index';



function Cards(props){
    const {covids, title, tagline} = props;
    const stats = ["Confirmed","Recovered","Deaths"]
    let id = '';

    // console.log(covids);

    return(
        <StyledCards>
            <div>
                <section>
                    <h2>{title}</h2>
                    <p>{tagline}</p>
                    <div className="card__container">
                        {
                            covids.map((covid,index) => {
                                id++
                                return <Card key={id}  covid={covid} style={stats[index]}/>
                            })
                        }
                    </div>
                </section>
            </div>
        </StyledCards>
    )
}

export default Cards;