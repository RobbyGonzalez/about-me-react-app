import selfie from "../assets/beach-selfie-medium.jpg"

const Header = () => {
    return (
        <>
            <img src={selfie} alt="Robby Gonzalez" width="500px" />
            <h1>Robby Gonzalez</h1>
            <h2>Web Developer</h2>
        </>
    );
}

export default Header