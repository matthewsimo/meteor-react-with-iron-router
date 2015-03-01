DisplayList = React.createClass({
  componentDidMount: function () {
  },
  render: function () {

    return (
			<div className="list-wrapper">
				<h3>{ this.props.title }</h3>
				<ul>
				{ this.props.items.map( (item, index) => 
					<ListItem item={item} key={index} />
				)}
				</ul>
			</div>
		);
  }
});

