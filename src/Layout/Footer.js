import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="bg-body-tertiary">
            <Container className="pt-3 pb-3">
            <div className="text-center">
                <p className="fw-bold">Develop by <Link target='_blank' to='https://alizelabd.github.io/portfolio'>AleizBhar</Link></p>
            </div>
            </Container>
        </footer>
    );
}
export default Footer;