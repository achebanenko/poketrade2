import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SetItemStyled = styled.li`
  margin: 1em;
  flex: 1 1 calc(33.33% - 2em);
  min-width: 250px;
  max-width: 400px;
  a {
  	display: block;
    padding: 1em;
    height: 100%;
    color: #444;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    &:hover {
      transform: scale(1.1);
      transition: transform .3s;
    }
  }
  .item-logo {
    padding-top: 15px;
    height: 140px;
    text-align: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .item-info {
    padding: 15px;
  }
  .media {
    display: flex;
    .symbol {
      margin-right: 10px;
      width: 48px;
      height: 48px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .media-content {
      .title {
        font-size: 1.5rem;
      }
    }
  }
  .content {
    ul {
      list-style: disc outside;
      margin-left: 2em;
      margin-top: 1em;
    }
  }
`;

const SetItem = ({details}) => {
  return (
    <SetItemStyled>
      <Link to={`cards?setCode=${details.code}`}>
        <div className="item-logo">
          <img src={details.logoUrl} alt={details.name} />
        </div>
        <div className="item-info">
          <div className="media">
            <div className="symbol">
              <img src={details.symbolUrl} alt={details.name} />
            </div>
            <div className="media-content">
              <p className="title">{details.name}</p>
              <p className="subtitle">Released {details.releaseDate}</p>
            </div>
          </div>
          <div className="content">
            <ul>
              { details.standardLegal && <li>Standard Legal</li> }
              { details.expandedLegal && <li>Expanded Legal</li> }
            </ul>
          </div>
        </div>
      </Link>
    </SetItemStyled>
  );
};

export default SetItem;