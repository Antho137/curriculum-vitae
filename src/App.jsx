import { useState } from 'react'
import Curriculum from './components/Curriculum.jsx'
import EditInfo from './components/EditInfo.jsx'
import CVData from './components/CVData.jsx'
import './App.css'


function App() {
  const [cvInfos, setCVInfos] = useState([]);
  const [editCV, setEditCV] = useState(null);

  const saveInfo = (info) => {
      setCVInfos([...cvInfos, info]);
  };

  const updateInfo = (index, info) => {
      setEditCV(info);
      setCVInfos(cvInfos.filter((_, i) => i !== index));
  };

  const saveUpdate = (info) => {
      setCVInfos([...cvInfos, info]);
      setEditCV(null);
  }

  return (
    <>
      <div className="App">
        <h1>Curriculum Vitae</h1>
        <div className="App-infos">        
          {editCV ? (
            <EditInfo 
              info={editCV}
              onUpdateInfo={saveUpdate}
            />
            ) : (
            <div>
              <Curriculum 
                onSave={saveInfo} 
              />
            </div>
          )}
          <div>
            <CVData
              cvInfos={cvInfos}
              onUpdateInfo={updateInfo} 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
