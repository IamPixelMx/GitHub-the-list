import { bool } from "prop-types";

const Loader = ({ loading }) => {
  return (
    <div
      className={
        loading
          ? "pageloader is-bg-purple is-active"
          : "pageloader is-bg-purple "
      }
    >
      <span className="title">Cargando...</span>
    </div>
  );
};

Loader.propTypes = {
  loading: bool.isRequired
};

export default Loader;
