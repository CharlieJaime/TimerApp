var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function(){
    var {countdownStatus} = this.props;
    var renderStartStopBtn = () =>{
      if(countdownStatus === 'started'){
        return <button className='btn-pause'>Pause</button>
      }else if(countdownStatus === 'paused'){
        return <button className='btn-start'>Start</button>
      }
    };

    return(
      <div>
        {renderStartStopBtn()}
        <button className='btn-clear'>Clear</button>
        }
      </div>
    )
  }
});

module.exports = Controls;
