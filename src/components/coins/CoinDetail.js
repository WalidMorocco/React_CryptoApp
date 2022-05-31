import React, { useContext, useState } from 'react';
import { Modal } from '../Modal';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchCoin from '../../hooks/coins/useFetchCoin';
import Spinner from '../Spinner';
import Card from '../Card';
import { ThemeContext } from '../../context/themeContext';

const CoinDetail = () => {
  const [showModal, setShowModal] = useState(false);

  const onDismissModal = () => {
    setShowModal(false);
}

  const navigate = useNavigate();
  const { coinId } = useParams();
  const { data: coin, loading, error } = useFetchCoin(coinId);
  const { theme } = useContext(ThemeContext);

  const handleGoBackClick = () => {
    navigate(-1);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>There was an error</p>;
  }

  return (
    <Card>
      <div className="coin-detail-container" style={({ backgroundColor: theme.background, color: theme.foreground })}>
        {coin && (
          <>
            <div className="coin-details">
              <strong>{coin?.data.symbol}</strong>
              <p>{coin?.data.name}</p>
              <p>Price in USD: {coin?.data.market_data.price_usd}</p>
              <p>Evolution in the last 24 hours: {coin?.data.market_data.percent_change_usd_last_24_hours}% </p>
              <p>All time high: {coin?.data.all_time_high.price}</p>
            </div>
          </>
        )}
      </div>
      <button
        style={{ alignItems: 'flex-end', marginTop: '15px' }}
        onClick={handleGoBackClick}
      >
        Go back
      </button>
      <button
        style={{ alignItems: 'flex-end', marginTop: '15px' }}
        onClick={() => setShowModal(true)}
      >
        Go back
      </button>
      {showModal && (
        <div id="first-child">
          <div id="second-child">
            <div id="third-child">
              <div id="fourth-child" style={{ color: 'yellow', fontSize: '2em' }}>
                <Modal dismissModal={onDismissModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
    
  );
};

export default CoinDetail;
