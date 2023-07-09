import Card from "./Card"

const Section = ({ title, content }) => {
    return (
        <div>
            <Card>
                <h3>{title}</h3>
                <hr />
                <p>{content}</p>
            </Card>
        </div>
    );
}

export default Section