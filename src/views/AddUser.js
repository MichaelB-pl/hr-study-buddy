import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useWindowHeight } from 'hooks/useWindowSize';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

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
      return initialFormState;
    case actionTypes.consentToggle:
      return { ...state, consent: !state.consent };
    case actionTypes.throwError:
      return { ...state, error: action.errorValue };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);
  const dimensions = useWindowHeight();

  const handleInputChange = (e) => {
    const { name: field, value } = e.target;
    dispatch({ type: actionTypes.inputChange, field, value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: actionTypes.clearValues });
    } else {
      dispatch({ type: actionTypes.throwError, errorValue: 'You need to give consent' });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add a new student</Title>
      <Title>Screen width: {dimensions.width}px</Title>
      <Title>Screen height: {dimensions.height}px</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.consent}
        onChange={() => dispatch({ type: actionTypes.consentToggle })}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
