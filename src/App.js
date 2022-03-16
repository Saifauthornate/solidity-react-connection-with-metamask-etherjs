import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useWeb3React } from '@web3-react/core';
import { Injected } from './Components/Wallets/Connectors';

function App() {

  const { connector, library, account, chainId, active, activate, deactivate } = useWeb3React()

  async function connected() {
    await activate(Injected)
  }
  async function disconnect() {
    await deactivate(Injected)
  }

  return (
    <div className='container-fluid'>

      <div className="row bg-warning" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="col-6 "><h3>Connection With MetaMask</h3></div>
        <div className="col-6 text-end">
          {active ?
            <div>Connected to MetaMask <button onClick={disconnect} className='btn btn-danger'>Disconnect</button> </div> :
            <div>
              Not Connectd to MetaMask   <button onClick={connected} className='btn btn-dark'>Connect</button>
            </div>
          }
        </div>
      </div>

      <div className="row text-center mt-5 text-center">
        <div className="col-12">
          {active ?
            <div>
              <div>ChainId: {chainId}</div><br />
              <div>Account: {account}</div><br />
            </div> : 'not active'}

        </div>
      </div>
    </div>
  );
}

export default App;