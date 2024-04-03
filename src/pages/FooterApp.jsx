import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer className="bg-secondary dark:bg-dark-secondary">
      <div>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand>
              <Link to="/">
                <img
                  src="../public/images/chat-removebg-preview.png"
                  className="mr-3 h-6 sm:h-9"
                  alt="Sample website logo"
                />
              </Link>
            </Footer.Brand>
            <Footer.LinkGroup>
            
              <Footer.Link>
                <Link to="#">About</Link>
              </Footer.Link>

              <Footer.Link >
                <Link to="/privacy">Privacy Policy</Link>
              </Footer.Link>

              <Footer.Link >
                <Link to="/portfolio">Portfolio</Link>
              </Footer.Link>

              <Footer.Link >
                <Link to="/contact">Contact</Link>
              </Footer.Link>

            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
