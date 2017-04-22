var React = require('React');

var CountdownForm = React.createClass({
  render: function(){
    onSubmit: function(e){
      e.prevent.Default();
      var strSeconds = this.refs.seconds.value;

      if(strSeconds.match(/^0-9/*$)){
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(strSeconds, 10))
      }
    },
    return(
      <div>
        <form ref='form' onSubmit={this.onSubmit className='countdown-form'}>
          <input type='text' ref='seconds' placeholder="Enter time in seconds">
          <button className='button'></button>
        </form>
      </div>
      );
  }
});

module.exports = CountdownForm;
