import { connect } from 'react-redux';
import { logout }  from './../../actions/session_actions';
import Greeting    from './greeting';

const msp = (state) => {
  // debugger
  const user = state.session?
    state.entities.users[state.session.id]
    :
    null;
  // debugger
  return {
    currentUser: user,
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Greeting);
