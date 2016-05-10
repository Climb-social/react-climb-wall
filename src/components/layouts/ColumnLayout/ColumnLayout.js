import React, { PropTypes } from 'react';
import StackedCard from '../../cards/StackedCard';
import Bricks from 'bricks.js';


class ColumnLayout extends React.Component {

  componentDidMount() {
    this._packer = Bricks({
      container: '.Climb--ColumnLayout--inner',
      packed: 'data-packed',
      sizes: this.props.sizes,
    });

    this._packer.resize(true);
    this._packer.pack();
  }

  componentDidUpdate() {
    this._packer.pack();
  }

  componentWillUnmount() {
    this._packer.resize(false); // Does this destory ?
  }

  render() {
    const { Card, items } = this.props;

    return (
      <div className='Climb--ColumnLayout'>
        <div className='Climb--ColumnLayout--inner'>
          {items.map(item =>
            <div key={ item.id } style={{width: 290}}>
              <Card {...item} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ColumnLayout.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array,
  sizes: PropTypes.array,
};

ColumnLayout.defaultProps = {
  Card: StackedCard,
  items: [],
  sizes: [
    { columns: 1, gutter: 30 },
    { mq: '640px', columns: 2, gutter: 30 },
    { mq: '945px', columns: 3, gutter: 30 },
    { mq: '1250px', columns: 4, gutter: 30 },
    { mq: '1556px', columns: 5, gutter: 30 },
    { mq: '1860px', columns: 6, gutter: 30 }
  ]
};

export default ColumnLayout;