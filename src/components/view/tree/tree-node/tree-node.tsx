import { useState } from 'react';
import { URL_API } from '../../../../const';
import Tree from '../tree';

type TreeNodeProps = {
  node: any,
  setImg: React.Dispatch<React.SetStateAction<string>>,
  modalToggler: React.Dispatch<React.SetStateAction<boolean>>,
}

function TreeNode({node, setImg, modalToggler} : TreeNodeProps) : JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => setIsOpened(!isOpened);

  const handleOpenModal = (img: string) => {
    setImg(img);
    modalToggler(true);
  }

  return (
    <li className="tree-node pb-2">
      {
        node.image ? 
          <img
            src={`${URL_API}${node.category}/${node.image}`}
            alt={`File: ${node.image}`}
            width={100}
            height={100}
            onClick={() => handleOpenModal(`${URL_API}${node.category}/${node.image}`)}
          /> : 
          (
            <>
              <div className="d-flex align-items-baseline">
                <div
                  className="tree-toggler d-flex align-items-center justify-content-center"
                  onClick={handleClick}
                >{isOpened ? '-' : '+'}</div>
                <span>{node.id}</span>
              </div>
              {
                isOpened && <Tree treeData={node.value} setImg={setImg} modalToggler={modalToggler}/>  
              }
            </>
          )
      }
    </li>
  )
}

export default TreeNode;
