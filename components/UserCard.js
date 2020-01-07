import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserCard = props => {
  const dispatch = useDispatch();
  const { avatar_url, bio, html_url, id, login, location, name } = props;

  return (
    <div className="card" id={id}>
      <article className="media">
        <figure className="media-left">
          <p className="image is-96x96 is-img-card">
            <img className="is-rounded" src={avatar_url} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="title is-5">
              {name}
              <span>
                <a href={html_url} target="_blank">
                  <small>@{login}</small>
                </a>
              </span>
            </p>
            <p>
              {bio ? bio : <br />}
              <br />
              <small>{location} </small>
            </p>
            <div className="level has-text-centered">
              <p className="level-item is-vertical-align">
                <a href={html_url} target="_blank">
                  <span className="icon hvr-icon-spin">
                    <i>
                      <FontAwesomeIcon
                        className="fas fa-lg hvr-icon"
                        icon={["fab", "github-alt"]}
                      />
                    </i>
                  </span>
                  <span>
                    <small className="is-nice-blue"> Abrir GitHub</small>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="media-right icon">
          <span className="icon hvr-icon-pulse-shrink">
            {`Agregar a lista `}
            <i>
              <FontAwesomeIcon
                className="fas fa-lg hvr-icon"
                icon="user-plus"
              />
            </i>
          </span>
        </div>
      </article>
    </div>
  );
};

export default UserCard;
