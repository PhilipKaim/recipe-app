import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info: {props.info}</p>
  </div>
);

// hoc
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// hoc
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
      <div>
        { props.isAuthenticated === true ? (
          <WrappedComponent {...props}/>
        ) :
          (
            <p>Please sign-in to see the details</p>
          )
        }
      </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='these are the details' />,
//document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='these are the details' />,
document.getElementById('app'));
