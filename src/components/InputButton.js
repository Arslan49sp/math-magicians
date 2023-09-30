import PropTypes from 'prop-types';

function InputButton({ inputSymbol, background, handleClickButton }) {
  const defaultClass = `input-container ${background}`;
  const gridspanClass = `input-container grid-span-2 ${background}`;

  return (
    <>
      {inputSymbol === 0 ? (
        <button type="button" className={gridspanClass} onClick={handleClickButton}>
          {inputSymbol}
        </button>
      ) : (
        <button type="button" className={defaultClass} onClick={handleClickButton}>
          {inputSymbol}
        </button>
      )}
    </>
  );
}

InputButton.propTypes = {
  inputSymbol: PropTypes.isRequired,
  background: PropTypes.isRequired,
  handleClickButton: PropTypes.func.isRequired,
};

export default InputButton;
