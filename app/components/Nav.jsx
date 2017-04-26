var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav= () => {
  return (
      <div>
        <ul>
          <li>
            React Timer App
          </li>
          <li>
            <IndexLink to="/">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown">Countdown</Link>
          </li>
        </ul>
      </div>
  );
};

module.exports = Nav;
