import { bool } from "prop-types";

const Splash = ({ load }) => (
  <div
    id="splash"
    className={
      load ? " splash view hide" : " splash view"
    }
  >
    <figure className="level-item image splash-logo">
      <img src="/assets/runa-logo.png" alt="logo-splash" />
    </figure>
    <style jsx>
      {`
        .splash {
          padding-top: 30vh;
        }
        .splash-logo img {
          width: 12.5rem;
          height: auto;
        }
      `}
    </style>
  </div>
);

Splash.propTypes = {
  load: bool.isRequired
};

export default Splash;