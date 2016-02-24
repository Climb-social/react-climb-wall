import React, { PropTypes } from 'react';
import Climb from 'climb-social';
import StackedCard from '../../components/Cards/StackedCard';

class ListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const { collectionId } = this.props;
    this.subscription = Climb.getStream(collectionId)
      .subscribe(items => {
        this.setState({ items });
      });
  }

  componentWillUnMount() {
    this.subscription.dispose();
  }

  render() {
    const {
      Card
    } = this.props;

    return (
      <div className='Climb--ListView'>
        {this.state.items.map(item => {
          return (
            <Card key={ item.id } {...item} />
          );
        })}
      </div>
    );
  }
}

ListView.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]),
  collectionId: PropTypes.string.isRequired
};

ListView.defaultProps = {
  Card: StackedCard
};

export default ListView;