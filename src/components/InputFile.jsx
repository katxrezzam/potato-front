import styles from './InputFile.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons/faUpload";
import PropTypes from "prop-types";

const InputFile = ({label, handleChange}) => {

  return (
      <div className={styles.inputContainer}>
        <input id='file' className={styles.input} type='file' accept='image/*' onChange={handleChange}/>
        <label className={styles.labelInput} htmlFor="file">
          <p style={{justifyContent: label ? 'left' : 'center'}}
             className={styles.textLabel}>{label ? label : 'Choose a file'}</p>
          <FontAwesomeIcon className={styles.iconLabel} icon={faUpload}/>
        </label>
      </div>
  );
}
InputFile.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}
export default InputFile;