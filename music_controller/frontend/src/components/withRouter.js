<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
 };

  return Wrapper;
};
=======
import React from "react";
import { useNavigate } from "react-router-dom";

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();

        return (
            <Component
            navigate={navigate}
            {...props}
            />
        );
    };

    return Wrapper;
};
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
