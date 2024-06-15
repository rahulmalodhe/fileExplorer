import React, {useState} from "react";

const RenderDir = ({dirInfo, handleInsertNode}) => {
  const [showFolder, setShowFolder] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleAddFolder = (e, isFolder) => {
    e.preventDefault();
    setShowFolder(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  const handleKeyEnter = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(dirInfo.id, e.target.value, showInput.isFolder);
      setShowInput({...showInput, visible: false});
    }
  };

  if (dirInfo?.isFolder) {
    return (
      <div style={{margin: "10px"}}>
        <div
          className="folder"
          onClick={() => setShowFolder(!showFolder)}
          style={{cursor: "pointer"}}
        >
          <span> 🗂️ {dirInfo.name}</span>
          <div>
            <button onClick={(e) => handleAddFolder(e, true)}> Folder +</button>
            <button onClick={(e) => handleAddFolder(e, false)}> File +</button>
          </div>
        </div>
        <div
          className="FolderItems"
          style={{display: showFolder ? "block" : "none"}}
        >
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "🗂️" : "📃"} </span>
              <input
                type="text"
                onKeyDown={(e) => handleKeyEnter(e)}
                autoFocus
                onBlur={() => setShowInput({...showInput, visible: false})}
              />
            </div>
          )}
          {dirInfo.items.map((exp) => {
            return (
              <RenderDir
                dirInfo={exp}
                key={exp.id}
                handleInsertNode={handleInsertNode}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span className="folder"> 📃 {dirInfo.name}</span>
      </div>
    );
  }
};

export default RenderDir;
