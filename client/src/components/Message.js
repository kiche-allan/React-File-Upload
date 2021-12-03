// import React from 'react'
// import PropTypes from 'prop-types'

// const Message = ({ msg }) => {
//     return (
       
//         <div className="alert alert-warning alert-dismissible fade show" role="alert">
//             {msg}
//   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
        
//     );
// };

// Message.propTypes = {
//     msg: PropTypes.string.isRequired
// };

// export default Message

import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ msg }) => {
    return (
       
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
        
    );
};

Message.propTypes = {
    msg: PropTypes.string.isRequired
};

export default Message
