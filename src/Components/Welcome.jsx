import React from 'react';

const Welcome = (props) => {
  console.log(props.name);

  let disabled = true;
  let type = 'text';
  let name = 'address';

  const user = [
    { role: 'admin', usernamname: 'John' },
    { role: 'employee', usernamname: 'John1' },
    { role: 'hr', usernamname: 'John1' },
  ];

  if (props.name === 'admin') {
    disabled = false;
  } else {
    disabled = true;
  }
  return <input type={type} name={name} disabled={disabled} />;
};
export default Welcome;
