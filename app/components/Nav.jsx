var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div>
      <ul>
        <li>TimingApp</li>
        <li><IndexLink to='/'>Timer</IndexLink></li>
        <li><Link to='/'>Countdown</Link></li>
      </ul>
    </div>
  )
};

module.exports = Nav;
