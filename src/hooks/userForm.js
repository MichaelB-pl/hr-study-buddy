import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return { ...state, [action.field]: action.value };
    case actionTypes.clearValues:
      return { ...action.initialValues };
    case actionTypes.consentToggle:
      return { ...state, consent: !state.consent };
    case actionTypes.throwError:
      return { ...state, error: action.errorValue };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    const { name: field, value } = e.target;
    dispatch({ type: actionTypes.inputChange, field, value });
  };

  const handleCleanForm = () => {
    dispatch({
      type: actionTypes.clearValues,
      initialValues,
    });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  return {
    formValues,
    handleInputChange,
    handleCleanForm,
    handleThrowError,
    handleToggleConsent,
  };
};
