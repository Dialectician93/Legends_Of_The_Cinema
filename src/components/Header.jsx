import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import cinemaLogo from "../assets/cinema-logo.avif";
const Header = () => {
  return (
    <Container>
      <Image src={cinemaLogo} width="200px"></Image>
      <h1 className="my-3 font-monospace display-3 fw-bold text-success mb-5">Legends Of The Cinema</h1>
    </Container>
  );
};
export default Header;
