import React from 'react';
import './Normalize.css';
import './App.scss';
import BaseContainer from 'components/BaseContainer/BaseContainer';
import Menu from 'components/Menu/Menu';

const App = () => {
  return (
    <>
    <BaseContainer />
    <div className="appContainer">
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
      <Menu />
    </div>
    </>
  );
}

export default App;
