import logo from "./logo.svg";
import "./App.css";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import icon4 from "./images/icon4.svg";
import icon5 from "./images/icon5.svg";
import icon6 from "./images/icon6.svg";
import illus1 from "./images/illus1.png";
import illus2 from "./images/illus2.png";
import image from "./images/image.png";
import icon7 from "./images/Group 398.svg";
import icon8 from "./images/Group 399.svg";
import icon9 from "./images/Group 400.svg";
import logo1 from "./images/logo.svg";
import fb from "./images/fbr.svg"
import ig from "./images/igr.svg"
import tw from "./images/twtr.svg"
import li from "./images/lkdr.svg"

function App() {
  return (
    <div className="App">
      <div className="infoSocial">
        <div className="infoContent">
          <div>
            <p>+234 812 016 8116</p>
            <p>info@cbitindustries.com</p>
          </div>

          <div>
            <img alt="social icon" src={icon1} />
            <img alt="social icon" src={icon2} />
            <img alt="social icon" src={icon3} />
            <img alt="social icon" src={icon4} />
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="navContent">
          <div>
            <img alt="logo" src={icon5} />
            <img alt="logo" src={icon6} />
          </div>

          <button>BOOK YOUR PROJECT</button>
        </div>
      </nav>

      <div className="hero">
        <div className="heroContent">
          <div className="heroRight">
            <div>
              <h1>Products and Services</h1>
              <p>
                At C-Bit industries, our development process employs the use of
                world-class standards to give you secure, functional, robust and
                reliable solutions.
              </p>
            </div>
          </div>

          <div>
            <img alt="illus" src={illus1} className="illus1" />
            <img alt="illus" src={illus2} className="illus2" />
          </div>
        </div>
      </div>

      <div className="offer">
        <div className="offerContent">
          <div className="offerImage">
            <div className="offerImageContent">
              <div className="card1"></div>

              <img alt="offer" src={image} />
            </div>
          </div>

          <div className="offerMain">
            <div>
              <img alt="icon" src={icon9} />

              <h2>Tailor Made Solutions</h2>

              <p>
                In C-BIT, we have dedicated ourselves in intensive research of
                the best, robust, secure and scalable technologies and we
                understand what drives traffic to our products and customer
                products. We also have a team dept at planning, designing and
                implementing 100% customized business solutions to help our
                customer stay ahead of the competition.
              </p>
            </div>

            <div>
              <img src={icon8} alt="icon" />

              <h2>Budget-Friendly Solutions</h2>

              <p>
                C-Bit subsccribes to an economical and agile method to help
                clients build cost-effective development solutions. We
                understand that cost-effective does not only apply to
                development cost, hence we make sure that product delivers the
                exact performance you desire, along with post-development
                support and maintenance.
              </p>
            </div>

            <div>
              <img alt="icon" src={icon7} />

              <h2>Industy Best Practices</h2>

              <p>
                We understand that in order to build great products, we have to
                utilize state-of-the-art tools and technologies. Our team of
                dedicated, young engineers offer custom solutions of
                consultation to ensure that your project matches your business
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footerContent">
          <img alt="logo" src={logo1} />

          <p className="footerText">
              C-BIT Industries is a technology and information technology
              organization that is designed to bring digital services and
              solutions to businesses and individuals. We utilize the latest
              techniques and technology to build solutions and our quest for
              innovation makes us continuously embark on development of new
              solutions and also adaptation of existing solutions for improved
              performance.
            </p>

          <div>
            

            <p>
              20A, Babatunde Anjous Avenue, off Admiralty Way, Lekki Phase 1,
              Lagos
            </p>

            <p>+234 908 7516 846</p>
          </div>

          

          <div>
            <img alt="social"src={fb} className="icons" />
            <img alt="social" src={li} />
            <img alt="social" src={tw} />
            <img alt="social" src={ig} />
          </div>

          <p className="footerText">Copyright 2020 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
