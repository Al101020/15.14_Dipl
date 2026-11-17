const ChoiceOfCity = (props) => {
  const arr = props.props;
  console.log(arr);
  if (arr.lengh === 0) {
    return;
  } else {
    return (
      <div className='choice-of-city'>
        {arr.map((item, idA) => (
          <>
            <div>{idA}</div>
            <div>{item.name}</div>
          </>
        ))}
      </div>
    );
  }
}

export default ChoiceOfCity;
