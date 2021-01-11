import React from 'react';

import StyledSearchBox from './styles/StyledSearchBox';

const SearchBox = ({ handleInput, handleSubmit }) => (
  <StyledSearchBox><div id="cover">
  <form onSubmit={(e) => { handleSubmit(e); }}>
    <div className="tb">
      <div className="td">
      <input type="text" onChange={(e) => { handleInput(e); }} autoComplete="off" placeholder="Chercher une ville..." />
      </div>
      <div className="td" id="s-cover">
        <button type="submit">
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>
  </StyledSearchBox>
);

export default SearchBox;