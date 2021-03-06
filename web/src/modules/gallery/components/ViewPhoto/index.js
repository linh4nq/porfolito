import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-lazyload-fadein";
import Icon from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-pro-light";
import styles from "./view-photo.module.css";

const ViewPhoto = ({ photo, handleClose }) =>
  photo !== null && (
    <div className={styles.viewPhoto}>
      <div className={styles.photo}>
        <FadeIn className={styles.load} once>
          {onload => <img src={photo.src} alt={photo.title} onLoad={onload} />}
        </FadeIn>
      </div>
      <div className={styles.panel}>
        <button
          className={styles.close}
          onClick={event => {
            event.preventDefault();
            handleClose();
          }}
        >
          Close <Icon icon={faTimes} size="2x" transform="down-3" />
        </button>
        <h1>{photo.title}</h1>
        <p>
          As a motivation to use memoization the documentation suggests an increase of performance,
          because recalculation on every call may be quite expensive.
        </p>
      </div>
    </div>
  );

ViewPhoto.propTypes = {
  photo: PropTypes.shape({}),
  setLayoutBackground: PropTypes.func,
};

ViewPhoto.defaultProps = {
  photo: null,
  setLayoutBackground: undefined,
};

export default ViewPhoto;
