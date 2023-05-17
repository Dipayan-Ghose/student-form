import React from 'react';
import dateFormat from "dateformat";

const Logout = () => {
    const now = new Date();
    const date= dateFormat(now, "dS mmmm yyyy, h:MM TT");
  
    return (
        <div>
            {date}
        </div>
    );
};

export default Logout;