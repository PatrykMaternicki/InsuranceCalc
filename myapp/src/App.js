import React from 'react';
import Title from './Modules/Components/Title.js';
import InputControler from './Modules/Components/InputControler.js';
import CurrentValue from './Modules/Components/CurrentValue.js';
import InstallmentButtons from './Modules/Components/InstallmentButtons.js';
import DetermiteButtons from './Modules/Components/DetermiteButtons.js';
import CalcRateButton from './Modules/Components/CalcRateButton.js';
import Result from './Modules/Components/Result.js';
const App = () => (
  <section className="app-container app-container--720vw">
  <Title/>
  <div className="app-wraper">
    <div className="app-info">Suma ubezpieczenia</div>
    <InputControler  typeInput="range"/>
    <hr className="app-hr" />
    <div className="app-info"> Ilość rat </div>
    <InstallmentButtons/>
    <div className="app-info"> Stan</div>
    <DetermiteButtons/>

  </div>
  <div className="app-resultWrapper">
  <CalcRateButton /><Result />
  </div>
  </section>

)

export default App;
