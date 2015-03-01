ListItem = React.createClass({
  componentDidMount: function () {
  },
  render: function () {
    return (
			<li>
				<span>{ this.props.item.name }</span> 
				<p>{ this.props.item.description }</p>
			</li>
		);
  }
});


