import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class CargoList extends React.Component {
  static defaultProps = {
    list: [
      {
        cover:
          'http://image.manamana.net//image/1528501057/mana_o_1cfgs6d9l1crleboqc8g6v14gb3t.png',
        name: '棒球手套 2014罗林斯 RGG1200',
        integral: 801,
        price: '50.00',
        quantity: 15,
      },
      {
        cover:
          'http://image.manamana.net//image/1528501057/mana_o_1cfgs6d9l1crleboqc8g6v14gb3t.png',
        name: '棒球手套 2014罗林斯 RGG1200',
        integral: 80,
        price: '50.00xx',
        quantity: 15,
      },
      {
        cover:
          'http://image.manamana.net//image/1528501057/mana_o_1cfgs6d9l1crleboqc8g6v14gb3t.png',
        name: '棒球手套 2014罗林斯 RGG1200',
        integral: 80,
        price: '50.00xx',
        quantity: 15,
      },
    ],
  };
  static propTypes = {
    list: PropTypes.array,
  };
  lisView = () => {
    const { list } = this.props;
    return list.map((item, index) => {
      return (
        <div
          key={index}
          className={styles.listWrapper}
          onClick={() => this.props.history.push(`/goods-detail/${item.id}`)}
        >
          <li key={index} className={styles.item}>
            <img alt="图片" src={item.cover} className={styles.cover} />
            <p className={styles.name} style={{ WebkitBoxOrient: 'vertical' }}>
              {item.name}
            </p>
            <p className={styles.price}>
              {item.integral && (
                <>
                  <span className={styles.num}>{item.integral}</span>
                  积分+
                </>
              )}
              <span className={styles.num}>{item.price}</span>元
            </p>
          </li>
        </div>
      );
    });
  };
  render() {
    const { style } = this.props;
    return (
      <ul className={styles.wrapper} style={style}>
        {this.lisView()}
      </ul>
    );
  }
}
export default withRouter(CargoList);
