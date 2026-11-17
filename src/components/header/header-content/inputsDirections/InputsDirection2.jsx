const InputsDirection2 = () => {
    const handleChangeWhere = (e) => {
      console.log(e.target.value);
    };
  
    return (
      <>
        <input
          name='InputDirection'
        //   id='inputWhere'
          type='text'
          className='input_direction'
          placeholder='Куда'
          onChange={handleChangeWhere}
          maxLength='25'
        />
      </>
    );
  }
  
  export default InputsDirection2;