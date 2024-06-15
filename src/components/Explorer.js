import React, { useState } from "react";
import fileExplorerData from "../fileExplorerData";
import RenderDir from "./RenderDir";
import useTreeTraversal from "../hook/useTreeTraversal";

const Explorer = () => {
  const [explorerData, setExplorerData] = useState(fileExplorerData)
  const {insertNode} = useTreeTraversal()

  const handleInsertNode = (folderId,item,isFolder) =>{
    const finalTree = insertNode(explorerData, folderId, item, isFolder)
    setExplorerData(finalTree)
  }
  return (
    <div>
      <RenderDir dirInfo={explorerData} handleInsertNode={handleInsertNode}/>
      <div></div>
    </div>
  );
};

export default Explorer;
