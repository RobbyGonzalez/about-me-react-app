import "../css/Card.css"


const Card = ({ children: info }) => {
    return (
        <div className="card">
            {info}
        </div>
    );
}

export default Card